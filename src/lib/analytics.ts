import { supabase } from "@/integrations/supabase/client";

// Generate a unique session ID
export const generateSessionId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
};

// Get or create session ID from sessionStorage
export const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem('analytics_session_id');
  if (!sessionId) {
    sessionId = generateSessionId();
    sessionStorage.setItem('analytics_session_id', sessionId);
  }
  return sessionId;
};

// Detect device type
export const getDeviceType = (): string => {
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

// Get referrer info
export const getReferrer = (): string => {
  const referrer = document.referrer;
  if (!referrer) return 'direct';
  
  try {
    const url = new URL(referrer);
    return url.hostname;
  } catch {
    return 'unknown';
  }
};

// Call the edge function for analytics operations
const callAnalyticsEdge = async (action: string, data: Record<string, unknown>): Promise<boolean> => {
  try {
    const { data: result, error } = await supabase.functions.invoke('track-analytics', {
      body: { action, data }
    });
    
    if (error) {
      console.error('Analytics edge function error:', error);
      return false;
    }
    
    return result?.success === true;
  } catch (err) {
    console.error('Failed to call analytics edge function:', err);
    return false;
  }
};

// Create a new session
export const createSession = async (): Promise<void> => {
  const sessionId = getSessionId();
  
  await callAnalyticsEdge('create_session', {
    session_id: sessionId,
    device_type: getDeviceType(),
    referrer: getReferrer(),
    user_agent: navigator.userAgent,
    screen_width: window.innerWidth,
    screen_height: window.innerHeight,
    is_active: true,
  });
};

// Update session heartbeat
export const updateSessionHeartbeat = async (): Promise<void> => {
  const sessionId = getSessionId();
  
  await callAnalyticsEdge('update_session', {
    session_id: sessionId,
    last_heartbeat: new Date().toISOString(),
    is_active: true,
  });
};

// End session
export const endSession = async (): Promise<void> => {
  const sessionId = getSessionId();
  const startTime = sessionStorage.getItem('analytics_session_start');
  const durationSeconds = startTime 
    ? Math.floor((Date.now() - parseInt(startTime)) / 1000) 
    : 0;
  
  await callAnalyticsEdge('update_session', {
    session_id: sessionId,
    ended_at: new Date().toISOString(),
    duration_seconds: durationSeconds,
    is_active: false,
  });
};

// Track an event
export const trackEvent = async (
  eventType: string,
  eventName?: string,
  pagePath?: string,
  elementId?: string,
  scrollDepth?: number,
  metadata?: Record<string, string | number | boolean | undefined>
): Promise<void> => {
  const sessionId = getSessionId();
  
  await callAnalyticsEdge('track_event', {
    session_id: sessionId,
    event_type: eventType,
    event_name: eventName,
    page_path: pagePath || window.location.pathname,
    element_id: elementId,
    scroll_depth: scrollDepth,
    metadata: metadata,
  });
};

// Track page view
export const trackPageView = async (pagePath: string): Promise<void> => {
  await trackEvent('page_view', undefined, pagePath);
  
  // Update page count in session via edge function
  const sessionId = getSessionId();
  
  // Note: page_count is tracked in session but we don't need to increment it manually
  // The edge function handles this via the session update
  await callAnalyticsEdge('update_session', {
    session_id: sessionId,
    last_heartbeat: new Date().toISOString(),
  });
};

// Track button click
export const trackButtonClick = async (
  elementId: string,
  buttonText?: string
): Promise<void> => {
  await trackEvent('button_click', buttonText, undefined, elementId, undefined, {
    button_text: buttonText,
  });
};

// Track scroll depth
export const trackScrollDepth = async (depth: number): Promise<void> => {
  await trackEvent('scroll_depth', `scroll_${depth}%`, undefined, undefined, depth);
};
