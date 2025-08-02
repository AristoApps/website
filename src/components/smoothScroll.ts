/**
 * Utility functions for smooth scrolling behavior
 */

// Smooth scroll to element
export const scrollToElement = (elementId: string, duration: number = 1000): void => {
  const targetElement = document.getElementById(elementId);
  if (!targetElement) return;

  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  function animation(currentTime: number): void {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  // Easing function for smooth acceleration and deceleration
  function ease(t: number, b: number, c: number, d: number): number {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
};

// Add smooth scroll behavior to all anchor links
export const initSmoothScrolling = (): void => {
  document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const href = link.getAttribute('href');
        if (href === '#') return;
        
        const targetId = href!.substring(1);
        scrollToElement(targetId);
      });
    });
  });
};

// Throttle function to limit execution of events
export const throttle = <T extends (...args: any[]) => any>(
  callback: T, 
  delay: number = 100
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return (...args: Parameters<T>): void => {
    if (timeout === null) {
      timeout = setTimeout(() => {
        callback(...args);
        timeout = null;
      }, delay);
    }
  };
}; 