import React from 'react';
import { GraduationCap, BookOpen, CheckCircle, Calculator, Sparkles } from 'lucide-react';

export const Education: React.FC = () => {
    const educationItems = [
        {
            period: '2025 – Present',
            degree: 'Master in Computer Graphics and Design',
            institution: 'Fergana State Technical University',
            location: 'Fergana, Uzbekistan',
            status: 'In Progress',
            color: 'from-cyan-500 to-blue-600',
            badgeColor: 'bg-cyan-950/80 text-cyan-300 border-cyan-500/30',
            icon: Sparkles,
            description:
                'Advanced graduate research into computer graphics algorithms, 3D modeling fundamentals, modern user interface design systems, and WebGL/Canvas rendering pipelines.',
            highlights: [
                '3D Vector Transformation Math & UI Layout Systems',
                'Human-Computer Interaction & Digital Aesthetics',
                'Academic Research in Computer Graphics Applications'
            ],
        },
        {
            period: '2021 – 2025',
            degree: 'Bachelor of Mathematics (GPA: 4.94 / 99)',
            institution: 'Fergana State University',
            location: 'Fergana, Uzbekistan',
            status: 'Honors Graduate',
            color: 'from-indigo-500 to-purple-600',
            badgeColor: 'bg-indigo-950/80 text-indigo-300 border-indigo-500/30',
            icon: Calculator,
            description:
                'Graduated with near-perfect academic distinction (GPA 4.94 out of 99). Mastered abstract algebra, differential equations, mathematical modeling, analytical logic, and numerical analysis.',
            highlights: [
                'GPA 4.94 / 99.0 (Top 1% Academic Distinction)',
                'Mathematical Logic & Computational Algorithms',
                'Data Modeling & Theoretical Problem Solving'
            ],
        },
    ];

    return (
        <section id="education" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center space-y-3 mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                        <GraduationCap className="w-3.5 h-3.5" />
                        <span>ACADEMIC FOUNDATION</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                        Education & <span className="text-gradient">Background</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
                        Bridging pure mathematical rigor with cutting-edge computer graphics and frontend engineering.
                    </p>
                </div>

                {/* Timeline Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {educationItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="relative group glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300"
                            >
                                {/* Top Glowing Bar */}
                                <div className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r ${item.color} opacity-60 group-hover:opacity-100 transition-opacity`} />

                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400 shadow-md">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <span className="text-xs font-mono text-cyan-400 font-semibold">{item.period}</span>
                                            <h3 className="text-lg font-bold text-white leading-snug">{item.degree}</h3>
                                        </div>
                                    </div>
                                    <span className={`text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border ${item.badgeColor}`}>
                                        {item.status}
                                    </span>
                                </div>

                                <div className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-1.5">
                                    <BookOpen className="w-4 h-4 text-cyan-400" />
                                    <span>{item.institution}</span>
                                    <span className="text-slate-500">•</span>
                                    <span className="text-slate-400 font-normal text-xs">{item.location}</span>
                                </div>

                                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                                    {item.description}
                                </p>

                                {/* Key Achievements Bullet points */}
                                <div className="space-y-2 border-t border-slate-800/80 pt-4">
                                    {item.highlights.map((hl, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                                            <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                                            <span>{hl}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};
