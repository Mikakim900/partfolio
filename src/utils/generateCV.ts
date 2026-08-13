import jsPDF from 'jspdf';
import confetti from 'canvas-confetti';

export const generateCVPDF = () => {
    // Trigger celebration confetti
    confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#38bdf8', '#818cf8', '#c084fc', '#ffffff']
    });

    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
    });

    // Page 1 Header Banner
    doc.setFillColor(15, 23, 42); // #0F172A
    doc.rect(0, 0, 210, 45, 'F');

    // Accent Line
    doc.setFillColor(2, 132, 199); // Cyan
    doc.rect(0, 44, 210, 1.5, 'F');

    // Title Text
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.text('KHUMORAKHON ZAYNOLOBIDINOVA', 14, 18);

    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(56, 189, 248); // #38BDF8 cyan
    doc.text('Frontend Developer | Computer Graphics & Design Specialist', 14, 26);

    doc.setFontSize(9);
    doc.setTextColor(203, 213, 225); // #CBD5E1
    doc.text('Location: Fergana, Uzbekistan  |  Email: xumoraqodirova09@gmail.com  |  Phone: +998 91 668-02-77', 14, 34);
    doc.text('Languages: English (Upper-Intermediate / B2), Russian (Fluent), Uzbek (Native)', 14, 40);

    let y = 54;

    // Helper for section headers
    const addSectionHeader = (title: string) => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(12);
        doc.setTextColor(0, 132, 199);
        doc.text(title.toUpperCase(), 14, y);

        // Draw underline
        doc.setDrawColor(226, 232, 240);
        doc.setLineWidth(0.5);
        doc.line(14, y + 2, 196, y + 2);

        y += 8;
    };

    // Executive Summary
    addSectionHeader('Professional Profile');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(51, 65, 85);

    const summaryText =
        'Frontend Developer and Computer Graphics Master\'s student with a stellar background in pure Mathematics (Bachelor GPA 4.94 / 99). ' +
        'Expertise in creating responsive, high-performance web applications, interactive visual simulations, and refined UI/UX components. ' +
        'Recognized for exceptional mathematical logic, critical thinking, data analysis, and team leadership.';

    const splitSummary = doc.splitTextToSize(summaryText, 182);
    doc.text(splitSummary, 14, y);
    y += splitSummary.length * 4.5 + 4;

    // Education & Academic Achievements
    addSectionHeader('Education & Academic Background');

    // Master Degree
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text('Master in Computer Graphics and Design', 14, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 116, 139);
    doc.text('2025 – Present', 196, y, { align: 'right' });
    y += 4.5;
    doc.setTextColor(2, 132, 199);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text('Fergana State Technical University | Fergana, Uzbekistan', 14, y);
    y += 4.5;
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    doc.text('• Specializing in 3D computer graphics algorithms, UI design systems, and frontend visualization.', 18, y);
    y += 6;

    // Bachelor Degree
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text('Bachelor of Mathematics (GPA: 4.94 / 99)', 14, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 116, 139);
    doc.text('2021 – 2025', 196, y, { align: 'right' });
    y += 4.5;
    doc.setTextColor(2, 132, 199);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text('Fergana State University | Fergana, Uzbekistan', 14, y);
    y += 4.5;
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    doc.text('• Graduated with top academic honors (GPA 4.94/99.0). Focus on Mathematical Analysis & Applied Logic.', 18, y);
    y += 8;

    // Professional Experience
    addSectionHeader('Professional Experience');

    // Experience 1
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text('Project Team Member', 14, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 116, 139);
    doc.text('2025 – Present', 196, y, { align: 'right' });
    y += 4.5;
    doc.setTextColor(2, 132, 199);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text('Fergana State Technical University', 14, y);
    y += 4.5;
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    doc.text('• Collaborative frontend development & graphics interface design for university tech initiatives.', 18, y);
    y += 6;

    // Experience 2
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text('Teacher & Academic Mentor', 14, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 116, 139);
    doc.text('2024 – 2025', 196, y, { align: 'right' });
    y += 4.5;
    doc.setTextColor(2, 132, 199);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text('Ideal Private School', 14, y);
    y += 4.5;
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    doc.text('• Instructed mathematics and logic courses, managing student progress & developing curriculum.', 18, y);
    y += 6;

    // Experience 3
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text('Mathematics Teacher', 14, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 116, 139);
    doc.text('2023 – 2024', 196, y, { align: 'right' });
    y += 4.5;
    doc.setTextColor(2, 132, 199);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text('Academic Lyceum of Fergana State University', 14, y);
    y += 4.5;
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    doc.text('• Conducted advanced mathematics training for gifted students, preparing candidates for Olympiads.', 18, y);
    y += 8;

    // Technical & Core Competencies
    addSectionHeader('Skills & Competencies');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);

    doc.text('Frontend Development:', 14, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    doc.text('React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Framer Motion', 58, y);
    y += 5;

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text('Graphics & Analytics:', 14, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    doc.text('Computer Graphics, Data Analysis (Excel, Math Modeling), UI/UX Glassmorphism Design', 58, y);
    y += 5;

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text('Soft Skills & Leadership:', 14, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    doc.text('Multitasking, Critical Thinking, Team Leadership, Technical Instruction, Problem Solving', 58, y);
    y += 8;

    // Diplomas & Qualifications
    addSectionHeader('Certificates & Diplomas');

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(51, 65, 85);
    doc.text('1. Bachelor Diploma in Mathematics – Fergana State University (Honors GPA: 4.94 / 99.0)', 14, y);
    y += 4.5;
    doc.text('2. Foreign Language Proficiency Certificate – English B2 (Upper-Intermediate)', 14, y);
    y += 4.5;
    doc.text('3. Master Degree Program Verification – Computer Graphics & Design (FSTU)', 14, y);
    y += 10;

    // Footer on PDF
    doc.setDrawColor(226, 232, 240);
    doc.line(14, 280, 196, 280);
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text('Khumorakhon Zaynolobidinova • Official Curriculum Vitae • Verified Record', 105, 285, { align: 'center' });

    // Download trigger
    doc.save('Khumorakhon_Zaynolobidinova_CV.pdf');
};
