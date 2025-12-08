"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

const laws = [
    {
        name: "Aesthetic-Usability Effect",
        desc: "Users often perceive aesthetically pleasing design as design that’s more usable.",
        image: "/images/laws/aesthetic-usability.png",
        color: "#F4F1DE", // Cream
        textColor: "text-slate-900"
    },
    {
        name: "Doherty Threshold",
        desc: "Productivity soars when a computer and its users interact at a pace (<400ms) that ensures that neither has to wait on the other.",
        image: "/images/laws/cognitive-load.png", // Mapping Cognitive Load here
        color: "#E63946",
        textColor: "text-white"
    },
    {
        name: "Fitts’s Law",
        desc: "The time to acquire a target is a function of the distance to and size of the target.",
        color: "#98C1D9", // Light Blue
        textColor: "text-slate-900"
    },
    {
        name: "Hick’s Law",
        desc: "The time it takes to make a decision increases with the number and complexity of choices.",
        image: "/images/laws/choice-overload.png",
        color: "#E0FBFC", // Pale Blue
        textColor: "text-slate-900"
    },
    {
        name: "Jakob’s Law",
        desc: "Users spend most of their time on other sites. This means that users prefer your site to work the same way as all the other sites they already know.",
        color: "#EE6C4D", // Burnt Orange
        textColor: "text-white"
    },
    {
        name: "Law of Proximity",
        desc: "Objects that are near, or proximate to each other, tend to be grouped together.",
        color: "#293241", // Dark Blue
        textColor: "text-white"
    },
    {
        name: "Miller’s Law",
        desc: "The average person can only keep 7 (plus or minus 2) items in their working memory.",
        image: "/images/laws/chunking.png",
        color: "#E07A5F", // Terra Cotta
        textColor: "text-white"
    },
    {
        name: "Occam’s Razor",
        desc: "Among competing hypotheses that predict equally well, the one with the fewest assumptions should be selected.",
        color: "#F2CC8F", // Yellow
        textColor: "text-slate-900"
    }
];

export function LawsCarousel() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div className="relative w-full py-12 group">
            {/* Gradient Masks for smooth fade at edges */}
            {/* <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" /> */}

            <div
                ref={containerRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 md:px-0 pb-12 scrollbar-hide"
            >
                {laws.map((law, index) => (
                    <LawCard key={law.name} law={law} containerRef={containerRef} index={index} />
                ))}
            </div>
        </div>
    );
}

function LawCard({ law, containerRef, index }: { law: any; containerRef: any; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);

    // Track scroll progress relative to this card
    // const { scrollXProgress } = useScroll({
    //     container: containerRef,
    //     target: cardRef,
    //     axis: "x",
    //     offset: ["center end", "center start"],
    // });

    // Parallax effect for content
    // const parallaxX = useTransform(scrollXProgress, [0, 1], [20, -20]);

    // Scale effect for focus (center)
    const { scrollXProgress } = useScroll({
        container: containerRef,
        target: cardRef,
        axis: "x",
        offset: ["start end", "end start"], // Adjust offsets to track visibility better
    });

    // Map scroll progress to scale and opacity
    // 0.5 is roughly the center of the viewport
    const scale = useTransform(scrollXProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
    const opacity = useTransform(scrollXProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

    return (
        <motion.div
            ref={cardRef}
            className="relative flex-shrink-0 w-[85vw] md:w-[calc(33.333%-16px)] h-[600px] snap-center"
            style={{
                scale,
                opacity
            }}
            initial={{ y: 20, opacity: 0 }} // Initial state for entrance
            whileInView={{
                y: 0,
                opacity: 1, // This opacity will be overridden by style prop if scrollXProgress is not 0.5
                transition: { duration: 0.5, delay: index * 0.1 }
            }}
            viewport={{ once: true }}
        >
            <div
                className="absolute inset-0 rounded-none overflow-hidden transition-all duration-500 hover:shadow-2xl border border-white/10 bg-[#0A0A0A]"
            >
                {law.image ? (
                    // Full Image Background (Poster)
                    <div className="absolute inset-0">
                        <img
                            src={law.image}
                            alt={law.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ) : (
                    // CSS Fallback for Poster Style (Dark Grid)
                    <div className="relative h-full w-full bg-[#0A0A0A]">
                        {/* Grid Background */}
                        <div
                            className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                                backgroundSize: '40px 40px'
                            }}
                        />

                        {/* Content Container */}
                        <div className="relative h-full p-8 flex flex-col justify-between z-10">
                            {/* Top Row: Number & Icon */}
                            <div className="flex justify-between items-start">
                                <div className="text-xs font-mono tracking-widest text-muted-foreground">
                                    [{String(index + 1).padStart(2, '0')}/08]
                                </div>
                                <div className="text-muted-foreground">
                                    {/* Placeholder Icon */}
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                    </svg>
                                </div>
                            </div>

                            {/* Bottom Row: Title & Desc */}
                            <div className="space-y-4">
                                <h3 className="text-4xl font-bold tracking-tight text-white leading-tight">
                                    {law.name}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed max-w-[90%]">
                                    "{law.desc}"
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
}
