import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Download, Sparkles, CheckCircle2, Copy, Share2 } from 'lucide-react';
import { generateCVPDF } from '../utils/generateCV';

export const ContactsFooter: React.FC = () => {
    const [copiedField, setCopiedField] = useState<string | null>(null);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleCopy = (text: string, field: string) => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 2500);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.email || !formData.message) return;
        setFormSubmitted(true);
        setTimeout(() => {
            setFormSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
        }, 4000);
    };

    const contactMethods = [
        {
            id: 'email',
            icon: Mail,
            title: 'Email Address',
            value: 'xumoraqodirova09@gmail.com',
            actionLabel: 'Send Email',
            href: 'mailto:xumoraqodirova09@gmail.com',
            color: 'from-cyan-500/20 to-blue-500/20',
            badgeColor: 'text-cyan-400 border-cyan-500/30'
        },
        {
            id: 'phone',
            icon: Phone,
            title: 'Phone Number',
            value: '+998 91 668-02-77',
            actionLabel: 'Call Directly',
            href: 'tel:+998916680277',
            color: 'from-indigo-500/20 to-purple-500/20',
            badgeColor: 'text-indigo-400 border-indigo-500/30'
        },
        {
            id: 'telegram',
            icon: Send,
            title: 'Telegram Messenger',
            value: '@xumoraqodirova',
            actionLabel: 'Open Telegram',
            href: 'https://t.me/xumoraqodirova',
            color: 'from-blue-500/20 to-cyan-500/20',
            badgeColor: 'text-blue-400 border-blue-500/30'
        },
        {
            id: 'linkedin',
            icon: Share2,
            title: 'LinkedIn Profile',
            value: 'Khumorakhon Zaynolobidinova',
            actionLabel: 'View LinkedIn',
            href: 'https://linkedin.com/in/khumorakhon',
            color: 'from-purple-500/20 to-pink-500/20',
            badgeColor: 'text-purple-400 border-purple-500/30'
        }
    ];

    return (
        <section id="contacts" className="py-20 relative bg-slate-950/60 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center space-y-3 mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>LET'S CONNECT</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                        Get in <span className="text-gradient">Touch</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
                        Open for frontend development projects, computer graphics collaboration, and full-time opportunities.
                    </p>
                </div>

                {/* Contact Methods Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {contactMethods.map((method) => {
                        const Icon = method.icon;
                        const isCopied = copiedField === method.id;

                        return (
                            <div
                                key={method.id}
                                className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                                        <Icon className="w-6 h-6" />
                                    </div>

                                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                                        {method.title}
                                    </span>

                                    <div className="text-sm font-bold text-white mt-1 mb-4 truncate font-mono">
                                        {method.value}
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <a
                                        href={method.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 text-center py-2 rounded-xl bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 border border-cyan-500/30 text-xs font-semibold transition-all"
                                    >
                                        {method.actionLabel}
                                    </a>

                                    <button
                                        onClick={() => handleCopy(method.value, method.id)}
                                        className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors"
                                        title="Copy to clipboard"
                                    >
                                        {isCopied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Contact Form & Location Section */}
                <div className="grid lg:grid-cols-12 gap-12 max-w-5xl mx-auto">

                    {/* Left info box */}
                    <div className="lg:col-span-5 space-y-6 text-left">
                        <div className="glass-card p-8 rounded-2xl border border-slate-800 space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-base font-bold text-white">Location</h4>
                                    <p className="text-xs text-slate-400">Fergana, Uzbekistan</p>
                                </div>
                            </div>

                            <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-slate-800">
                                Available for remote global engagements as well as local tech initiatives in Uzbekistan.
                            </p>

                            <div className="pt-2">
                                <button
                                    onClick={generateCVPDF}
                                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
                                >
                                    <Download className="w-4 h-4" />
                                    <span>Download Curriculum Vitae (PDF)</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-7">
                        <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl border border-slate-800 space-y-4">
                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-cyan-400" />
                                <span>Send a Direct Message</span>
                            </h3>

                            {formSubmitted ? (
                                <div className="p-6 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-2 animate-fadeIn">
                                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                                    <h4 className="text-base font-bold text-emerald-300">Message Sent Successfully!</h4>
                                    <p className="text-xs text-slate-300">Thank you for reaching out, Khumorakhon will get back to you shortly.</p>
                                </div>
                            ) : (
                                <>
                                    <div className="space-y-1">
                                        <label className="text-xs font-mono text-slate-300 font-medium">Your Name</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="e.g. Alex Mercer"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500/60 font-sans"
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-xs font-mono text-slate-300 font-medium">Your Email</label>
                                        <input
                                            type="email"
                                            required
                                            placeholder="alex@example.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500/60 font-sans"
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-xs font-mono text-slate-300 font-medium">Message</label>
                                        <textarea
                                            rows={4}
                                            required
                                            placeholder="Discuss a project, opportunity, or inquiry..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500/60 font-sans resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-cyan-500/20"
                                    >
                                        <Send className="w-3.5 h-3.5" />
                                        <span>Submit Message</span>
                                    </button>
                                </>
                            )}
                        </form>
                    </div>

                </div>

                {/* Footer */}
                <div className="mt-20 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs font-mono">
                    <div>
                        © {new Date().getFullYear()} <span className="text-slate-300">Khumorakhon Zaynolobidinova</span>. All rights reserved.
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="#hero" className="hover:text-cyan-400 transition-colors">Back to Top ↑</a>
                    </div>
                </div>

            </div>
        </section>
    );
};
