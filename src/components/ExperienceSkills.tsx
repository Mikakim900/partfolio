import React, { useState } from 'react';
import { Briefcase, Code, Database, Brain, Languages, Layers } from 'lucide-react';

export const ExperienceSkills: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'analytics' | 'soft'>('all');

    const experiences = [
        {
            period: '2025 – Present',
            role: 'Project Team Member',
            organization: 'Fergana State Technical University',
            type: 'Technical Team Member',
            description: 'Collaborating on university research projects, frontend application development, digital graphics interface workflows, and technical data modeling.',
            highlights: ['Frontend web architecture', 'Digital graphics workflows', 'Team collaboration & project execution']
        },
        {
            period: '2024 – 2025',
            role: 'Teacher',
            organization: 'Ideal Private School',
            type: 'Academic Educator',
            description: 'Instructed mathematics, logical reasoning, and analytics. Developed curriculum materials and guided student academic performance.',
            highlights: ['Mathematics & logic instruction', 'Curriculum development', 'Analytical problem solving']
        },
        {
            period: '2023 – 2024',
            role: 'Mathematics Teacher',
            organization: 'Academic Lyceum of Fergana State University',
            type: 'Lyceum Educator',
            description: 'Instructed advanced mathematics and analytical logic for lyceum students, building strong foundations for higher education.',
            highlights: ['Advanced mathematics curriculum', 'Student performance tracking', 'Analytical thinking mentorship']
        }
    ];

    const skillCategories = [
        {
            id: 'frontend',
            title: 'Frontend Development',
            icon: Code,
            skills: [
                { name: 'React.js / Next.js', level: 92 },
                { name: 'TypeScript / JavaScript (ES6+)', level: 90 },
                { name: 'Tailwind CSS / Glassmorphism UI', level: 95 },
                { name: 'HTML5 / CSS3 / Responsive Web', level: 96 }
            ]
        },
        {
            id: 'analytics',
            title: 'Finance Analytics & Computer Graphics',
            icon: Database,
            skills: [
                { name: 'Data Analysis (Excel / Advanced Formulas)', level: 92 },
                { name: 'Mathematical Modeling & Logic', level: 98 },
                { name: 'Computer Graphics Algorithms', level: 86 },
                { name: 'Financial & Numerical Analysis', level: 94 }
            ]
        },
        {
            id: 'soft',
            title: 'Soft Skills & Leadership',
            icon: Brain,
            skills: [
                { name: 'Critical Thinking & Math Precision', level: 98 },
                { name: 'Multitasking & Time Management', level: 95 },
                { name: 'Teamwork & Leadership', level: 94 },
                { name: 'Attention to Detail & Responsibility', level: 96 }
            ]
        }
    ];

    const languages = [
        { name: 'Uzbek', level: 'Native', proficiency: '100%', flag: '🇺🇿' },
        { name: 'Russian', level: 'Fluent', proficiency: '95%', flag: '🇷🇺' },
        { name: 'English', level: 'Upper-Intermediate (B2)', proficiency: '85%', flag: '🇬🇧' }
    ];

    const filteredCategories = activeTab === 'all'
        ? skillCategories
        : skillCategories.filter(cat => cat.id === activeTab);

    return (
        <section id="experience" className="py-20 relative border-y border-slate-700/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center space-y-3 mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-500">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>CAREER & CAPABILITIES</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold">
                        Experience & <span className="text-gradient">Skills</span>
                    </h2>
                    <p className="opacity-80 max-w-2xl mx-auto text-sm sm:text-base">
                        Professional trajectory and technical mastery in finance analytics, web development, and mathematical logic.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12">

                    {/* Left Column: Work Experience Timeline */}
                    <div className="lg:col-span-6 space-y-6">
                        <h3 className="text-xl font-bold flex items-center gap-2 mb-6">
                            <Briefcase className="w-5 h-5 text-cyan-500" />
                            <span>Work Experience</span>
                        </h3>

                        <div className="relative border-l-2 border-slate-700/40 pl-6 ml-3 space-y-8">
                            {experiences.map((exp, index) => (
                                <div key={index} className="relative group">
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-500 group-hover:scale-125 group-hover:bg-cyan-500 transition-all shadow-md shadow-cyan-500/30" />

                                    <div className="glass-card p-5 rounded-2xl border transition-all">
                                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                            <span className="text-xs font-mono text-cyan-500 font-semibold px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                                                {exp.period}
                                            </span>
                                            <span className="text-[11px] opacity-75 font-medium">{exp.type}</span>
                                        </div>

                                        <h4 className="text-lg font-bold">{exp.role}</h4>
                                        <div className="text-sm font-medium text-cyan-500 mb-3">{exp.organization}</div>

                                        <p className="text-xs opacity-80 leading-relaxed mb-3">
                                            {exp.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-700/30">
                                            {exp.highlights.map((hl, i) => (
                                                <span key={i} className="text-[10px] font-mono opacity-85 bg-slate-500/10 px-2 py-1 rounded border border-slate-500/20">
                                                    ✓ {hl}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Languages Card */}
                        <div id="skills" className="glass-card p-6 rounded-2xl border mt-8">
                            <h4 className="text-base font-bold flex items-center gap-2 mb-4">
                                <Languages className="w-4 h-4 text-cyan-500" />
                                <span>Languages Proficiency</span>
                            </h4>
                            <div className="grid grid-cols-3 gap-3">
                                {languages.map((lang, idx) => (
                                    <div key={idx} className="glass-card p-3 rounded-xl border text-center">
                                        <div className="text-2xl mb-1">{lang.flag}</div>
                                        <div className="text-xs font-bold">{lang.name}</div>
                                        <div className="text-[10px] font-mono text-cyan-500 mt-0.5">{lang.level}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Technical & Soft Skills Grid */}
                    <div className="lg:col-span-6 space-y-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold flex items-center gap-2">
                                <Layers className="w-5 h-5 text-cyan-500" />
                                <span>Skills & Competencies</span>
                            </h3>

                            {/* Filter Tabs */}
                            <div className="flex items-center gap-1 bg-slate-500/10 p-1 rounded-xl border border-slate-500/20">
                                {(['all', 'frontend', 'analytics', 'soft'] as const).map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-2.5 py-1 rounded-lg text-[11px] font-mono capitalize transition-all cursor-pointer ${activeTab === tab
                                            ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                                            : 'opacity-70 hover:opacity-100'
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Skill Cards */}
                        <div className="space-y-6">
                            {filteredCategories.map((category) => {
                                const Icon = category.icon;
                                return (
                                    <div key={category.id} className="glass-card p-6 rounded-2xl border">
                                        <h4 className="text-base font-bold flex items-center gap-2 mb-4 pb-3 border-b border-slate-700/40">
                                            <Icon className="w-4 h-4 text-cyan-500" />
                                            <span>{category.title}</span>
                                        </h4>

                                        <div className="space-y-4">
                                            {category.skills.map((skill, sIdx) => (
                                                <div key={sIdx} className="space-y-1.5">
                                                    <div className="flex justify-between text-xs font-medium">
                                                        <span className="opacity-90">{skill.name}</span>
                                                        <span className="text-cyan-500 font-mono text-[11px]">{skill.level}%</span>
                                                    </div>
                                                    <div className="h-2 rounded-full bg-slate-500/10 overflow-hidden border border-slate-500/20">
                                                        <div
                                                            className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 transition-all duration-1000"
                                                            style={{ width: `${skill.level}%` }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

