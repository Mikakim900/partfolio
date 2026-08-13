import React, { useEffect, useRef } from 'react';

export const MathCanvasBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const handleResize = () => {
            if (!canvas) return;
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        // Particles representing math nodes / geometry points
        interface Node {
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;
            symbol: string;
            alpha: number;
        }

        const mathSymbols = ['∑', '∫', 'π', 'Δ', 'λ', 'f(x)', '∞', 'θ', '√', '∇', 'y=mx+b', 'E=mc²'];
        const nodes: Node[] = [];
        const nodeCount = Math.min(Math.floor(width / 35), 45);

        for (let i = 0; i < nodeCount; i++) {
            nodes.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                radius: Math.random() * 2 + 1.5,
                symbol: mathSymbols[Math.floor(Math.random() * mathSymbols.length)],
                alpha: Math.random() * 0.3 + 0.1,
            });
        }

        let time = 0;

        const render = () => {
            time += 0.01;
            ctx.clearRect(0, 0, width, height);

            // Draw subtle coordinate grid lines
            ctx.strokeStyle = 'rgba(56, 189, 248, 0.03)';
            ctx.lineWidth = 1;
            const gridSize = 80;
            for (let x = 0; x < width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }
            for (let y = 0; y < height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }

            // Draw floating sine wave in the background
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(56, 189, 248, 0.05)';
            ctx.lineWidth = 2;
            for (let x = 0; x < width; x += 5) {
                const y = height * 0.5 + Math.sin(x * 0.005 + time) * 60 + Math.cos(x * 0.002 - time * 0.5) * 30;
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();

            // Update & Draw Nodes
            nodes.forEach((node, idx) => {
                node.x += node.vx;
                node.y += node.vy;

                if (node.x < 0 || node.x > width) node.vx *= -1;
                if (node.y < 0 || node.y > height) node.vy *= -1;

                // Draw connections
                for (let j = idx + 1; j < nodes.length; j++) {
                    const other = nodes[j];
                    const dx = other.x - node.x;
                    const dy = other.y - node.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 140) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(56, 189, 248, ${0.15 * (1 - dist / 140)})`;
                        ctx.lineWidth = 0.8;
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.stroke();
                    }
                }

                // Draw Node Dot
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(56, 189, 248, ${node.alpha + 0.2})`;
                ctx.fill();

                // Draw Math Symbol occasionally
                if (idx % 3 === 0) {
                    ctx.font = '12px Inter, monospace';
                    ctx.fillStyle = `rgba(129, 140, 248, ${node.alpha * 0.7})`;
                    ctx.fillText(node.symbol, node.x + 8, node.y - 8);
                }
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 opacity-80"
        />
    );
};
