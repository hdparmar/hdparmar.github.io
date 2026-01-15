import { useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import {
  createSession,
  updateSessionHeartbeat,
  endSession,
  trackPageView,
  trackButtonClick,
  trackScrollDepth,
} from '@/lib/analytics';

const HEARTBEAT_INTERVAL = 30000; // 30 seconds
const SCROLL_THRESHOLDS = [25, 50, 75, 100];

export const useAnalytics = () => {
  const location = useLocation();
  const scrollThresholdsReached = useRef<Set<number>>(new Set());
  const heartbeatInterval = useRef<ReturnType<typeof setInterval> | null>(null);
  const isInitialized = useRef(false);

  // Initialize session
  useEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;

    // Store session start time
    sessionStorage.setItem('analytics_session_start', Date.now().toString());
    
    // Create session
    createSession();

    // Start heartbeat
    heartbeatInterval.current = setInterval(() => {
      updateSessionHeartbeat();
    }, HEARTBEAT_INTERVAL);

    // Handle page unload
    const handleBeforeUnload = () => {
      endSession();
    };

    // Handle visibility change
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        endSession();
      } else if (document.visibilityState === 'visible') {
        updateSessionHeartbeat();
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (heartbeatInterval.current) {
        clearInterval(heartbeatInterval.current);
      }
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Track page views
  useEffect(() => {
    trackPageView(location.pathname);
    // Reset scroll thresholds on page change
    scrollThresholdsReached.current = new Set();
  }, [location.pathname]);

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollHeight > 0 
        ? Math.round((window.scrollY / scrollHeight) * 100) 
        : 0;

      SCROLL_THRESHOLDS.forEach(threshold => {
        if (scrollPercent >= threshold && !scrollThresholdsReached.current.has(threshold)) {
          scrollThresholdsReached.current.add(threshold);
          trackScrollDepth(threshold);
        }
      });
    };

    // Debounce scroll handler
    let scrollTimeout: ReturnType<typeof setTimeout>;
    const debouncedScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 100);
    };

    window.addEventListener('scroll', debouncedScroll);
    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      clearTimeout(scrollTimeout);
    };
  }, [location.pathname]);

  // Click handler for tracked buttons
  const handleTrackedClick = useCallback((
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const target = event.currentTarget;
    const trackId = target.getAttribute('data-track-id');
    const buttonText = target.textContent || undefined;
    
    if (trackId) {
      trackButtonClick(trackId, buttonText);
    }
  }, []);

  return { handleTrackedClick };
};

export default useAnalytics;
