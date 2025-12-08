"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

const laws = [
    {
        name: "Aesthetic-Usability Effect",
        desc: "Users often perceive aesthetically pleasing design as design that’s more usable.",
        icon: "✨"
    },
    {
        name: "Doherty Threshold",
        desc: "Productivity soars when a computer and its users interact at a pace (<400ms) that ensures that neither has to wait on the other.",
        icon: "⚡️"
    },
    {
        name: "Fitts’s Law",
        desc: "The time to acquire a target is a function of the distance to and size of the target.",
        icon: "🎯"
    },
    {
        name: "Hick’s Law",
        desc: "The time it takes to make a decision increases with the number and complexity of choices.",
        icon: "🤔"
    },
    {
        name: "Jakob’s Law",
        desc: "Users spend most of their time on other sites. This means that users prefer your site to work the same way as all the other sites they already know.",
        icon: "🧠"
    },
    {
        name: "Law of Proximity",
        desc: "Objects that are near, or proximate to each other, tend to be grouped together.",
        icon: "📍"
    },
    {
        name: "Miller’s Law",
        desc: "The average person can only keep 7 (plus or minus 2) items in their working memory.",
        icon: "🔢"
    },
    {
        name: "Occam’s Razor",
        desc: "Among competing hypotheses that predict equally well, the one with the fewest assumptions should be selected.",
        icon: "✂️"
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
            className="relative flex-shrink-0 w-[85vw] md:w-[calc(33.333%-16px)] h-[400px] snap-center"
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
            <div className="absolute inset-0 bg-[#0A0A0A] rounded-[32px] border border-white/10 overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-2xl">

                {/* Subtle Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50" />

                {/* Content Container */}
                <div className="relative h-full p-8 flex flex-col justify-between z-10">
                    <div className="space-y-6">
                        {/* Icon / Number */}
                        <div className="text-sm font-mono text-muted-foreground tracking-widest uppercase">
                            {String(index + 1).padStart(2, '0')} / 08
                        </div>

                        {/* Title */}
                        <h3 className="text-3xl font-bold tracking-tight text-white leading-tight">
                            {law.name}
                        </h3>
                    </div>

                    {/* Description */}
                    <div className="space-y-6">
                        <p className="text-base text-muted-foreground leading-relaxed">
                            {law.desc}
                        </p>

                        {/* Visual Indicator */}
                        <div className="w-8 h-1 bg-white/20 rounded-full" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
