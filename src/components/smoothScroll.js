/**
 * Utility functions for smooth scrolling behavior
 */

// Smooth scroll to element
export const scrollToElement = (elementId, duration = 1000) => {
  const targetElement = document.getElementById(elementId);
  if (!targetElement) return;

  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  // Easing function for smooth acceleration and deceleration
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
};

// Add smooth scroll behavior to all anchor links
export const initSmoothScrolling = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const href = link.getAttribute('href');
        if (href === '#') return;
        
        const targetId = href.substring(1);
        scrollToElement(targetId);
      });
    });
  });
};

// Throttle function to limit execution of events
export const throttle = (callback, delay = 100) => {
  let timeout = null;
  return (...args) => {
    if (timeout === null) {
      timeout = setTimeout(() => {
        callback.apply(this, args);
        timeout = null;
      }, delay);
    }
  };
};