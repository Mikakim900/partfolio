import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { generateCVPDF } from '../utils/generateCV';

export const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = ['hero', 'about', 'education', 'experience', 'skills', 'diplomas', 'projects', 'contacts'];
            const scrollPos = window.scrollY + 200;

            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPos >= top && scrollPos < top + height) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Education', href: '#education' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Diplomas & CV', href: '#diplomas' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contacts', href: '#contacts' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-lg shadow-cyan-950/20' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#hero"
                        className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-indigo-500 to-purple-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
                            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                                <span className="font-bold font-mono text-cyan-400 group-hover:scale-110 transition-transform">
                                    KZ
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-lg text-slate-100 tracking-tight flex items-center gap-1">
                                Khumorakhon<span className="text-cyan-400 font-mono">.dev</span>
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono tracking-wider">
                                GPA 4.94 • FRONTEND
                            </span>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
                        {navLinks.map((link) => {
                            const targetId = link.href.replace('#', '');
                            const isActive = activeSection === targetId;

                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${isActive
                                            ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 shadow-sm shadow-cyan-500/20'
                                            : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-800/50'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                    </nav>

                    {/* Action CTA & CV Download */}
                    <div className="hidden sm:flex items-center gap-3">
                        <button
                            onClick={generateCVPDF}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold shadow-md shadow-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer border border-cyan-400/30"
                        >
                            <Download className="w-3.5 h-3.5 animate-bounce" />
                            <span>Download CV</span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex lg:hidden items-center gap-2">
                        <button
                            onClick={generateCVPDF}
                            className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                            title="Download CV"
                        >
                            <Download className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white"
                        >
                            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer */}
            {mobileMenuOpen && (
                <div className="lg:hidden glass-panel border-b border-slate-800 px-4 pt-3 pb-6 mt-2 space-y-2 animate-fadeIn">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800/70 hover:text-cyan-400 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="pt-2">
                        <button
                            onClick={() => {
                                setMobileMenuOpen(false);
                                generateCVPDF();
                            }}
                            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm shadow-lg shadow-cyan-500/20"
                        >
                            <Download className="w-4 h-4" />
                            <span>Download Full CV (PDF)</span>
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};
