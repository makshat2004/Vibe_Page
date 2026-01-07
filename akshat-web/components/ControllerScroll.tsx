'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent, motion, useSpring } from 'framer-motion';

export default function ControllerScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Scroll progress for the entire 400vh container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Map scroll progress (0 to 1) to frame index (0 to 63)
    // We want the animation to complete by 80% so the last 20% is just holding the final state
    const roughIndex = useTransform(scrollYProgress, [0, 0.8], [0, 63]);
    const smoothIndex = useSpring(roughIndex, { stiffness: 200, damping: 30 });

    // Preload images
    useEffect(() => {
        const loadImages = async () => {
            try {
                const imagePromises: Promise<HTMLImageElement>[] = [];

                for (let i = 1; i <= 64; i++) {
                    const img = new Image();
                    const fileName = `ezgif-frame-${String(i).padStart(3, '0')}.jpg`;
                    img.src = `/controllerframes/${fileName}`;

                    const promise = new Promise<HTMLImageElement>((resolve) => {
                        img.onload = () => resolve(img);
                        img.onerror = () => {
                            console.error(`Failed to load image: ${fileName}`);
                            resolve(img); // Resolve anyway to avoid blocking the app
                        };
                    });
                    imagePromises.push(promise);
                }

                const loadedImages = await Promise.all(imagePromises);
                setImages(loadedImages);
            } catch (error) {
                console.error("Error loading image sequence:", error);
            } finally {
                setIsLoading(false);
            }
        };

        loadImages();
    }, []);

    // Draw to canvas
    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const frameIndex = Math.min(
            Math.max(Math.floor(index), 0),
            images.length - 1
        );

        const img = images[frameIndex];

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.min(hRatio, vRatio);

        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;

        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    };

    // Initial render when images satisfy
    useEffect(() => {
        if (!isLoading && images.length > 0) {
            renderFrame(0);
        }
    }, [isLoading, images]);

    // Update on spring change
    useMotionValueEvent(smoothIndex, "change", (latest) => {
        renderFrame(latest);
    });

    useEffect(() => {
        const handleResize = () => renderFrame(smoothIndex.get());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [smoothIndex, images]);

    return (
        <div ref={containerRef} className="relative h-[400vh] bg-[#050505]">
            {/* Sticky Canvas Background */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center pointer-events-none">
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center text-white/50 text-xl font-light tracking-widest animate-pulse z-10">
                        LOADING EXPERIENCE...
                    </div>
                )}
                <canvas
                    ref={canvasRef}
                    className="w-full h-full block"
                />
            </div>

            {/* Scrolling Text Content Layer - Absolute positioned within the tall parent */}

            {/* 0vh - Initial Title */}
            <div className="absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center text-center px-4 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-4">Akshat X</h1>
                    <p className="text-xl md:text-2xl text-white/60 font-light tracking-wide">Built for Precision.</p>
                </motion.div>
            </div>

            {/* 100vh Offset - Left Text */}
            <div className="absolute top-[100vh] left-0 w-full h-screen flex items-center pointer-events-none">
                <div className="max-w-7xl mx-auto w-full px-6 md:px-12">
                    <motion.div
                        className="max-w-md"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-none">Designed for <br />Control.</h2>
                        <p className="text-lg text-white/70 leading-relaxed">
                            Every disassembled part tells a story of obsession. A shape refined over 5,000 hours of testing.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* 200vh Offset - Right Text */}
            <div className="absolute top-[200vh] left-0 w-full h-screen flex items-center justify-end pointer-events-none">
                <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex justify-end">
                    <motion.div
                        className="max-w-md text-right"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-none">Mechanical <br />at its Core.</h2>
                        <p className="text-lg text-white/70 leading-relaxed">
                            The first controller to use full optical-mechanical switches for both face buttons and triggers.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* 300vh Offset - Center Engine Text */}
            <div className="absolute top-[300vh] left-0 w-full h-screen flex items-center justify-center pointer-events-none">
                <div className="max-w-3xl text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">Engineered <br />Inside Out.</h2>
                        <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
                            We didn't just build a shell. We architected a complete response system.
                        </p>
                    </motion.div>
                </div>
            </div>

        </div>
    );
}
