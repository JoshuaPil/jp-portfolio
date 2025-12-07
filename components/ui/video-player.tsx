"use client";

import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
    src: string;
    className?: string;
    autoPlay?: boolean;
    muted?: boolean;
    loop?: boolean;
    controls?: boolean;
}

export function VideoPlayer({
    src,
    className,
    autoPlay = true,
    muted = true,
    loop = true,
    controls = false,
}: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current && autoPlay) {
            videoRef.current.play().catch((error) => {
                console.log("Autoplay prevented:", error);
            });
        }
    }, [autoPlay]);

    return (
        <div className={cn("relative overflow-hidden rounded-lg bg-muted", className)}>
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src={src}
                autoPlay={autoPlay}
                muted={muted}
                loop={loop}
                playsInline
                controls={controls}
            />
        </div>
    );
}
