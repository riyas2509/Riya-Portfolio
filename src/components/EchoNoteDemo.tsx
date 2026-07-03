import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mic, Square, Sparkles, CheckCircle, FileText, BarChart2, Shield, Calendar, Users } from 'lucide-react';

interface SampleMeeting {
  topic: string;
  speaker: string;
  rawText: string;
}

const SAMPLE_MEETINGS: SampleMeeting[] = [
  {
    topic: 'ASK Investment Managers - Real Estate AI Valuation Venture',
    speaker: 'Riya Shah (AI Dev) & Investment Board',
    rawText: 'Thanks for coming in. Riya, let\'s hear about your EchoNote progress. Yes, sir! We\'ve implemented the prompt-based extraction in Google AI Studio to analyze asset descriptions and financial ledgers. We will deploy the first pipeline by June 25th for real estate and cash flows. We need to audit compliance around raw property sheets and train a specialized embedding matrix. Our target is to reduce manual analysis time by 75% while keeping precision above 95%.'
  },
  {
    topic: 'AMA Retail AI Supply Chain Transition Audit',
    speaker: 'Riya Shah & Operations Director',
    rawText: 'Our audit of the 8 logistics hubs shows major bottlenecks in local inventory dispatch. By utilizing temporal forecasting and linear programming, we identified a 14% waste leakage in last-mile routes. Riya will compile the training checklist for managers in Ahmedabad by July 1st. Additionally, we must configure a local backup datastore for offline logging of inventory levels before the major rollout in August.'
  },
  {
    topic: 'Instagram Feature Redesign Team Discussion',
    speaker: 'UI/UX Guild Lead & Riya Shah',
    rawText: 'We analyzed the scroll latency and touch collision points on the search context tray. The telemetry reports a 35% higher friction value. We should separate the discover channel feeds into segmented tabs and pad all click targets to at least 44px. Riya is going to finalize the rapid prototype flows by tomorrow evening and run a user feedback cohort of 12 testers.'
  }
];

export default function EchoNoteDemo() {
  const [selectedTopic, setSelectedTopic] = useState<number>(0);
  const [customText, setCustomText] = useState<string>('');
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recordingSeconds, setRecordingSeconds] = useState<number>(0);
  const [recordingText, setRecordingText] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analysisStage, setAnalysisStage] = useState<string>('');
  const [result, setResult] = useState<any | null>(null);
  const [waveHeights, setWaveHeights] = useState<number[]>(Array(15).fill(4));
  const recordTimerRef = useRef<NodeJS.Timeout | null>(null);
  const waveTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Animate mock audio wave while recording
  useEffect(() => {
    if (isRecording) {
      waveTimerRef.current = setInterval(() => {
        setWaveHeights(Array.from({ length: 15 }, () => Math.floor(Math.random() * 28) + 4));
      }, 100);
    } else {
      if (waveTimerRef.current) clearInterval(waveTimerRef.current);
      setWaveHeights(Array(15).fill(4));
    }
    return () => {
      if (waveTimerRef.current) clearInterval(waveTimerRef.current);
    };
  }, [isRecording]);

  // Handle Recording Timer
  useEffect(() => {
    if (isRecording) {
      const start = Date.now();
      recordTimerRef.current = setInterval(() => {
        setRecordingSeconds(Math.floor((Date.now() - start) / 1000));
      }, 1000);
    } else {
      if (recordTimerRef.current) clearInterval(recordTimerRef.current);
      setRecordingSeconds(0);
    }
    return () => {
      if (recordTimerRef.current) clearInterval(recordTimerRef.current);
    };
  }, [isRecording]);

  const toggleRecording = () => {
    if (!isRecording) {
      setIsRecording(true);
      setRecordingText('');
      setResult(null);
    } else {
      setIsRecording(false);
      // Fill the custom text with simulated transcript
      const currentRaw = SAMPLE_MEETINGS[selectedTopic].rawText;
      setCustomText(currentRaw);
    }
  };

  const handleRunAnalysis = () => {
    const rawInput = customText || SAMPLE_MEETINGS[selectedTopic].rawText;
    if (!rawInput.trim()) return;

    setIsAnalyzing(true);
    setResult(null);

    const stages = [
      'Establishing Google AI Studio Context...',
      'De-noising audios and tokens alignment...',
      'Injecting ASK Investment structured prompt templates...',
      'Executing Gemini Reasoning Model...',
      'Synthesizing actionable timelines and roles...'
    ];

    let currentStageIndex = 0;
    setAnalysisStage(stages[0]);

    const interval = setInterval(() => {
      currentStageIndex += 1;
      if (currentStageIndex < stages.length) {
        setAnalysisStage(stages[currentStageIndex]);
      } else {
        clearInterval(interval);
        
        // Generate structured mock outputs based on keywords in text
        const isASK = rawInput.toLowerCase().includes('ask');
        const isAMA = rawInput.toLowerCase().includes('ama');
        
        let summary = '';
        let actionItems: { task: string; assignee: string; deadline: string }[] = [];
        let metrics: { label: string; target: string }[] = [];
        let sentiment = { positive: 88, objective: 10, concerns: 2 };

        if (isASK) {
          summary = 'A strategic investment audit focused on automated real estate valuations. EchoNote will deploy Google AI Studio templates to bypass legacy property classification bottlenecks, improving analysis speed without sacrificing precision.';
          actionItems = [
            { task: 'Deploy first-phase testing prompts tailored for real estate portfolios', assignee: 'Riya Shah', deadline: 'June 25, 2026' },
            { task: 'Conduct compliance audit of raw real estate spreadsheets & schema mapping', assignee: 'Compliance Team', deadline: 'June 20, 2026' },
            { task: 'Train and validate specialized embeddings for investment variables', assignee: 'Development Guild', deadline: 'June 18, 2026' }
          ];
          metrics = [
            { label: 'Manual Analysis Workload reduction', target: '75% target reduction achieved' },
            { label: 'Evaluation Precision threshold', target: '95%+ bounds verified' }
          ];
          sentiment = { positive: 91, objective: 7, concerns: 2 };
        } else if (isAMA) {
          summary = 'An operational audit mapping logistics inefficiencies across 8 major dispatch hubs in Gujarat. Identified waste leaks and configured offline backup data pipelines before secondary rollouts.';
          actionItems = [
            { task: 'Compile comprehensive inventory management checklists and guidelines', assignee: 'Riya Shah', deadline: 'July 1, 2026' },
            { task: 'Configure offline backup datastore clusters to shield hub outages', assignee: 'DevOps Engineer', deadline: 'June 29, 2026' }
          ];
          metrics = [
            { label: 'Logistics Waste reduction target', target: '14% improvement model' },
            { label: 'Logistics hubs mapped', target: '8 Active locations' }
          ];
          sentiment = { positive: 84, objective: 12, concerns: 4 };
        } else {
          summary = 'Fast-cycle UI assessment aiming to address navigation friction on the Instagram search drawer interface. Establishes spacing changes to touch targets to minimize drop-off rates.';
          actionItems = [
            { task: 'Draft mockups representing segmented search & filter channels', assignee: 'Riya Shah', deadline: 'Tomorrow Evening' },
            { task: 'Initiate beta evaluation with feedback user-cohorts', assignee: 'UI Testing Team', deadline: 'Next Monday' }
          ];
          metrics = [
            { label: 'Touch collision targets size', target: '44px standard padding' },
            { label: 'Visual ergonomics scale improvement', target: '35% reduction in search friction' }
          ];
          sentiment = { positive: 87, objective: 11, concerns: 2 };
        }

        setResult({
          summary,
          actionItems,
          metrics,
          sentiment,
          wordCount: rawInput.split(' ').length,
          executionTime: '0.84s',
          tokensEstimated: Math.floor(rawInput.split(' ').length * 1.35)
        });
        setIsAnalyzing(false);
      }
    }, 900);
  };

  const currentRawText = customText || SAMPLE_MEETINGS[selectedTopic].rawText;

  return (
    <div className="bg-[#050505] border border-white/10 rounded-3xl p-6 md:p-8 text-white relative overflow-hidden" id="echonote-demo">
      {/* Decorative ambient background */}
      <div className="absolute -top-24 -right-24 w-60 h-60 bg-accent-lime/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Control and Input Panel */}
        <div className="flex-1 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block px-3 py-1 rounded-full text-[10px] uppercase font-mono bg-accent-lime/10 text-accent-lime border border-accent-lime/20 tracking-widest">
                Interactive System
              </span>
              <span className="flex items-center gap-1 text-[10px] font-mono text-white/40 uppercase tracking-wider">
                <Shield className="w-3 h-3 text-accent-lime" /> Secure Sandbox
              </span>
            </div>
            <h3 className="text-2xl font-display font-black uppercase text-white flex items-center gap-2 tracking-tight">
              <Sparkles className="w-6 h-6 text-accent-lime" /> EchoNote AI Core
            </h3>
            <p className="text-white/50 text-sm mt-1 max-w-sm font-light">
              Convert audio streams into structured, institutional-grade summaries sponsoring real investment decisions.
            </p>
          </div>

          {/* Meeting Templates */}
          <div className="space-y-2">
            <label className="block text-[10px] font-mono text-white/40 uppercase tracking-wider font-bold">Select Research Context</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {SAMPLE_MEETINGS.map((m, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedTopic(idx);
                    setCustomText('');
                    setResult(null);
                  }}
                  className={`text-left p-4 rounded-xl border text-xs leading-relaxed transition-all duration-300 ${
                    selectedTopic === idx && !customText
                      ? 'bg-accent-lime/10 border-accent-lime/40 text-accent-lime font-bold'
                      : 'bg-white/5 border-white/10 text-white/60 hover:border-white/20 hover:bg-white/10'
                  }`}
                >
                  <p className="font-semibold truncate">{m.topic.split(' - ')[0]}</p>
                  <p className="text-[10px] opacity-50 mt-1 truncate">{m.topic.split(' - ')[1] || m.topic}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Transcript / Audio Box */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="block text-[10px] font-mono text-white/40 uppercase tracking-wider font-bold">Recorded Transcript Input</label>
              <button
                onClick={() => {
                  setCustomText('');
                  setResult(null);
                }}
                className="text-[10px] font-mono text-accent-lime hover:underline cursor-pointer"
              >
                Reset to Templated Text
              </button>
            </div>
            <div className="relative">
              <textarea
                value={customText || SAMPLE_MEETINGS[selectedTopic].rawText}
                onChange={(e) => {
                  setCustomText(e.target.value);
                  setResult(null);
                }}
                placeholder="Type dynamic speech transcript to analyze, or press the live-recording button to simulate state..."
                className="w-full h-32 bg-[#0a0a0a] border border-white/10 rounded-2xl p-4 text-xs font-mono text-white placeholder-white/30 focus:outline-none focus:border-accent-lime transition-all resize-none font-light"
              />
              
              {/* Recording Overlay */}
              {isRecording && (
                <div className="absolute inset-0 bg-[#050505]/95 rounded-2xl flex flex-col items-center justify-center space-y-4">
                  <div className="flex items-center gap-1.5 h-8">
                    {waveHeights.map((h, i) => (
                      <motion.div
                        key={i}
                        animate={{ height: h }}
                        transition={{ type: 'spring', damping: 15 }}
                        className="w-1 bg-accent-lime rounded-full"
                        style={{ height: '4px' }}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-accent-lime tracking-wide uppercase">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    Simulating Voice Capture: 00:{recordingSeconds < 10 ? `0${recordingSeconds}` : recordingSeconds}
                  </div>
                  <p className="text-[10px] text-white/50 italic text-center max-w-xs px-4">
                    "Analyzing audio packets... Speaking about: {SAMPLE_MEETINGS[selectedTopic].topic.split(' - ')[0]}"
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            <button
              onClick={toggleRecording}
              className={`flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-[10px] uppercase tracking-wider font-mono font-bold transition-all ${
                isRecording
                  ? 'bg-red-500/20 border border-red-500/30 text-red-400 hover:bg-red-500/30'
                  : 'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-accent-lime'
              }`}
            >
              {isRecording ? (
                <>
                  <Square className="w-4 h-4 text-red-400" /> Stop & Finalize Transcripts
                </>
              ) : (
                <>
                  <Mic className="w-4 h-4 text-accent-lime animate-pulse" /> Simulate Mic Capture
                </>
              )}
            </button>

            <button
              onClick={handleRunAnalysis}
              disabled={isRecording || isAnalyzing || !currentRawText.trim()}
              className="flex-1 bg-accent-lime text-[#050505] disabled:opacity-50 font-mono text-[10px] font-bold uppercase tracking-widest px-5 py-3 rounded-xl hover:bg-white transition-all flex items-center justify-center gap-2 leading-none cursor-pointer"
            >
              <Sparkles className="w-4 h-4" /> Synthesize Insights
            </button>
          </div>
        </div>

        {/* Results Panel */}
        <div className="flex-1 flex flex-col justify-between self-stretch bg-[#0a0a0a] border border-white/10 rounded-3xl p-5 md:p-6 min-h-[420px]">
          <AnimatePresence mode="wait">
            {!isAnalyzing && !result && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center h-full text-center py-20"
              >
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 text-accent-lime mb-4 animate-bounce">
                  <Sparkles className="w-5 h-5 text-accent-lime" />
                </div>
                <h4 className="font-display font-bold uppercase text-white/70 text-xs tracking-widest">Analysis Engine Idle</h4>
                <p className="text-[11px] text-white/50 max-w-xs mt-1 leading-relaxed">
                  Provide or record a meeting transcript, then click 'Synthesize Insights' to trigger Google AI Studio processing.
                </p>
              </motion.div>
            )}

            {isAnalyzing && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center h-full text-center py-20 space-y-4"
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-full border border-accent-lime/20 border-t-accent-lime animate-spin font-bold" />
                  <Sparkles className="w-5 h-5 text-accent-lime absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-mono text-[10px] font-bold text-accent-lime tracking-widest uppercase animate-pulse">Running LLM pipeline</h4>
                  <p className="text-[10px] text-white/40 font-mono mt-2 max-w-xs mx-auto">
                    {analysisStage}
                  </p>
                </div>
              </motion.div>
            )}

            {!isAnalyzing && result && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="space-y-5 h-full flex flex-col justify-between whitespace-normal"
              >
                {/* Executive Summary */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <div className="flex items-center gap-1.5 font-mono text-[9px] text-white/40 uppercase tracking-widest">
                       <FileText className="w-3.5 h-3.5 text-accent-lime" /> Summary Matrix
                    </div>
                    <span className="px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-[8px] font-mono text-accent-lime uppercase tracking-widest font-bold">
                      V4 PROMPT
                    </span>
                  </div>
                  
                  <div>
                    <h4 className="text-[10px] font-bold font-mono text-white/40 uppercase tracking-widest mb-1.5">Executive Summary</h4>
                    <p className="text-xs text-white/80 leading-relaxed font-sans font-light">{result.summary}</p>
                  </div>

                  {/* Actions mapping */}
                  <div>
                    <h4 className="text-[10px] font-semibold font-mono text-white/40 uppercase tracking-widest mb-2 flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5 text-accent-lime" /> Extracted Action Registry
                    </h4>
                    <div className="space-y-2 max-h-44 overflow-y-auto pr-1">
                      {result.actionItems.map((item: any, idx: number) => (
                        <div key={idx} className="bg-[#050505] border border-white/10 rounded-xl p-3 flex justify-between items-start gap-3">
                          <div className="space-y-1.5">
                            <p className="text-xs text-white/90 font-medium leading-tight">{item.task}</p>
                            <div className="flex items-center gap-3 text-[10px] text-white/40 font-mono">
                              <span className="flex items-center gap-1"><Users className="w-3 h-3 text-accent-lime" /> {item.assignee}</span>
                              <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-accent-lime" /> {item.deadline}</span>
                            </div>
                          </div>
                          <span className="px-1.5 py-0.5 rounded text-[8px] font-mono bg-white/5 text-accent-lime border border-white/5 uppercase font-bold tracking-widest">
                            Pending
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Metrics */}
                <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <span className="block text-[8px] font-mono text-white/40 uppercase tracking-widest">Processing</span>
                    <span className="block font-mono text-xs text-accent-lime">{result.executionTime}</span>
                  </div>
                  <div className="space-y-1 border-l border-white/10 pl-2">
                    <span className="block text-[8px] font-mono text-white/40 uppercase tracking-widest">Input Tokens</span>
                    <span className="block font-mono text-xs text-accent-lime">~{result.tokensEstimated}</span>
                  </div>
                  <div className="space-y-1 border-l border-white/10 pl-2">
                    <span className="block text-[8px] font-mono text-white/40 uppercase tracking-widest">Sentiment</span>
                    <span className="block font-mono text-[9px] text-accent-lime flex items-center gap-1 tracking-tight">
                      <BarChart2 className="w-3" /> {result.sentiment.positive}% Pos
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
