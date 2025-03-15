import { useEffect, useRef, useState } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  delay?: number;
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const { 
    threshold = 0.1,
    root = null,
    rootMargin = '0px',
    delay = 0
  } = options;
  
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          if (delay) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          } else {
            setIsVisible(true);
          }
          // Once visible, no need to observe anymore
          observer.unobserve(currentRef);
        }
      },
      {
        root,
        rootMargin,
        threshold,
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, root, rootMargin, delay]);

  return { ref, isVisible };
}
