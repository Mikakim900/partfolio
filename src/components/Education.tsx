import React from "react";
import {
  GraduationCap,
  BookOpen,
  CheckCircle,
  Calculator,
  Sparkles,
} from "lucide-react";

export const Education: React.FC = () => {
  const educationItems = [
    {
      period: "2025 – PRESENT",
      degree: "Master in Computer Graphics and Design",
      institution: "Fergana State Technical University",
      location: "Fergana, Uzbekistan",
      status: "Master Student",
      color: "from-cyan-500 to-blue-600",
      badgeColor: "bg-cyan-500/10 text-cyan-500 border-cyan-500/30",
      icon: Sparkles,
      description:
        "Advanced graduate studies into computer graphics algorithms, 3D modeling fundamentals, modern user interface design systems, and visual computing.",
      highlights: [
        "Computer Graphics Algorithms & Design Systems",
        "Interactive Digital Aesthetics & UI Frameworks",
        "Academic Research in Visual Computing",
      ],
    },
    {
      period: "2021 – 2025",
      degree: "Bachelor of Mathematics (GPA: 4.94 / 99)",
      institution: "Fergana State University",
      location: "Fergana, Uzbekistan",
      status: "Honors Graduate",
      color: "from-indigo-500 to-purple-600",
      badgeColor: "bg-indigo-500/10 text-indigo-500 border-indigo-500/30",
      icon: Calculator,
      description:
        "Graduated with top academic honors (GPA 4.94 out of 99.0). Mastered mathematical analysis, abstract logic, data modeling, differential equations, and numerical analysis.",
      highlights: [
        "GPA 4.94 / 99 (Top Academic Honors)",
        "Mathematical Logic & Computational Algorithms",
        "Analytical Problem Solving & Applied Data Modeling",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-500">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Education & <span className="text-gradient">Background</span>
          </h2>
          <p className="opacity-80 max-w-2xl mx-auto text-sm sm:text-base">
            Bridging pure mathematical rigor with cutting-edge computer graphics,
            finance analytics, and frontend engineering.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative group glass-card p-6 sm:p-8 rounded-2xl border transition-all duration-300"
              >
                {/* Top Glowing Bar */}
                <div
                  className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r ${item.color} opacity-60 group-hover:opacity-100 transition-opacity`}
                />

                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-500 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-cyan-500 font-semibold">
                        {item.period}
                      </span>
                      <h3 className="text-lg font-bold leading-snug">
                        {item.degree}
                      </h3>
                    </div>
                  </div>
                  <span
                    className={`text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border ${item.badgeColor}`}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="text-sm font-semibold mb-3 flex items-center gap-1.5 opacity-90">
                  <BookOpen className="w-4 h-4 text-cyan-500" />
                  <span>{item.institution}</span>
                  <span className="opacity-40">•</span>
                  <span className="font-normal text-xs opacity-75">
                    {item.location}
                  </span>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed mb-6 opacity-85">
                  {item.description}
                </p>

                {/* Key Achievements Bullet points */}
                <div className="space-y-2 border-t border-slate-700/40 pt-4">
                  {item.highlights.map((hl, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs opacity-90"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-500 flex-shrink-0" />
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

