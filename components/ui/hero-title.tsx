"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation, useMotionValue, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroTitleProps {
    text: string;
    className?: string;
}

export function HeroTitle({ text, className }: HeroTitleProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    // Mouse position for shader effects
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth mouse for glow
    const smoothX = useSpring(mouseX, { damping: 20, stiffness: 200 });
    const smoothY = useSpring(mouseY, { damping: 20, stiffness: 200 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setMousePosition({ x, y });
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    // Split text into words and characters
    const words = text.split(" ");

    return (
        <div
            ref={containerRef}
            className={cn("relative inline-block cursor-default select-none py-4", className)}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Particle Field (Background) */}
            <ParticleField mouseX={smoothX} mouseY={smoothY} isHovered={isHovered} />

            {/* Text Layer */}
            <div className="relative z-10 flex flex-wrap justify-center gap-x-[0.3em] gap-y-2">
                {words.map((word, wordIndex) => (
                    <span key={wordIndex} className="whitespace-nowrap flex">
                        {word.split("").map((char, charIndex) => (
                            <InteractiveChar
                                key={`${wordIndex}-${charIndex}`}
                                char={char}
                                mouseX={smoothX}
                                mouseY={smoothY}
                                containerRef={containerRef}
                            />
                        ))}
                    </span>
                ))}
            </div>

            {/* Glow Bloom / Refractive Overlay */}
            <motion.div
                className="absolute inset-0 pointer-events-none z-20 mix-blend-overlay"
                style={{
                    background: useTransform(
                        [smoothX, smoothY],
                        ([x, y]) => `radial-gradient(circle 150px at ${x}px ${y}px, rgba(255,255,255,0.15), transparent 80%)`
                    ),
                    opacity: isHovered ? 1 : 0,
                }}
            />
        </div>
    );
}

function ParticleField({ mouseX, mouseY, isHovered }: { mouseX: any; mouseY: any; isHovered: boolean }) {
    // Generate static particles
    const particles = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p) => (
                <Particle
                    key={p.id}
                    initialX={p.x}
                    initialY={p.y}
                    size={p.size}
                    mouseX={mouseX}
                    mouseY={mouseY}
                    isHovered={isHovered}
                />
            ))}
        </div>
    );
}

function Particle({ initialX, initialY, size, mouseX, mouseY, isHovered }: any) {
    const ref = useRef<HTMLDivElement>(null);

    // Simple displacement logic would go here, 
    // but for performance in this specific setup we'll use a simpler float animation
    // combined with a subtle react-to-mouse if possible, or just ambient motion.

    return (
        <motion.div
            ref={ref}
            className="absolute rounded-full bg-white/10"
            style={{
                left: `${initialX}%`,
                top: `${initialY}%`,
                width: size,
                height: size,
            }}
            animate={{
                y: [0, -10, 0],
                opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
            }}
        />
    );
}

function InteractiveChar({ char, mouseX, mouseY, containerRef }: { char: string; mouseX: any; mouseY: any; containerRef: React.RefObject<HTMLDivElement | null> }) {
    const ref = useRef<HTMLSpanElement>(null);
    const [distance, setDistance] = useState(1000);

    // Update distance for ripple effect
    useTransform([mouseX, mouseY], ([x, y]: number[]) => {
        if (!ref.current || !containerRef.current) return;
        const rect = ref.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();

        const charX = rect.left - containerRect.left + rect.width / 2;
        const charY = rect.top - containerRect.top + rect.height / 2;

        const d = Math.sqrt(Math.pow(x - charX, 2) + Math.pow(y - charY, 2));
        setDistance(d);
    });

    // Calculate effects based on distance
    // Closer = more displacement/glow
    const isNear = distance < 100;

    return (
        <motion.span
            ref={ref}
            className="relative inline-block transition-colors duration-200"
            style={{
                textShadow: isNear ? "0 0 8px rgba(255,255,255,0.5)" : "none",
                color: isNear ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.8)", // Slight brighten on hover
            }}
            whileHover={{
                scale: 1.1,
                y: -2,
                transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
        >
            {char}
        </motion.span>
    );
}
