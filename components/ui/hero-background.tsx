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
    const smoothSize = useSpring(revealSize, { damping: 40, stiffness: 80 }); // Slower, smoother easing

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    const handleInteractionStart = () => {
        // Expand to roughly 65% of the viewport (estimating ~1000px-1200px radius for typical desktop)
        revealSize.set(1200);
    };

    const handleInteractionEnd = () => {
        revealSize.set(0);
    };

    // Construct the mask image string dynamically
    // The mask defines where the OVERLAY is visible.
    // Transparent = Overlay Hidden (Video Revealed)
    // Black = Overlay Visible (Video Grayscale)
    const maskImage = useTransform(
        [smoothX, smoothY, smoothSize],
        ([x, y, size]) => {
            if (size === 0) return "none"; // Full overlay visible
            // Soft gradient: transparent at center -> black at edge
            // 20% to 100% creates a very soft, atmospheric fade
            return `radial-gradient(circle ${size}px at ${x}px ${y}px, transparent 20%, black 100%)`;
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
            {/* The Base Video (Full Color & Boosted) */}
            {/* We boost brightness/saturation here so the reveal feels "illuminated" */}
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-100 filter brightness-110 saturate-110"
            >
                <source src="/joshua_geometric_untitled.mp4" type="video/mp4" />
            </video>

            {/* The Grayscale Overlay (Default State) */}
            {/* This sits on top. It makes the underlying video look dark and grayscale. */}
            {/* The mask cuts a hole in THIS layer, revealing the bright video below. */}
            <motion.div
                className="absolute inset-0 w-full h-full backdrop-grayscale backdrop-brightness-50 bg-black/40"
                style={{
                    maskImage,
                    WebkitMaskImage: webkitMaskImage
                }}
            />

            {/* Optional: Subtle grain or texture overlay could go here */}
        </div>
    );
}
