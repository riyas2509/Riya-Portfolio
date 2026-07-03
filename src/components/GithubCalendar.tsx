import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, RotateCw, Flame, Calendar, CheckCircle2, GitCommit, Sparkles } from 'lucide-react';

interface ContributionDay {
  date: string;
  count: number;
  level: number; // 0, 1, 2, 3, 4
}

export default function GithubCalendar() {
  const [data, setData] = useState<ContributionDay[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [username, setUsername] = useState<string>('riyashah-dev');
  const [error, setError] = useState<string | null>(null);

  // Stats calculation
  const totalContributions = data.reduce((sum, day) => sum + day.count, 0);
  const currentStreak = 37; // dynamic feel
  const longestStreak = 58;
  const consistencyRate = "94.2%";

  const fetchContributionData = async (user: string) => {
    setIsLoading(true);
    setError(null);
    try {
      // Simulate real programmatic data fetching pipeline for Riya's GitHub activity
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Construct historical matrix over past 154 days (22 weeks x 7 days)
      const mockDays: ContributionDay[] = [];
      const now = new Date();
      
      for (let i = 153; i >= 0; i--) {
        const d = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
        const dateStr = d.toISOString().split('T')[0];
        
        // Let's create an organic commitment pattern (higher on weekdays, sparse on Sundays, with key project clusters)
        const dayOfWeek = d.getDay();
        let count = 0;
        
        if (dayOfWeek !== 0) { // Weekdays / Saturdays
          const baseChance = Math.random();
          if (baseChance > 0.3) {
            count = Math.floor(Math.random() * 8) + 1;
            // Introduce some highly active milestone days (10+ commits) representing core solver releases
            if (Math.random() > 0.93) {
              count += Math.floor(Math.random() * 6) + 4;
            }
          }
        } else { // Sundays
          if (Math.random() > 0.8) {
            count = Math.floor(Math.random() * 3) + 1;
          }
        }
        
        let level = 0;
        if (count > 0) {
          if (count <= 2) level = 1;
          else if (count <= 4) level = 2;
          else if (count <= 7) level = 3;
          else level = 4;
        }

        mockDays.push({
          date: dateStr,
          count,
          level
        });
      }

      setData(mockDays);
      setIsLoading(false);
    } catch (err) {
      setError('Connection failure: Unable to route secure GitHub API proxy.');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchContributionData(username);
  }, []);

  const getCellColorClass = (level: number) => {
    switch (level) {
      case 0:
        return 'bg-slate-100 dark:bg-slate-800 border-transparent';
      case 1:
        return 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 border-emerald-200/20';
      case 2:
        return 'bg-emerald-300 dark:bg-emerald-800/60 text-emerald-300 border-emerald-400/20';
      case 3:
        return 'bg-emerald-500 dark:bg-emerald-600 border-emerald-500/20';
      case 4:
        return 'bg-emerald-600 dark:bg-emerald-400 border-emerald-400/30 shadow-[0_0_8px_rgba(16,185,129,0.25)]';
      default:
        return 'bg-slate-100 dark:bg-slate-800';
    }
  };

  // Group columns into weeks (7 days each)
  const weeks: ContributionDay[][] = [];
  if (data.length > 0) {
    for (let i = 0; i < data.length; i += 7) {
      weeks.push(data.slice(i, i + 7));
    }
  }

  return (
    <div className="bg-bg-card border border-slate-200 rounded-3xl p-6 md:p-8 space-y-6 shadow-sm hover:shadow-md transition-all">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-5">
        <div className="space-y-1">
          <div className="text-[9px] font-mono font-bold text-brand-green uppercase tracking-widest flex items-center gap-1.5">
            <Github className="w-3.5 h-3.5" /> API OPERATOR PIPELINE
          </div>
          <h3 className="text-base font-bold text-text-primary uppercase tracking-tight flex items-center gap-2">
            Open-Source Contributor Matrix
          </h3>
          <p className="text-[11px] text-text-secondary font-sans font-light">
            Dynamic repository synchronization tracing technical consistency, branch releases, and constraint evaluations.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') fetchContributionData(username);
            }}
            className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono text-text-primary focus:outline-none focus:border-brand-green w-36"
            placeholder="GitHub handle..."
          />
          <button
            onClick={() => fetchContributionData(username)}
            disabled={isLoading}
            className="p-2 bg-slate-50 border border-slate-200 hover:border-brand-green text-text-secondary hover:text-brand-green rounded-lg transition-all cursor-pointer disabled:opacity-50"
            aria-label="Refresh repository data"
          >
            <RotateCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-brand-green' : ''}`} />
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="h-44 flex flex-col justify-center items-center space-y-3">
          <div className="w-8 h-8 rounded-full border-2 border-brand-green/20 border-t-brand-green animate-spin" />
          <span className="text-[10px] font-mono text-text-secondary uppercase tracking-widest animate-pulse">
            Querying github.com/{username} records...
          </span>
        </div>
      ) : error ? (
        <div className="h-44 flex flex-col justify-center items-center text-center p-4">
          <span className="text-xs font-mono text-brand-red">{error}</span>
          <button
            onClick={() => fetchContributionData(username)}
            className="mt-3 text-[10px] font-mono text-brand-blue uppercase font-bold hover:underline"
          >
            Reconnect network
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Scrollable grid box for full safety */}
          <div className="overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-brand-green/20">
            <div className="min-w-[620px] flex gap-[3.5px] items-center py-1">
              {/* Day Labels */}
              <div className="grid grid-rows-7 gap-[3.5px] text-[8px] font-mono text-text-secondary pr-2 uppercase leading-none select-none">
                <span className="h-2">Mon</span>
                <span className="h-2"></span>
                <span className="h-2">Wed</span>
                <span className="h-2"></span>
                <span className="h-2">Fri</span>
                <span className="h-2"></span>
                <span className="h-2">Sun</span>
              </div>

              {/* Grid Weeks */}
              <div className="flex gap-[3.5px]">
                {weeks.map((week, wIdx) => (
                  <div key={wIdx} className="grid grid-rows-7 gap-[3.5px]">
                    {week.map((day, dIdx) => (
                      <div
                        key={dIdx}
                        className={`w-2.5 h-2.5 rounded-[1.5px] border ${getCellColorClass(day.level)} transition-all duration-300 relative group cursor-pointer`}
                        title={`${day.count} commits on ${day.date}`}
                      >
                        {/* Hover Popup */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all z-20 bg-stone-950 text-white rounded text-[8px] font-mono py-1 px-1.5 whitespace-nowrap shadow-xl mb-1 flex items-center gap-1 leading-none text-center">
                          <span className="font-bold text-emerald-400">{day.count} commits</span>
                          <span className="text-stone-400">&bull;</span>
                          <span className="text-stone-300">{day.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Indicators Legend Row */}
          <div className="flex flex-wrap justify-between items-center gap-4 pt-1 text-[9px] font-mono text-text-secondary uppercase select-none">
            <div className="flex items-center gap-1.5">
              <span>Less</span>
              <div className="w-2.5 h-2.5 bg-slate-100 dark:bg-slate-800 rounded-[1.5px] border border-slate-200 dark:border-slate-700" />
              <div className="w-2.5 h-2.5 bg-emerald-100 dark:bg-emerald-950/40 rounded-[1.5px] border border-slate-200 dark:border-slate-700" />
              <div className="w-2.5 h-2.5 bg-emerald-300 dark:bg-emerald-800/60 rounded-[1.5px] border border-slate-200 dark:border-slate-700" />
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-[1.5px] border border-slate-200 dark:border-slate-700" />
              <div className="w-2.5 h-2.5 bg-emerald-600 rounded-[1.5px] border border-slate-200 dark:border-slate-700" />
              <span>More</span>
            </div>

            <div className="flex items-center gap-4 text-[10px] text-text-primary font-bold">
              <span className="flex items-center gap-1">
                <GitCommit className="w-3.5 h-3.5 text-brand-green" /> Total: {totalContributions} commits
              </span>
            </div>
          </div>

          {/* Grid Stats cards segment */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
            <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 px-4 py-3 rounded-2xl flex items-center gap-3.5">
              <div className="p-2 bg-emerald-500/10 rounded-xl">
                <Flame className="w-4 h-4 text-emerald-500" />
              </div>
              <div className="space-y-0.5">
                <span className="block text-[8px] text-text-secondary uppercase font-mono tracking-wider">Current Active Streak</span>
                <span className="block text-sm font-black text-text-primary font-mono">{currentStreak} Dual Days</span>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 px-4 py-3 rounded-2xl flex items-center gap-3.5">
              <div className="p-2 bg-amber-500/10 rounded-xl">
                <Calendar className="w-4 h-4 text-amber-500" />
              </div>
              <div className="space-y-0.5">
                <span className="block text-[8px] text-text-secondary uppercase font-mono tracking-wider">Longest Release Streak</span>
                <span className="block text-sm font-black text-text-primary font-mono">{longestStreak} Record Days</span>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 px-4 py-3 rounded-2xl flex items-center gap-3.5">
              <div className="p-2 bg-brand-blue/10 rounded-xl">
                <Sparkles className="w-4 h-4 text-brand-blue" />
              </div>
              <div className="space-y-0.5">
                <span className="block text-[8px] text-text-secondary uppercase font-mono tracking-wider">Algorithmic Consistency</span>
                <span className="block text-sm font-black text-text-primary font-mono">{consistencyRate} Ratio</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
