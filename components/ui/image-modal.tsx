"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  type SpringOptions,
} from "motion/react";

const SPRING_CONFIG = { stiffness: 26.7, damping: 4.1, mass: 0.2 };

interface ImageModalProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  magneticIntensity?: number;
  magneticRange?: number;
}

export function ImageModal({ 
  src, 
  alt, 
  className, 
  style,
  magneticIntensity = 0.3,
  magneticRange = 50
}: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, SPRING_CONFIG);
  const springY = useSpring(y, SPRING_CONFIG);

  useEffect(() => {
    const calculateDistance = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        const absoluteDistance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

        if (isHovered && absoluteDistance <= magneticRange) {
          const scale = 1 - absoluteDistance / magneticRange;
          x.set(distanceX * magneticIntensity * scale);
          y.set(distanceY * magneticIntensity * scale);
        } else {
          x.set(0);
          y.set(0);
        }
      }
    };

    document.addEventListener("mousemove", calculateDistance);

    return () => {
      document.removeEventListener("mousemove", calculateDistance);
    };
  }, [ref, isHovered, magneticIntensity, magneticRange]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <motion.div
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          x: springX,
          y: springY,
          cursor: "pointer",
        }}
        onClick={openModal}
        onKeyDown={(e) => e.key === "Enter" && openModal}
        tabIndex={0}
        role="button"
        aria-label={`Click to enlarge ${alt}`}
      >
        <img
          src={src}
          alt={alt}
          className={className}
          style={style}
        />
      </motion.div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div className="relative bg-white rounded-lg shadow-2xl p-2 max-w-[90vw] max-h-[90vh]">
            <img
              src={src}
              alt={alt}
              className="max-h-[85vh] max-w-full object-contain rounded"
            />
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white rounded-full bg-black/50 w-8 h-8 flex items-center justify-center"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
