import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Sun, Moon } from 'lucide-react';
import { generateCVPDF } from '../utils/generateCV';

interface HeaderProps {
    theme?: 'dark' | 'light';
    onToggleTheme?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ theme = 'dark', onToggleTheme }) => {
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

    const isDark = theme === 'dark';

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? isDark ? 'glass-nav py-3 shadow-lg shadow-cyan-950/20' : 'glass-nav py-3 shadow-md shadow-slate-200'
                : 'bg-transparent py-5'
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
                            <div className={`w-full h-full ${isDark ? 'bg-slate-950 text-cyan-400' : 'bg-white text-cyan-600'} rounded-[11px] flex items-center justify-center`}>
                                <span className="font-bold font-mono group-hover:scale-110 transition-transform">
                                    KZ
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className={`font-bold text-lg tracking-tight flex items-center gap-1 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                                Khumorakhon<span className="text-cyan-500 font-mono">.dev</span>
                            </span>
                            <span className={`text-[10px] font-mono tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                                GPA 4.94 • FRONTEND
                            </span>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className={`hidden lg:flex items-center gap-1 ${isDark ? 'bg-slate-900/60 border-slate-800/80' : 'bg-white/80 border-slate-200'} p-1.5 rounded-full border backdrop-blur-md shadow-sm`}>
                        {navLinks.map((link) => {
                            const targetId = link.href.replace('#', '');
                            const isActive = activeSection === targetId;

                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${isActive
                                        ? 'bg-cyan-500/15 text-cyan-500 border border-cyan-500/30 shadow-sm shadow-cyan-500/20 font-semibold'
                                        : isDark
                                            ? 'text-slate-300 hover:text-cyan-300 hover:bg-slate-800/50'
                                            : 'text-slate-600 hover:text-cyan-600 hover:bg-slate-100'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                    </nav>

                    {/* Action CTA & CV Download & Theme Toggle */}
                    <div className="hidden sm:flex items-center gap-3">
                        {/* GitHub Button */}
                        <a
                            href="https://github.com/Mikakim900"
                            target="_blank"
                            rel="noreferrer"
                            className={`p-2.5 rounded-xl transition-all cursor-pointer border flex items-center justify-center ${isDark
                                ? 'bg-slate-800/80 border-slate-700 text-cyan-400 hover:bg-slate-700'
                                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 shadow-sm'
                                }`}
                            title="GitHub Repository / Profile"
                            aria-label="GitHub Profile"
                        >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                        </a>

                        {/* Theme Toggle Button */}
                        <button
                            onClick={onToggleTheme}
                            className={`p-2.5 rounded-xl transition-all cursor-pointer border flex items-center justify-center ${isDark
                                ? 'bg-slate-800/80 border-slate-700 text-yellow-400 hover:bg-slate-700'
                                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 shadow-sm'
                                }`}
                            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                            aria-label="Toggle Theme"
                        >
                            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-indigo-600" />}
                        </button>

                        <button
                            onClick={generateCVPDF}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold shadow-md shadow-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer border border-cyan-400/30"
                        >
                            <Download className="w-3.5 h-3.5 animate-bounce" />
                            <span>Download CV</span>
                        </button>
                    </div>

                    {/* Mobile Navigation Controls */}
                    <div className="flex lg:hidden items-center gap-2">
                        {/* Mobile Theme Toggle */}
                        <button
                            onClick={onToggleTheme}
                            className={`p-2 rounded-lg border ${isDark
                                ? 'bg-slate-800 text-yellow-400 border-slate-700'
                                : 'bg-white text-indigo-600 border-slate-200 shadow-sm'
                                }`}
                            title="Toggle Theme"
                        >
                            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        </button>

                        <button
                            onClick={generateCVPDF}
                            className="p-2 rounded-lg bg-cyan-500/10 text-cyan-500 border border-cyan-500/20"
                            title="Download CV"
                        >
                            <Download className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`p-2.5 rounded-xl border ${isDark
                                ? 'bg-slate-800/80 border-slate-700 text-slate-300 hover:text-white'
                                : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900 shadow-sm'
                                }`}
                        >
                            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer */}
            {mobileMenuOpen && (
                <div className={`lg:hidden glass-panel border-b px-4 pt-3 pb-6 mt-2 space-y-2 animate-fadeIn ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${isDark
                                ? 'text-slate-200 hover:bg-slate-800/70 hover:text-cyan-400'
                                : 'text-slate-700 hover:bg-slate-100 hover:text-cyan-600'
                                }`}
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

