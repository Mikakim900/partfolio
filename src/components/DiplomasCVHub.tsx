import React, { useState } from 'react';
import { Award, Eye, Download, ShieldCheck, X, CheckCircle2, Sparkles, FileText } from 'lucide-react';
import { generateCVPDF } from '../utils/generateCV';

interface DocumentItem {
    id: string;
    title: string;
    issuer: string;
    type: string;
    year: string;
    score: string;
    credentialId: string;
    status: string;
    gradient: string;
    description: string;
    details: string[];
}

export const DiplomasCVHub: React.FC = () => {
    const [selectedDoc, setSelectedDoc] = useState<DocumentItem | null>(null);

    const documents: DocumentItem[] = [
        {
            id: 'bachelor-math',
            title: 'Bachelor Diploma in Mathematics',
            issuer: 'Fergana State University (FSU)',
            type: 'Higher Education Degree (Honors)',
            year: '2021 – 2025',
            score: 'GPA: 4.94 / 99.0',
            credentialId: 'FSU-MATH-2025-494',
            status: 'Verified Honors',
            gradient: 'from-cyan-500/20 via-blue-500/20 to-indigo-500/20',
            description: 'Official Bachelor of Mathematics Diploma awarded with distinction (GPA 4.94 out of 99.0). Demonstrates mastery in theoretical mathematics, abstract algebra, analytical calculus, and computational modeling.',
            details: [
                'Cumulative Grade Point Average: 4.94 / 99.0 (Top Honors)',
                'Specialization: Pure & Applied Mathematics, Numerical Analysis',
                'Diploma Verification Status: Authenticated by FSU Academic Registrar',
                'Official Transcript & Degree Classification: Grade A with Distinction'
            ]
        },
        {
            id: 'english-b2',
            title: 'Foreign Language Proficiency Certificate',
            issuer: 'State Testing Center & CEFR Standards',
            type: 'English B2 (Upper-Intermediate)',
            year: '2024',
            score: 'Level B2 (CEFR)',
            credentialId: 'ENG-CEFR-B2-8924',
            status: 'Certified B2',
            gradient: 'from-indigo-500/20 via-purple-500/20 to-pink-500/20',
            description: 'Official Foreign Language Proficiency Certificate confirming Upper-Intermediate (B2 Level) competence in spoken and written English, technical communication, and academic reading.',
            details: [
                'CEFR Standard Level: B2 Upper-Intermediate',
                'Skills Tested: Technical Reading, Academic Writing, Spoken Fluency',
                'Russian Language Competence: Fluent (Native equivalent)',
                'Uzbek Language Competence: Native Speaker'
            ]
        },
        {
            id: 'master-verification',
            title: 'Master Degree Program Verification',
            issuer: 'Fergana State Technical University (FSTU)',
            type: 'Master Candidate Document',
            year: '2025 – Present',
            score: 'Active Enrollment',
            credentialId: 'FSTU-CGD-2025-01',
            status: 'Active Master Student',
            gradient: 'from-blue-500/20 via-cyan-500/20 to-emerald-500/20',
            description: 'Official enrollment verification document for the Master in Computer Graphics and Design program at Fergana State Technical University.',
            details: [
                'Degree Program: Master of Science in Computer Graphics & Design',
                'Faculty: Information Technology & Computer Graphics',
                'Research Focus: Interactive 3D graphics algorithms & Web UI frameworks',
                'Academic Status: Enrolled in good academic standing'
            ]
        }
    ];

    return (
        <section id="diplomas" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center space-y-3 mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                        <Award className="w-3.5 h-3.5" />
                        <span>VERIFIED ACADEMIC CREDENTIALS</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                        Diplomas, Certificates & <span className="text-gradient">CV Hub</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
                        Official verified qualifications, language certificates, and direct curriculum vitae download hub.
                    </p>
                </div>

                {/* Credentials Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {documents.map((doc) => (
                        <div
                            key={doc.id}
                            className="glass-card p-6 rounded-2xl border border-slate-800 flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Background Glow */}
                            <div className={`absolute -right-10 -bottom-10 w-32 h-32 rounded-full bg-gradient-to-br ${doc.gradient} blur-2xl pointer-events-none group-hover:scale-150 transition-transform`} />

                            <div>
                                <div className="flex items-center justify-between gap-2 mb-4">
                                    <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-900 text-cyan-400 border border-cyan-500/20 flex items-center gap-1">
                                        <ShieldCheck className="w-3 h-3 text-cyan-400" />
                                        {doc.status}
                                    </span>
                                    <span className="text-xs font-mono text-slate-400">{doc.year}</span>
                                </div>

                                <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                                    {doc.title}
                                </h3>
                                <p className="text-xs font-semibold text-cyan-400 mb-3">{doc.issuer}</p>

                                <p className="text-xs text-slate-300 line-clamp-3 mb-4 leading-relaxed">
                                    {doc.description}
                                </p>
                            </div>

                            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                                <span className="text-xs font-mono font-bold text-yellow-400 bg-yellow-950/60 px-2 py-0.5 rounded border border-yellow-500/30">
                                    {doc.score}
                                </span>

                                <button
                                    onClick={() => setSelectedDoc(doc)}
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 border border-cyan-500/30 text-xs font-medium transition-all cursor-pointer"
                                >
                                    <Eye className="w-3.5 h-3.5" />
                                    <span>Preview</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Global Action Banner */}
                <div className="glass-panel p-8 rounded-2xl border border-cyan-500/30 text-center max-w-3xl mx-auto space-y-4 shadow-xl shadow-cyan-950/30">
                    <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs">
                        <Sparkles className="w-4 h-4" />
                        <span>FULL VERIFICATION REPOSITORY</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                        Need Official Physical Transcripts or Verified Links?
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
                        You can generate and download Khumorakhon's complete CV in PDF format instantly, or request direct verified links for academic certificates.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                        <button
                            onClick={generateCVPDF}
                            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-cyan-400/30"
                        >
                            <Download className="w-4 h-4 animate-bounce" />
                            <span>Download Full CV (PDF)</span>
                        </button>

                        <a
                            href="mailto:xumoraqodirova09@gmail.com?subject=Certificate%20Verification%20Request"
                            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm border border-slate-700 hover:border-slate-600 transition-all cursor-pointer"
                        >
                            <FileText className="w-4 h-4 text-cyan-400" />
                            <span>Request Verified Diplomas Link</span>
                        </a>
                    </div>
                </div>

            </div>

            {/* Modal Document Preview */}
            {selectedDoc && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
                    <div className="relative w-full max-w-2xl glass-card rounded-2xl border border-cyan-500/40 p-6 sm:p-8 space-y-6 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">

                        {/* Modal Header */}
                        <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">{selectedDoc.title}</h3>
                                    <p className="text-xs text-cyan-400 font-mono">{selectedDoc.issuer}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setSelectedDoc(null)}
                                className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Document Rendered Preview Card */}
                        <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-4 relative overflow-hidden">
                            <div className="absolute top-2 right-2 px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-400 text-[10px] font-mono border border-cyan-500/30">
                                OFFICIAL RECORD
                            </div>

                            <div className="w-16 h-16 mx-auto rounded-full bg-slate-800 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/20">
                                <Award className="w-8 h-8" />
                            </div>

                            <div>
                                <h4 className="text-base font-extrabold text-white tracking-wide">{selectedDoc.title}</h4>
                                <p className="text-xs text-slate-400">{selectedDoc.type} • {selectedDoc.year}</p>
                            </div>

                            <div className="inline-block px-4 py-1.5 rounded-lg bg-slate-950 border border-yellow-500/30 text-yellow-400 font-mono text-sm font-bold">
                                {selectedDoc.score}
                            </div>

                            <div className="text-[11px] font-mono text-slate-500">
                                Credential ID: <span className="text-slate-300">{selectedDoc.credentialId}</span>
                            </div>
                        </div>

                        {/* Document Details List */}
                        <div className="space-y-2">
                            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                                Verification Breakdown:
                            </h4>
                            {selectedDoc.details.map((dt, idx) => (
                                <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                                    <span>{dt}</span>
                                </div>
                            ))}
                        </div>

                        {/* Modal Actions */}
                        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                            <button
                                onClick={() => setSelectedDoc(null)}
                                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700"
                            >
                                Close Preview
                            </button>
                            <button
                                onClick={generateCVPDF}
                                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 text-xs font-bold hover:bg-cyan-400 transition-colors"
                            >
                                <Download className="w-3.5 h-3.5" />
                                <span>Download CV PDF</span>
                            </button>
                        </div>

                    </div>
                </div>
            )}

        </section>
    );
};
