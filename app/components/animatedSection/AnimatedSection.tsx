import React from 'react';
import { useScrollReveal } from '@/app/hooks/useScrollReveal';

type AnimationType = 'fade-in' | 'fade-in-left' | 'fade-in-right' | 'scale-in' | 'blur-in' | 'none';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  as?: React.ElementType;
}

export default function AnimatedSection({
  children,
  className,
  animation = 'fade-in',
  delay = 0,
  duration = 700,
  threshold = 0.1,
  as: Component = 'div',
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollReveal({
    threshold,
    delay,
  });

  const getAnimationClass = () => {
    if (animation === 'none') return '';
    return `animate-${animation}`;
  };

  return (
    <Component
      ref={ref}
      className={`${className} ${isVisible ? getAnimationClass() : 'opacity-0'} ${
        animation !== 'none' ? 'transition-all duration-700 ease-out' : ''
      }`}
      style={{
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
        animationFillMode: 'both',
      }}
    >
      {children}
    </Component>
  );
  
}