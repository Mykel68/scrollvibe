"use client";

import React, { useState, useEffect } from "react";
import "../components/Video.css";

export default function Video() {
    const [cursorStyle, setCursorStyle] = useState({
        top: 0,
        left: 0,
        // transform: "scale(1)",
    });

    const [videoHovered, setVideoHovered] = useState(false);

    const handleMouseMove = (e: any) => {
        const cursorSize = 50;
        setCursorStyle({
            top: `${e.clientY - cursorSize}px`,
            left: `${e.clientX - cursorSize / 2}px`,
            transform: videoHovered ? "scale(3)" : "scale(1)",
        });
    };

    const handleMouseEnterVideo = () => {
        setVideoHovered(true);
        setCursorStyle((prev) => ({ ...prev, transform: "scale(3)" }));
    };

    const handleMouseLeaveVideo = () => {
        setVideoHovered(false);
        setCursorStyle((prev) => ({ ...prev, transform: "scale(1)" }));
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [videoHovered]);

    return (
        <div className="video-container">
            <video
                autoPlay
                muted
                loop
                className="video"
                src="/video/vid.mp4"
                onMouseEnter={handleMouseEnterVideo}
                onMouseLeave={handleMouseLeaveVideo}
            />
            <div
                className={`custom-cursor ${videoHovered ? "hovering-video" : ""}`}
                style={cursorStyle}
            >
                <span className="cursor-text">Play Reel</span>
            </div>
        </div>
    );
}
