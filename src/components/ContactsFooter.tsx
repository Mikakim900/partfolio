import React, { useState } from "react";
import {
  Mail,
  Phone,
  Send,
  MessageSquare,
  Download,
  Sparkles,
  CheckCircle2,
  Copy,
  MapPin,
} from "lucide-react";
import { generateCVPDF } from "../utils/generateCV";

export const ContactsFooter: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  const contactMethods = [
    {
      id: "github",
      icon: ({ className }: { className?: string }) => (
        <svg className={`${className} fill-current`} viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
      title: "GitHub Repository",
      value: "Mikakim900",
      actionLabel: "Open GitHub",
      href: "https://github.com/Mikakim900",
    },
    {
      id: "email",
      icon: Mail,
      title: "Email Address",
      value: "xzaynolobidinova@gmail.com",
      actionLabel: "Send Email",
      href: "mailto:xzaynolobidinova@gmail.com",
    },
    {
      id: "phone",
      icon: Phone,
      title: "Phone Number",
      value: "+998 91 668-02-77",
      actionLabel: "Call Directly",
      href: "tel:+998916680277",
    },
    {
      id: "telegram",
      icon: Send,
      title: "Telegram Messenger",
      value: "@Xumoraxon0906",
      actionLabel: "Open Telegram",
      href: "https://t.me/Xumoraxon0906",
    },
  ];

  return (
    <section
      id="contacts"
      className="py-20 relative border-t border-slate-700/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-500">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="opacity-80 max-w-2xl mx-auto text-sm sm:text-base">
            Open for frontend development projects, computer graphics
            collaboration, and full-time opportunities.
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
                className="glass-card p-6 rounded-2xl border transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-500 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-mono opacity-70 uppercase tracking-wider font-semibold">
                    {method.title}
                  </span>

                  <div className="text-sm font-bold mt-1 mb-4 truncate font-mono">
                    {method.value}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-2 rounded-xl bg-cyan-500/10 text-cyan-500 hover:bg-cyan-500/20 border border-cyan-500/30 text-xs font-semibold transition-all"
                  >
                    {method.actionLabel}
                  </a>

                  <button
                    onClick={() => handleCopy(method.value, method.id)}
                    className="p-2 rounded-xl glass-card hover:text-cyan-500 border transition-colors cursor-pointer"
                    title="Copy to clipboard"
                  >
                    {isCopied ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
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
            <div className="glass-card p-8 rounded-2xl border space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold">Location</h4>
                  <p className="text-xs opacity-75">Fergana, Uzbekistan</p>
                </div>
              </div>

              <p className="text-xs opacity-80 leading-relaxed pt-2 border-t border-slate-700/40">
                Available for remote global engagements as well as local tech
                initiatives in Uzbekistan.
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
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 rounded-2xl border space-y-4"
            >
              <h3 className="text-lg font-bold flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-500" />
                <span>Send a Direct Message</span>
              </h3>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/40 text-center space-y-2 animate-fadeIn">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                  <h4 className="text-base font-bold text-emerald-500">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs opacity-85">
                    Thank you for reaching out, Khumorakhon will get back to you
                    shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div className="space-y-1">
                    <label className="text-xs font-mono opacity-80 font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Mercer"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-500/10 border border-slate-500/20 text-xs focus:outline-none focus:border-cyan-500/60 font-sans"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono opacity-80 font-medium">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-500/10 border border-slate-500/20 text-xs focus:outline-none focus:border-cyan-500/60 font-sans"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono opacity-80 font-medium">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Discuss a project, opportunity, or inquiry..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-500/10 border border-slate-500/20 text-xs focus:outline-none focus:border-cyan-500/60 font-sans resize-none"
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
        <div className="mt-20 pt-8 border-t border-slate-700/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono opacity-70">
          <div>
            © {new Date().getFullYear()}{" "}
            <span className="font-bold">Khumorakhon Zaynolobidinova</span>.
            All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#hero" className="hover:text-cyan-500 transition-colors">
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

