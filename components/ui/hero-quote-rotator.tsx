"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

type Quote = {
    text: string;
    author: string;
};

const QUOTES: Quote[] = [
    { text: "Design Therapy for Systems", author: "Not Sigmund Freud" },
    {
        text: "Design is not just what it looks like. Design is how it works.",
        author: "Steve Jobs",
    },
    {
        text: "The details are not the details. They make the product.",
        author: "Charles Eames",
    },
    {
        text: "Simplicity is the ultimate sophistication.",
        author: "Leonardo da Vinci",
    },
    {
        text: "Good design is as little design as possible.",
        author: "Dieter Rams",
    },
    {
        text: "People ignore design that ignores people.",
        author: "Frank Chimero",
    },
    {
        text: "Design creates culture. Culture shapes values. Values determine the future.",
        author: "Robert L. Peters",
    },
    {
        text: "Styles come and go. Good design is a language, not a style.",
        author: "Massimo Vignelli",
    },
];

const ROTATION_INTERVAL = 8000; // ms visible time per quote

// Text variants for the main quote line
const quoteVariants: Variants = {
    initial: { opacity: 0, scale: 0.95 },
    enter: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
        opacity: 0,
        scale: 0.97,
        transition: { duration: 0.35, ease: "easeIn" },
    },
};

// Attribution variants
const authorVariants: Variants = {
    initial: { opacity: 0, y: 8 },
    enter: {
        opacity: 1,
        y: 0,
        transition: { delay: 0.25, duration: 0.4, ease: "easeOut" },
    },
    exit: {
        opacity: 0,
        y: 4,
        transition: { duration: 0.25, ease: "easeIn" },
    },
};

// Particle variants
// Idea: particles start clustered, then drift slightly while visible, then spread on exit
const particleVariants: Variants = {
    initial: {
        opacity: 0,
        scale: 0.6,
    },
    enter: (seed: number) => ({
        opacity: 1,
        scale: 1,
        x: (Math.random() - 0.5) * 80,
        y: (Math.random() - 0.5) * 40,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            delay: 0.1 + (seed % 10) * 0.01,
        },
    }),
    exit: () => ({
        opacity: 0,
        scale: 1.6,
        x: (Math.random() - 0.5) * 260,
        y: (Math.random() - 0.5) * 160,
        transition: {
            duration: 0.5,
            ease: "easeIn",
        },
    }),
};

const PARTICLE_COUNT = 42;

export const HeroQuoteRotator: React.FC = () => {
    const [index, setIndex] = useState(0);
    const [cycleKey, setCycleKey] = useState(0); // forces AnimatePresence key change

    const currentQuote = QUOTES[index];

    const particles = useMemo(
        () => Array.from({ length: PARTICLE_COUNT }, (_, i) => i),
        []
    );

    // Timed rotation
    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex((prev) => (prev + 1) % QUOTES.length);
            setCycleKey((k) => k + 1);
        }, ROTATION_INTERVAL);

        return () => clearTimeout(timer);
    }, [index]);

    // Early transition on interaction
    const triggerNext = useCallback(() => {
        setIndex((prev) => (prev + 1) % QUOTES.length);
        setCycleKey((k) => k + 1);
    }, []);

    return (
        <section
            className="relative flex items-center justify-center min-h-[40vh] px-6 py-16 cursor-pointer"
            onClick={triggerNext}
        >
            {/* Particle field behind text */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={cycleKey}
                        className="relative w-[480px] h-[220px] max-w-full"
                    >
                        {particles.map((id) => (
                            <motion.div
                                key={id}
                                custom={id}
                                variants={particleVariants}
                                initial="initial"
                                animate="enter"
                                exit="exit"
                                className="absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-white/40"
                            />
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Quote and author */}
            {/* Fixed height container to prevent layout shifts */}
            <div className="relative z-10 w-full max-w-6xl h-[160px] flex items-center justify-center">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={cycleKey}
                        className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        variants={quoteVariants}
                    >
                        <motion.h1
                            className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white text-center whitespace-nowrap"
                            variants={quoteVariants}
                        >
                            {currentQuote.text}
                        </motion.h1>

                        <motion.span
                            className="text-sm md:text-base text-white/70 italic"
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            variants={authorVariants}
                        >
                            {currentQuote.author}
                        </motion.span>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};
