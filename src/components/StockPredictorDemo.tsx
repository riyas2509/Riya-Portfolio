import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Award, Settings, RefreshCw, BarChart2 } from 'lucide-react';

export default function StockPredictorDemo() {
  const [epochs, setEpochs] = useState<number>(30);
  const [lr, setLr] = useState<number>(0.05);
  const [features, setFeatures] = useState<string[]>(['RSI', 'MovingAvg']);
  const [isTraining, setIsTraining] = useState<boolean>(false);
  const [metrics, setMetrics] = useState<{ r2: number; loss: number; elapsed: string } | null>(null);

  const handleTrain = () => {
    setIsTraining(true);
    setMetrics(null);

    // Simulate SGD descent on regression variables
    setTimeout(() => {
      // Modulate metrics based on selected hypterparameters
      const factor = features.length;
      const computedR2 = Math.min(0.96, Math.max(0.45, 0.72 + (factor * 0.08) - (lr > 0.2 ? 0.1 : 0) + (epochs > 50 ? 0.05 : 0)));
      const computedLoss = Math.min(0.85, Math.max(0.01, 0.15 - (factor * 0.03) + (lr > 0.2 ? 0.05 : 0)));
      
      setMetrics({
        r2: Number(computedR2.toFixed(3)),
        loss: Number(computedLoss.toFixed(4)),
        elapsed: `${(Math.random() * 0.3 + 0.1).toFixed(2)}s`
      });
      setIsTraining(false);
    }, 1200);
  };

  const toggleFeature = (name: string) => {
    if (features.includes(name)) {
      setFeatures(features.filter(f => f !== name));
    } else {
      setFeatures([...features, name]);
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 text-white relative overflow-hidden" id="stock-demo">
      <div className="absolute top-0 left-0 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Visual Regression Curve graph */}
        <div className="flex-1 flex flex-col justify-between bg-slate-950 p-6 border border-slate-850 rounded-2xl relative min-h-[300px]">
          <div className="absolute top-3 left-4 font-mono text-[10px] text-slate-500 flex items-center gap-1.5 uppercase">
            <BarChart2 className="w-3.5 h-3.5 text-teal-400" /> Linear Model Training Plot
          </div>

          <div className="flex-1 flex items-end justify-between h-40 mt-8 relative border-b border-l border-slate-800 pb-2 pl-2">
            {/* Mock coordinate scatter plot */}
            {[25, 45, 30, 65, 52, 85, 74].map((h, i) => (
              <div key={i} className="relative flex flex-col items-center" style={{ height: '100%', width: '12%' }}>
                {/* Historical Scatter dots */}
                <span className="w-2 h-2 rounded-full bg-slate-700 absolute" style={{ bottom: `${h}%` }} />
                {/* Predicted target line marker */}
                {metrics && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-1.5 h-1.5 rounded-full bg-teal-400 absolute"
                    style={{ bottom: `${Math.min(100, Math.max(0, h * (metrics.r2 * 1.05)))}%` }}
                  />
                )}
              </div>
            ))}

            {/* Regression Fit line */}
            {metrics && (
              <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                <line
                  x1="10"
                  y1={140}
                  x2="240"
                  y2={150 - (metrics.r2 * 120)}
                  stroke="#14b8a6"
                  strokeWidth="2"
                  strokeDasharray="4 2"
                  className="animate-pulse"
                />
              </svg>
            )}

            {isTraining && (
              <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm flex flex-col items-center justify-center space-y-2">
                <RefreshCw className="w-6 h-6 text-teal-400 animate-spin" />
                <span className="text-[10px] text-slate-400 font-mono animate-pulse">Running SGD Iterations...</span>
              </div>
            )}
          </div>

          <div className="flex justify-between font-mono text-[9px] text-slate-500 mt-4">
            <span>X_AXIS: Lag Timestep</span>
            <span>Y_AXIS: Normalized Pricing</span>
          </div>
        </div>

        {/* Configurations Parameters */}
        <div className="flex-1 flex flex-col justify-between space-y-6">
          <div>
            <span className="inline-block px-3 py-1 bg-teal-500/10 text-teal-300 border border-teal-500/20 text-xs font-mono rounded-full uppercase tracking-widest mb-2">
              Regression Pipeline
            </span>
            <h3 className="text-2xl font-display font-semibold tracking-tight text-white">Stock Prediction ML</h3>
            <p className="text-slate-400 text-sm mt-1">
              Configure parameters to fit an educational short-term predictive model. Witness SGD gradients optimize coefficient weights.
            </p>
          </div>

          {/* Hyper params */}
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] font-mono text-slate-400">
                  <span>Epochs:</span>
                  <span className="text-teal-400 font-bold">{epochs}</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="10"
                  value={epochs}
                  disabled={isTraining}
                  onChange={(e) => setEpochs(Number(e.target.value))}
                  className="w-full accent-teal-500 cursor-pointer h-1 bg-slate-800 rounded appearance-none"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-[11px] font-mono text-slate-400">
                  <span>Learning Rate:</span>
                  <span className="text-teal-400 font-bold">{lr}</span>
                </div>
                <input
                  type="range"
                  min="0.01"
                  max="0.5"
                  step="0.05"
                  value={lr}
                  disabled={isTraining}
                  onChange={(e) => setLr(Number(e.target.value))}
                  className="w-full accent-teal-500 cursor-pointer h-1 bg-slate-800 rounded appearance-none"
                />
              </div>
            </div>

            {/* Feature lists toggler */}
            <div className="space-y-1.5">
              <span className="block text-[10px] font-mono text-slate-400 uppercase">Input Features Node:</span>
              <div className="flex gap-1.5 flex-wrap">
                {['RSI Index', 'MovingAvg', 'MACD Momentum', 'Volume Oscillator'].map((feat) => {
                  const techKey = feat.replace(' Index', '').replace(' Momentum', '');
                  const isChecked = features.includes(techKey);
                  return (
                    <button
                      key={feat}
                      onClick={() => toggleFeature(techKey)}
                      disabled={isTraining}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-mono border transition-all ${
                        isChecked
                          ? 'bg-teal-500/15 border-teal-500/50 text-teal-300'
                          : 'bg-slate-900 border-slate-850 text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      {feat}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex gap-2.5">
            <button
              onClick={handleTrain}
              disabled={isTraining}
              className="flex-1 bg-teal-500 hover:bg-teal-400 disabled:opacity-50 text-slate-950 font-mono text-xs font-bold px-4 py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-lg shadow-teal-500/10 leading-none"
            >
              <Settings className={`w-4 h-4 ${isTraining && 'animate-spin'}`} /> Fit ML Model
            </button>
          </div>

          {/* Results specs */}
          <div className="bg-slate-950 border border-slate-850 rounded-2xl p-4 font-mono text-xs text-slate-300 min-h-[90px] flex flex-col justify-between">
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5 text-teal-400 font-semibold border-b border-slate-900 pb-1">
                <Award className="w-3.5 h-3.5 text-teal-400" /> ML EVALUATION ACCURACY:
              </div>
              {metrics ? (
                <div className="grid grid-cols-3 gap-2 py-1 leading-snug">
                  <div>
                    <span className="block text-[8px] text-slate-500 uppercase">Accuracy R²</span>
                    <span className="font-bold text-teal-400 text-sm">{metrics.r2}</span>
                  </div>
                  <div>
                    <span className="block text-[8px] text-slate-500 uppercase">Loss Rate</span>
                    <span className="font-bold text-teal-400 text-sm">{metrics.loss}</span>
                  </div>
                  <div>
                    <span className="block text-[8px] text-slate-500 uppercase">Fit Time</span>
                    <span className="font-bold text-slate-400 text-sm">{metrics.elapsed}</span>
                  </div>
                </div>
              ) : (
                <p className="text-[10px] text-slate-500 leading-relaxed italic">
                  Awaiting fit iterations. Adjust regression bounds and train to display standard evaluation parameters.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
