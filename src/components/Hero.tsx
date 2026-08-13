import React from 'react';
import { Download, ArrowRight, Code2, GraduationCap, MapPin } from 'lucide-react';
import { generateCVPDF } from '../utils/generateCV';

export const Hero: React.FC = () => {
    return (
        <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
            {/* Glow Orbs */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* Left Column - Main Offer & Bio */}
                    <div className="lg:col-span-7 space-y-6 text-left">
                        {/* Top Status Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-sm backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                            <span>Available for Frontend & Graphics Projects</span>
                            <span className="text-slate-500">•</span>
                            <span className="flex items-center gap-1 text-slate-300">
                                <MapPin className="w-3 h-3 text-cyan-400" /> Fergana, UZ
                            </span>
                        </div>

                        {/* Title */}
                        <div className="space-y-3">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                                Hi, I'm <span className="text-gradient">Khumorakhon</span> 👋
                            </h1>
                            <p className="text-xl sm:text-2xl font-semibold text-slate-200 leading-snug">
                                Frontend Developer & Computer Graphics Master's Student with a Strong Foundation in Mathematics.
                            </p>
                        </div>

                        {/* Concise Offer Statement */}
                        <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                            Combining mathematical precision <span className="text-cyan-300 font-semibold font-mono bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">(GPA 4.94 / 99)</span> with modern frontend development and interactive computer graphics design.
                        </p>

                        {/* Key Metric Cards */}
                        <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
                            <div className="glass-card p-3 rounded-xl border border-cyan-500/20 text-center">
                                <div className="text-xl font-bold font-mono text-cyan-400">4.94</div>
                                <div className="text-[11px] text-slate-400 font-medium">B.Math GPA</div>
                            </div>
                            <div className="glass-card p-3 rounded-xl border border-indigo-500/20 text-center">
                                <div className="text-xl font-bold font-mono text-indigo-400">Master's</div>
                                <div className="text-[11px] text-slate-400 font-medium">Comp. Graphics</div>
                            </div>
                            <div className="glass-card p-3 rounded-xl border border-purple-500/20 text-center">
                                <div className="text-xl font-bold font-mono text-purple-400">B2 / B1+</div>
                                <div className="text-[11px] text-slate-400 font-medium">English & Russian</div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-4 pt-4">
                            <a
                                href="#projects"
                                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer border border-cyan-300/30"
                            >
                                <span>View Projects</span>
                                <ArrowRight className="w-4 h-4" />
                            </a>

                            <button
                                onClick={generateCVPDF}
                                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl glass-card text-slate-200 hover:text-white font-semibold text-sm hover:border-cyan-400/50 hover:bg-slate-800/80 active:scale-95 transition-all cursor-pointer"
                            >
                                <Download className="w-4 h-4 text-cyan-400" />
                                <span>Download Full CV</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Tech Minimalist Code Visual Card */}
                    <div className="lg:col-span-5">
                        <div className="relative mx-auto max-w-md">
                            {/* Decorative Frame */}
                            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 opacity-40 blur-lg" />

                            <div className="relative rounded-2xl glass-card border border-slate-700/80 overflow-hidden shadow-2xl">
                                {/* Mac-like Window Header */}
                                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                    </div>
                                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                                        <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                                        <span>developer.config.ts</span>
                                    </div>
                                    <div className="w-12 text-right">
                                        <span className="text-[10px] font-mono text-cyan-400">REACT</span>
                                    </div>
                                </div>

                                {/* Animated Code snippet content */}
                                <div className="p-5 font-mono text-xs leading-relaxed text-slate-300 space-y-2 bg-slate-950/80">
                                    <div className="text-purple-400">
                                        <span className="text-indigo-400">const</span> developer = &#123;
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-slate-400">name:</span> <span className="text-cyan-300">"Khumorakhon Z."</span>,
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-slate-400">roles:</span> [
                                        <span className="text-emerald-300">"Frontend Developer"</span>, <span className="text-emerald-300">"Computer Graphics"</span>
                                        ],
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-slate-400">mathGPA:</span> <span className="text-yellow-400 font-bold">4.94</span> <span className="text-slate-500">// Honors Math</span>,
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-slate-400">stack:</span> [
                                        <span className="text-cyan-300">"React"</span>, <span className="text-cyan-300">"Next.js"</span>, <span className="text-cyan-300">"TypeScript"</span>, <span className="text-cyan-300">"Tailwind"</span>
                                        ],
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-slate-400">location:</span> <span className="text-cyan-300">"Fergana, Uzbekistan"</span>,
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-slate-400">renderFormula:</span> () =&gt; &#123;
                                    </div>
                                    <div className="pl-8 text-slate-400">
                                        <span className="text-purple-300">return</span> Precision * Algorithm + ModernDesign;
                                    </div>
                                    <div className="pl-4">&#125;</div>
                                    <div className="text-purple-400">&#125;;</div>
                                </div>

                                {/* Bottom Highlight Status */}
                                <div className="p-3.5 bg-slate-900/90 border-t border-slate-800/80 flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-xs text-slate-300">
                                        <GraduationCap className="w-4 h-4 text-cyan-400" />
                                        <span>FSTU Master's Degree Student</span>
                                    </div>
                                    <span className="text-[10px] font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded">
                                        VERIFIED
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
