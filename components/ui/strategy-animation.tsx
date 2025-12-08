"use client";

import { motion } from "framer-motion";

export function StrategyAnimation() {
    return (
        <div className="relative w-full h-full min-h-[300px] bg-slate-950 overflow-hidden rounded-xl flex items-center justify-center">
            {/* North Star */}
            <motion.div
                className="absolute top-8 right-8"
                animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <div className="w-4 h-4 bg-white rounded-full blur-[2px] shadow-[0_0_20px_rgba(255,255,255,0.8)]" />
                <div className="absolute inset-0 w-4 h-4 bg-white rounded-full blur-[8px] opacity-50" />
            </motion.div>

            {/* Particles Container */}
            <div className="relative w-64 h-64">
                {/* Insight Particles */}
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-400/80 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.5)]"
                        initial={{
                            x: (Math.random() - 0.5) * 300,
                            y: (Math.random() - 0.5) * 300,
                            opacity: 0,
                            scale: 0,
                        }}
                        animate={{
                            x: [
                                (Math.random() - 0.5) * 300, // Start scattered
                                (Math.random() - 0.5) * 50,  // Converge to center (UX Shape)
                                100,                         // Move towards North Star
                            ],
                            y: [
                                (Math.random() - 0.5) * 300,
                                (Math.random() - 0.5) * 50,
                                -100,
                            ],
                            opacity: [0, 1, 1, 0],
                            scale: [0, 1, 0.5, 0],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.2, // Staggered start
                            times: [0, 0.4, 1],
                        }}
                    />
                ))}

                {/* Central UX Shape (appearing briefly) */}
                <motion.div
                    className="absolute inset-0 border-2 border-white/20 rounded-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0.8, 1, 1.1],
                        rotate: [0, 0, 15],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        times: [0.3, 0.4, 0.6],
                    }}
                />
            </div>
        </div>
    );
}
