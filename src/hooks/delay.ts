// src/hooks/useDelayedRender.ts
import { useState, useEffect } from 'react';

const useDelayedRender = (delay: number): boolean => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return shouldRender;
};

export default useDelayedRender;