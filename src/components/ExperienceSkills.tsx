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
            description: 'Collaborating on university research projects focused on frontend interface development, digital graphics workflows, and data visualizations.',
            highlights: ['Frontend architecture design', 'Interactive component development', 'Cross-functional teamwork']
        },
        {
            period: '2024 – 2025',
            role: 'Teacher',
            organization: 'Ideal Private School',
            type: 'Academic Educator',
            description: 'Taught mathematics, logical reasoning, and technical subjects. Developed interactive learning materials and mentored students.',
            highlights: ['Curriculum development', 'Critical thinking instruction', 'Student performance tracking']
        },
        {
            period: '2023 – 2024',
            role: 'Mathematics Teacher',
            organization: 'Academic Lyceum of Fergana State University',
            type: 'Lyceum Educator',
            description: 'Instructed gifted students in higher mathematics, mathematical logic, and analytical problem-solving to prepare for university admission.',
            highlights: ['Advanced mathematics curriculum', 'Olympiad preparation', 'Data-driven evaluation']
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
                { name: 'Tailwind CSS / Glassmorphism', level: 95 },
                { name: 'Framer Motion / Animations', level: 88 },
                { name: 'HTML5 / CSS3 / Responsive Web', level: 96 }
            ]
        },
        {
            id: 'analytics',
            title: 'Data Analysis & Computer Graphics',
            icon: Database,
            skills: [
                { name: 'Data Analysis (Excel / Advanced Formulas)', level: 90 },
                { name: 'Mathematical Modeling & Logic', level: 98 },
                { name: 'Computer Graphics Algorithms', level: 86 },
                { name: 'Numerical Analysis & Geometry', level: 94 }
            ]
        },
        {
            id: 'soft',
            title: 'Soft Skills & Leadership',
            icon: Brain,
            skills: [
                { name: 'Critical Thinking & Math Precision', level: 98 },
                { name: 'Multitasking & Time Management', level: 94 },
                { name: 'Leadership & Teamwork', level: 92 },
                { name: 'Technical Instruction & Mentorship', level: 90 }
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
        <section id="experience" className="py-20 relative bg-slate-950/40 border-y border-slate-800/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center space-y-3 mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>CAREER & CAPABILITIES</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                        Experience & <span className="text-gradient">Skills</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
                        Professional trajectory and technical mastery in modern web development, analytical logic, and graphics design.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12">

                    {/* Left Column: Work Experience Timeline */}
                    <div className="lg:col-span-6 space-y-6">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
                            <Briefcase className="w-5 h-5 text-cyan-400" />
                            <span>Work Experience</span>
                        </h3>

                        <div className="relative border-l-2 border-slate-800 pl-6 ml-3 space-y-8">
                            {experiences.map((exp, index) => (
                                <div key={index} className="relative group">
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/30" />

                                    <div className="glass-card p-5 rounded-2xl border border-slate-800/80 hover:border-cyan-500/30 transition-all">
                                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                            <span className="text-xs font-mono text-cyan-400 font-semibold px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/20">
                                                {exp.period}
                                            </span>
                                            <span className="text-[11px] text-slate-400 font-medium">{exp.type}</span>
                                        </div>

                                        <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                                        <div className="text-sm text-slate-300 font-medium mb-3">{exp.organization}</div>

                                        <p className="text-xs text-slate-400 leading-relaxed mb-3">
                                            {exp.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60">
                                            {exp.highlights.map((hl, i) => (
                                                <span key={i} className="text-[10px] font-mono text-slate-300 bg-slate-800/70 px-2 py-1 rounded border border-slate-700">
                                                    ✓ {hl}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Languages Card */}
                        <div id="skills" className="glass-card p-6 rounded-2xl border border-slate-800 mt-8">
                            <h4 className="text-base font-bold text-white flex items-center gap-2 mb-4">
                                <Languages className="w-4 h-4 text-cyan-400" />
                                <span>Languages Proficiency</span>
                            </h4>
                            <div className="grid grid-cols-3 gap-3">
                                {languages.map((lang, idx) => (
                                    <div key={idx} className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-center">
                                        <div className="text-2xl mb-1">{lang.flag}</div>
                                        <div className="text-xs font-bold text-white">{lang.name}</div>
                                        <div className="text-[10px] font-mono text-cyan-400 mt-0.5">{lang.level}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Technical & Soft Skills Grid */}
                    <div className="lg:col-span-6 space-y-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <Layers className="w-5 h-5 text-cyan-400" />
                                <span>Skills & Competencies</span>
                            </h3>

                            {/* Filter Tabs */}
                            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
                                {(['all', 'frontend', 'analytics', 'soft'] as const).map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-2.5 py-1 rounded-lg text-[11px] font-mono capitalize transition-all ${activeTab === tab
                                                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                                                : 'text-slate-400 hover:text-white'
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
                                    <div key={category.id} className="glass-card p-6 rounded-2xl border border-slate-800">
                                        <h4 className="text-base font-bold text-white flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
                                            <Icon className="w-4 h-4 text-cyan-400" />
                                            <span>{category.title}</span>
                                        </h4>

                                        <div className="space-y-4">
                                            {category.skills.map((skill, sIdx) => (
                                                <div key={sIdx} className="space-y-1.5">
                                                    <div className="flex justify-between text-xs font-medium">
                                                        <span className="text-slate-200">{skill.name}</span>
                                                        <span className="text-cyan-400 font-mono text-[11px]">{skill.level}%</span>
                                                    </div>
                                                    <div className="h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
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
