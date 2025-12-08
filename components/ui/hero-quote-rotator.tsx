"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const QUOTES = [
    "“Design is not just what it looks like. Design is how it works.”",
    "“The details are not the details. They make the product.”",
    "“Simplicity is the ultimate sophistication.”",
    "“Good design is as little design as possible.”",
    "“People ignore design that ignores people.”",
    "“Design creates culture. Culture shapes values. Values determine the future.”",
    "“Styles come and go. Good design is a language, not a style.”",
    "“Design is thinking made visible.”",
    "“Creativity is intelligence having fun.”",
    "“Great ideas need great execution.”",
    "“Form follows function.”",
    "“Every great design begins with an even better story.”",
    "“Design is the story you tell through the choices you make.”",
    "“The best products feel inevitable once they exist.”",
    "“Clarity is the foundation of every great product.”",
    "“A system is only as strong as the intent behind it.”",
    "“Design to code is the moment when ideas learn to walk.”",
    "“A good product solves a problem. A great product teaches you how to think.”",
    "“Generative tools do not replace creativity. They reveal new paths for it.”",
    "“When the product works, you feel the design long before you notice it.”",
    "“Build experiences that grow stronger every time someone uses them.”",
    "“Precision is not the goal. Meaning is.”",
    "“A designer’s real material is not pixels. It is decisions.”",
    "“Good design removes noise. Great design reveals character.”",
    "“The future of design is a conversation between humans and systems.”",
    "“When everything connects, the experience becomes simple.”",
    "“Design is the confidence to remove what is not needed.”",
    "“Design creates belonging when it helps people feel at home.”",
    "“Design becomes powerful when it moves as fast as your ideas.”",
    "“Simplicity is not the absence of complexity. It is the presence of clarity.”",
    "“The product is the expression of the values behind it.”",
    "“Make the experience obvious. Then make it unforgettable.”",
];

const ROTATION_INTERVAL = 8000; // ms visible time per quote

// Simple fade variants
const quoteVariants: Variants = {
    initial: { opacity: 0 },
    enter: {
        opacity: 1,
        transition: { duration: 0.8, ease: "easeInOut" }
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" }
    },
};

export const HeroQuoteRotator: React.FC = () => {
    const [index, setIndex] = useState(0);

    // Timed rotation
    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex((prev) => (prev + 1) % QUOTES.length);
        }, ROTATION_INTERVAL);

        return () => clearTimeout(timer);
    }, [index]);

    // Early transition on interaction
    const triggerNext = useCallback(() => {
        setIndex((prev) => (prev + 1) % QUOTES.length);
    }, []);

    return (
        <section
            className="relative flex items-center justify-center min-h-[20vh] px-6 py-8 cursor-pointer"
            onMouseEnter={triggerNext}
            onClick={triggerNext}
        >
            {/* Fixed height container to prevent layout shifts */}
            <div className="relative z-10 w-full max-w-4xl h-[100px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.h1
                        key={index}
                        className="text-2xl font-mono text-white text-center leading-relaxed"
                        variants={quoteVariants}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                    >
                        {QUOTES[index]}
                    </motion.h1>
                </AnimatePresence>
            </div>
        </section>
    );
};
