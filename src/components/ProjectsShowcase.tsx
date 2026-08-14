import React, { useState } from 'react';
import { FolderGit2, Eye, Monitor, CheckCircle2, X } from 'lucide-react';

interface Project {
    id: string;
    title: string;
    category: 'web' | 'graphics' | 'ui';
    categoryLabel: string;
    description: string;
    image: string;
    tags: string[];
    githubUrl: string;
    demoUrl: string;
    highlights: string[];
    metrics: string;
}

export const ProjectsShowcase: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<'all' | 'web' | 'graphics' | 'ui'>('all');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const projects: Project[] = [
        {
            id: 'fizmath-lab',
            title: 'Fiz-Math Interactive Physics & Math Lab',
            category: 'graphics',
            categoryLabel: 'Computer Graphics & Math',
            description: 'An interactive web laboratory application built with Canvas 2D, React, and TypeScript. Features 9 dynamic simulations including pendulum dynamics, projectile vectors, DC circuits, and trigonometry graphs.',
            image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80',
            tags: ['React', 'TypeScript', 'Canvas 2D', 'Tailwind CSS', 'Framer Motion'],
            githubUrl: 'https://github.com/Mikakim900/fizmath-interactive-lab',
            demoUrl: '#',
            highlights: ['Real-time 60FPS physics vector rendering', 'Mathematical formula graphs with interactive sliders', 'Bilingual Uzbek & English user interface'],
            metrics: '4.94 Math Precision'
        },
        {
            id: 'fergana-university',
            title: 'Fergana State University Web Portal',
            category: 'web',
            categoryLabel: 'Web Application',
            description: 'A multi-page responsive institutional web platform for Fergana State University (fdu.uz). Features academic program catalog, news feed, faculty index, and responsive UI layout.',
            image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
            tags: ['Next.js', 'React', 'Tailwind CSS', 'SEO Optimization', 'TypeScript'],
            githubUrl: 'https://github.com/Mikakim900/fergana-state-university-portal',
            demoUrl: '#',
            highlights: ['Fast SSR page loads with Next.js App Router', 'Comprehensive faculty & student service directory', 'Mobile-first responsive design system'],
            metrics: 'Production Quality Portal'
        },
        {
            id: 'atomix-lab',
            title: 'Atomix Physics Interactive Laboratory',
            category: 'graphics',
            categoryLabel: 'Computer Graphics & EdTech',
            description: 'A modern interactive physics learning portal for secondary school students. Simulates Ohm\'s Law circuits, optical ray refraction, thermodynamics, and harmonic oscillators in real-time.',
            image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80',
            tags: ['React', 'Vite', 'Tailwind CSS', 'HTML5 Canvas', 'Lucide React'],
            githubUrl: 'https://github.com/Mikakim900/atomix-physics-laboratory',
            demoUrl: '#',
            highlights: ['Custom ray tracing optics simulation', 'Interactive electrical circuit builder', 'Data export & lab report generator'],
            metrics: 'Educational Platform'
        },
        {
            id: 'vibrant-store',
            title: 'Tech Neon Store - E-Commerce Interface',
            category: 'ui',
            categoryLabel: 'UI/UX & Glassmorphic Design',
            description: 'A dark-mode neon store interface featuring Glassmorphic product cards, dynamic filtering, cart state management, and glowing micro-animations.',
            image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
            tags: ['React', 'Tailwind CSS', 'Glassmorphism', 'Framer Motion'],
            githubUrl: 'https://github.com/Mikakim900/partfolio',
            demoUrl: '#',
            highlights: ['Custom Glassmorphism UI tokens', 'Smooth hover lighting & glow animations', 'Instant cart calculation state'],
            metrics: 'Modern UI Showcase'
        }
    ];

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center space-y-3 mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-500">
                        <FolderGit2 className="w-3.5 h-3.5" />
                        <span>PORTFOLIO SHOWCASE</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="opacity-80 max-w-2xl mx-auto text-sm sm:text-base">
                        Web applications, graphics simulations, and UI systems built with precision.
                    </p>

                    {/* Filter Categories */}
                    <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
                        {[
                            { id: 'all', label: 'All Projects' },
                            { id: 'web', label: 'Web Applications' },
                            { id: 'graphics', label: 'Graphics & Math' },
                            { id: 'ui', label: 'UI/UX Design' }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveCategory(tab.id as any)}
                                className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all cursor-pointer ${activeCategory === tab.id
                                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30'
                                    : 'glass-card opacity-80 hover:opacity-100 border'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="glass-card rounded-2xl border overflow-hidden group transition-all duration-300 flex flex-col justify-between"
                        >
                            {/* Image Container */}
                            <div className="relative h-52 overflow-hidden bg-slate-900">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-cyan-300 font-mono text-[10px] border border-cyan-500/30">
                                    {project.categoryLabel}
                                </span>

                                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-950/80 text-yellow-400 font-mono text-[10px] border border-yellow-500/30 font-bold">
                                    {project.metrics}
                                </span>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-bold group-hover:text-cyan-500 transition-colors mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm opacity-85 line-clamp-3 leading-relaxed mb-4">
                                        {project.description}
                                    </p>

                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {project.tags.map((tag, tIdx) => (
                                            <span
                                                key={tIdx}
                                                className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-500 font-mono text-[10px] border border-cyan-500/20"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="pt-4 border-t border-slate-700/40 flex items-center justify-between gap-3">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-1.5 text-xs opacity-75 hover:opacity-100 transition-colors"
                                    >
                                        <FolderGit2 className="w-4 h-4 text-cyan-500" />
                                        <span>Repository</span>
                                    </a>

                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500/10 text-cyan-500 hover:bg-cyan-500/20 border border-cyan-500/30 text-xs font-semibold transition-all cursor-pointer"
                                    >
                                        <Eye className="w-3.5 h-3.5" />
                                        <span>View Details</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Project Demo Modal Simulator */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
                    <div className="relative w-full max-w-3xl glass-card rounded-2xl border border-cyan-500/40 p-6 sm:p-8 space-y-6 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">

                        {/* Modal Header */}
                        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-500">
                                    <Monitor className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">{selectedProject.title}</h3>
                                    <p className="text-xs text-cyan-500 font-mono">{selectedProject.categoryLabel}</p>
                                </div>
                            </div>

                            <button
                                onClick={() => setSelectedProject(null)}
                                className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Simulated Live Preview Screen */}
                        <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
                            <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800 text-xs text-slate-400 font-mono">
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                                </div>
                                <span>https://khumorakhon.dev/demo/{selectedProject.id}</span>
                                <span className="text-[10px] text-cyan-400">LIVE PREVIEW</span>
                            </div>

                            <div className="p-6 relative text-left space-y-4">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-56 object-cover rounded-lg border border-slate-800"
                                />
                                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                    {selectedProject.description}
                                </p>

                                <div className="space-y-2 pt-2">
                                    <h4 className="text-xs font-mono text-cyan-400 uppercase font-semibold">Key Technical Features:</h4>
                                    {selectedProject.highlights.map((hl, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                                            <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                                            <span>{hl}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Modal Actions */}
                        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700"
                            >
                                Close Preview
                            </button>
                            <a
                                href={selectedProject.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 text-xs font-bold hover:bg-cyan-400 transition-colors"
                            >
                                <FolderGit2 className="w-4 h-4" />
                                <span>Visit GitHub Repo</span>
                            </a>
                        </div>

                    </div>
                </div>
            )}

        </section>
    );
};

