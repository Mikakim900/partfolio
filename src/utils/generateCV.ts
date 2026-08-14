import jsPDF from 'jspdf';
import confetti from 'canvas-confetti';
import cvImgUrl from '../assets/cv.png';

export const generateCVPDF = () => {
    // Trigger celebration confetti
    confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#38bdf8', '#818cf8', '#c084fc', '#ffffff']
    });

    const createAndSavePDF = (img: HTMLImageElement) => {
        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });

        // A4 page width: 210mm, height: 297mm
        doc.addImage(img, 'PNG', 0, 0, 210, 297);
        doc.save('Khumorakhon_Zaynolobidinova_CV.pdf');
    };

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = cvImgUrl;

    if (img.complete && img.naturalWidth !== 0) {
        createAndSavePDF(img);
    } else {
        img.onload = () => {
            createAndSavePDF(img);
        };
        img.onerror = () => {
            // Fallback direct download if canvas/PDF fails
            const link = document.createElement('a');
            link.href = cvImgUrl;
            link.download = 'Khumorakhon_Zaynolobidinova_CV.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };
    }
};

export const downloadCVImage = () => {
    const link = document.createElement('a');
    link.href = cvImgUrl;
    link.download = 'Khumorakhon_Zaynolobidinova_CV.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

