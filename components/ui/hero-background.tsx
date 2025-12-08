"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, animate } from "framer-motion";

export function HeroBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Mouse position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Reveal radius size
    const revealSize = useMotionValue(0);

    // Smooth spring animation for the mask movement
    const smoothX = useSpring(mouseX, { damping: 20, stiffness: 200 });
    const smoothY = useSpring(mouseY, { damping: 20, stiffness: 200 });

    // Smooth spring for the reveal size expansion/contraction
    const smoothSize = useSpring(revealSize, { damping: 30, stiffness: 100 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    const handleInteractionStart = () => {
        revealSize.set(300); // Target size
    };

    const handleInteractionEnd = () => {
        revealSize.set(0);
    };

    // Construct the mask image string dynamically
    // We want the mask to be TRANSPARENT at the center (hiding the grayscale layer)
    // and OPAQUE elsewhere (showing the grayscale layer)
    const maskImage = useTransform(
        [smoothX, smoothY, smoothSize],
        ([x, y, size]) => {
            // If size is 0, we want full grayscale (full white mask)
            if (size === 0) return "none";
            return `radial-gradient(circle ${size}px at ${x}px ${y}px, transparent 0%, black 100%)`;
        }
    );

    // WebKit prefix for compatibility
    const webkitMaskImage = maskImage;

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 w-full h-full overflow-hidden bg-black z-0"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleInteractionStart}
            onMouseLeave={handleInteractionEnd}
            onTouchStart={(e) => {
                const touch = e.touches[0];
                const rect = e.currentTarget.getBoundingClientRect();
                mouseX.set(touch.clientX - rect.left);
                mouseY.set(touch.clientY - rect.top);
                handleInteractionStart();
            }}
            onTouchEnd={handleInteractionEnd}
        >
            {/* The Base Video (Full Color) */}
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-60"
            >
                <source src="/joshua_geometric_untitled.mp4" type="video/mp4" />
            </video>

            {/* The Grayscale Overlay */}
            {/* This layer applies grayscale to everything behind it. 
                We mask this layer to "cut a hole" in the grayscale effect. */}
            <motion.div
                className="absolute inset-0 w-full h-full backdrop-grayscale bg-black/20"
                style={{
                    maskImage,
                    WebkitMaskImage: webkitMaskImage
                }}
            />

            {/* Optional: Subtle grain or texture overlay could go here */}
        </div>
    );
}
