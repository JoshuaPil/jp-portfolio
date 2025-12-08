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
        <div className="relative w-full py-12">
            {/* Gradient Masks for smooth fade at edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div
                ref={containerRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 md:px-[50vw] pb-12 -mx-4 md:-mx-0 scrollbar-hide"
                style={{
                    scrollPaddingLeft: "50%",
                    scrollPaddingRight: "50%",
                }}
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
    const { scrollXProgress } = useScroll({
        container: containerRef,
        target: cardRef,
        axis: "x",
        offset: ["center end", "center start"],
    });

    // Parallax effect for content
    const parallaxX = useTransform(scrollXProgress, [0, 1], [20, -20]);

    // Scale effect for focus (center)
    // We need to map the progress so that 0.5 (center) is scale 1.1, and edges are 1.0
    // The progress goes from 0 (entering right) to 1 (leaving left). Center is roughly 0.5.
    // However, useScroll with container is tricky for individual elements. 
    // A simpler approach for "focus" in a native scroll container is IntersectionObserver, 
    // but for smooth framer motion mapped to scroll position, we can try a simpler approximation or just hover effects 
    // if strict scroll-linked scaling is too jittery without a virtualizer.
    // Let's try a spring-based scale on hover/focus, and a subtle scroll-linked opacity/scale.

    return (
        <motion.div
            ref={cardRef}
            className="relative flex-shrink-0 w-[85vw] md:w-[400px] h-[300px] snap-center group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 to-slate-950/80 rounded-2xl border border-white/10 backdrop-blur-sm transition-all duration-500 group-hover:border-white/20 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] overflow-hidden">

                {/* Soft Glow Background */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-500/20 transition-colors duration-500" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] group-hover:bg-purple-500/20 transition-colors duration-500" />

                <div className="relative h-full p-8 flex flex-col justify-between z-10">
                    {/* Header with Parallax */}
                    <motion.div style={{ x: parallaxX }} className="space-y-4">
                        <div className="text-4xl">{law.icon}</div>
                        <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-blue-200 transition-colors">
                            {law.name}
                        </h3>
                    </motion.div>

                    {/* Description */}
                    <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-slate-300 transition-colors">
                        {law.desc}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
