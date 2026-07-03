import emailjs from '@emailjs/browser';

export interface EmailParams {
  from_name: string;
  from_email: string;
  organization?: string;
  message: string;
}

/**
 * Sends a contact email using EmailJS.
 * If the environment variables are not configured, it will fallback to a high-fidelity
 * simulated response to preserve UX in the development preview while logging configuration guides.
 * 
 * To connect EmailJS in the next phase, define the following variables in your environment (or .env):
 * - VITE_EMAILJS_SERVICE_ID
 * - VITE_EMAILJS_TEMPLATE_ID
 * - VITE_EMAILJS_PUBLIC_KEY
 */
export async function sendContactEmail(params: EmailParams): Promise<{ success: boolean; message: string }> {
  const env = (import.meta as any).env || {};
  const serviceId = env.VITE_EMAILJS_SERVICE_ID || '';
  const templateId = env.VITE_EMAILJS_TEMPLATE_ID || '';
  const publicKey = env.VITE_EMAILJS_PUBLIC_KEY || '';

  // Basic validation checks
  if (!params.from_name.trim() || !params.from_email.trim() || !params.message.trim()) {
    return { success: false, message: 'Please fill in all required fields.' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(params.from_email.trim())) {
    return { success: false, message: 'Please enter a valid email address.' };
  }

  // Check if fully configured
  if (!serviceId || !templateId || !publicKey) {
    console.info(
      '%c[EmailJS Service] Setup Guide:\n' +
      'To enable live email delivery, set these environment variables:\n' +
      '  - VITE_EMAILJS_SERVICE_ID\n' +
      '  - VITE_EMAILJS_TEMPLATE_ID\n' +
      '  - VITE_EMAILJS_PUBLIC_KEY\n\n' +
      'Currently operating in simulation mode.',
      'color: #4285F4; font-weight: bold;'
    );

    // Simulate standard network latency
    await new Promise((resolve) => setTimeout(resolve, 1200));

    // Simulate success
    return {
      success: true,
      message: 'Simulated success: Message processed in pipeline! (To receive actual emails, please configure EmailJS keys)'
    };
  }

  try {
    const templateParams = {
      from_name: params.from_name,
      from_email: params.from_email,
      organization: params.organization || 'Not Specified',
      message: params.message,
    };

    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);

    if (response.status === 200) {
      return { success: true, message: 'Message successfully transmitted!' };
    } else {
      return { success: false, message: `EmailJS responded with status: ${response.status}` };
    }
  } catch (error: any) {
    console.error('[EmailJS Service Error]', error);
    return {
      success: false,
      message: error?.text || error?.message || 'An unexpected error occurred while sending your message.'
    };
  }
}
