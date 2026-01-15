import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BarChart3, 
  Users, 
  Eye, 
  Clock, 
  MousePointerClick, 
  ArrowDown, 
  Monitor,
  Smartphone,
  Tablet,
  LogOut,
  RefreshCw,
  Globe
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AnalyticsData {
  totalSessions: number;
  totalPageViews: number;
  avgSessionDuration: number;
  sessionDistribution: Record<string, number>;
  buttonClicks: Record<string, number>;
  topPages: Array<{ path: string; count: number }>;
  avgScrollDepth: number;
  deviceBreakdown: Record<string, number>;
  trafficSources: Record<string, number>;
}

const Analytics = () => {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate('/analytics/login');
        return;
      }

      // Verify admin status server-side via edge function
      try {
        const { data: verifyData, error } = await supabase.functions.invoke('verify-admin');
        
        if (error || !verifyData?.isAdmin) {
          toast({
            title: "Access Denied",
            description: "You don't have admin access to view analytics.",
            variant: "destructive",
          });
          navigate('/analytics/login');
          return;
        }

        setIsAuthorized(true);
        fetchAnalytics();
      } catch (err) {
        console.error('Admin verification failed:', err);
        toast({
          title: "Error",
          description: "Failed to verify admin access.",
          variant: "destructive",
        });
        navigate('/analytics/login');
      }
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_OUT') {
        navigate('/analytics/login');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, toast]);

  const fetchAnalytics = async () => {
    setIsLoading(true);
    try {
      // Fetch sessions
      const { data: sessions } = await supabase
        .from('analytics_sessions')
        .select('*');

      // Fetch events
      const { data: events } = await supabase
        .from('analytics_events')
        .select('*');

      if (!sessions || !events) {
        setData(null);
        return;
      }

      // Calculate metrics
      const totalSessions = sessions.length;
      const totalPageViews = events.filter(e => e.event_type === 'page_view').length;
      
      // Average session duration
      const completedSessions = sessions.filter(s => s.duration_seconds && s.duration_seconds > 0);
      const avgSessionDuration = completedSessions.length > 0
        ? completedSessions.reduce((acc, s) => acc + (s.duration_seconds || 0), 0) / completedSessions.length
        : 0;

      // Session duration distribution
      const sessionDistribution = {
        '0-10s': 0,
        '10-30s': 0,
        '30s-1min': 0,
        '1-5min': 0,
        '5min+': 0,
      };
      
      completedSessions.forEach(s => {
        const duration = s.duration_seconds || 0;
        if (duration <= 10) sessionDistribution['0-10s']++;
        else if (duration <= 30) sessionDistribution['10-30s']++;
        else if (duration <= 60) sessionDistribution['30s-1min']++;
        else if (duration <= 300) sessionDistribution['1-5min']++;
        else sessionDistribution['5min+']++;
      });

      // Button clicks
      const buttonClicks: Record<string, number> = {};
      events
        .filter(e => e.event_type === 'button_click')
        .forEach(e => {
          const id = e.element_id || 'unknown';
          buttonClicks[id] = (buttonClicks[id] || 0) + 1;
        });

      // Top pages
      const pageCounts: Record<string, number> = {};
      events
        .filter(e => e.event_type === 'page_view')
        .forEach(e => {
          const path = e.page_path || '/';
          pageCounts[path] = (pageCounts[path] || 0) + 1;
        });
      const topPages = Object.entries(pageCounts)
        .map(([path, count]) => ({ path, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

      // Average scroll depth
      const scrollEvents = events.filter(e => e.event_type === 'scroll_depth');
      const avgScrollDepth = scrollEvents.length > 0
        ? scrollEvents.reduce((acc, e) => acc + (e.scroll_depth || 0), 0) / scrollEvents.length
        : 0;

      // Device breakdown
      const deviceBreakdown: Record<string, number> = {
        desktop: 0,
        tablet: 0,
        mobile: 0,
      };
      sessions.forEach(s => {
        const device = s.device_type || 'unknown';
        if (device in deviceBreakdown) {
          deviceBreakdown[device]++;
        }
      });

      // Traffic sources
      const trafficSources: Record<string, number> = {};
      sessions.forEach(s => {
        const source = s.referrer || 'direct';
        trafficSources[source] = (trafficSources[source] || 0) + 1;
      });

      setData({
        totalSessions,
        totalPageViews,
        avgSessionDuration,
        sessionDistribution,
        buttonClicks,
        topPages,
        avgScrollDepth,
        deviceBreakdown,
        trafficSources,
      });
    } catch (err) {
      console.error('Failed to fetch analytics:', err);
      toast({
        title: "Error",
        description: "Failed to fetch analytics data.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/analytics/login');
  };

  const formatDuration = (seconds: number): string => {
    if (seconds < 60) return `${Math.round(seconds)}s`;
    if (seconds < 3600) return `${Math.round(seconds / 60)}m`;
    return `${Math.round(seconds / 3600)}h`;
  };

  if (!isAuthorized) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <BarChart3 className="h-8 w-8 text-accent" />
            <h1 className="text-2xl font-bold text-foreground">Analytics Dashboard</h1>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={fetchAnalytics}
              disabled={isLoading}
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate('/')}
            >
              Back to Portfolio
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleSignOut}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <RefreshCw className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : !data ? (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground">No analytics data available yet.</p>
          </Card>
        ) : (
          <div className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="p-6 border-2 border-accent/20">
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Total Sessions</p>
                    <p className="text-3xl font-bold text-foreground">{data.totalSessions}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-accent/20">
                <div className="flex items-center gap-3">
                  <Eye className="h-8 w-8 text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Page Views</p>
                    <p className="text-3xl font-bold text-foreground">{data.totalPageViews}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-accent/20">
                <div className="flex items-center gap-3">
                  <Clock className="h-8 w-8 text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Avg. Session Duration</p>
                    <p className="text-3xl font-bold text-foreground">
                      {formatDuration(data.avgSessionDuration)}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-accent/20">
                <div className="flex items-center gap-3">
                  <ArrowDown className="h-8 w-8 text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Avg. Scroll Depth</p>
                    <p className="text-3xl font-bold text-foreground">
                      {Math.round(data.avgScrollDepth)}%
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Session Duration Distribution */}
            <Card className="p-6 border-2 border-accent/20">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent" />
                Session Duration Distribution
              </h3>
              <div className="grid grid-cols-5 gap-4">
                {Object.entries(data.sessionDistribution).map(([range, count]) => (
                  <div key={range} className="text-center">
                    <div className="h-24 bg-muted rounded-lg flex items-end justify-center p-2">
                      <div
                        className="bg-accent rounded w-full transition-all"
                        style={{
                          height: `${Math.max(10, (count / Math.max(...Object.values(data.sessionDistribution))) * 100)}%`,
                        }}
                      />
                    </div>
                    <p className="text-sm font-medium text-foreground mt-2">{count}</p>
                    <p className="text-xs text-muted-foreground">{range}</p>
                  </div>
                ))}
              </div>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Button Clicks */}
              <Card className="p-6 border-2 border-accent/20">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <MousePointerClick className="h-5 w-5 text-accent" />
                  Button Clicks
                </h3>
                {Object.keys(data.buttonClicks).length === 0 ? (
                  <p className="text-muted-foreground text-sm">No button clicks recorded yet.</p>
                ) : (
                  <div className="space-y-3">
                    {Object.entries(data.buttonClicks)
                      .sort((a, b) => b[1] - a[1])
                      .map(([id, count]) => (
                        <div key={id} className="flex items-center justify-between">
                          <span className="text-sm text-foreground truncate max-w-[200px]">
                            {id}
                          </span>
                          <span className="text-sm font-bold text-accent">{count}</span>
                        </div>
                      ))}
                  </div>
                )}
              </Card>

              {/* Top Pages */}
              <Card className="p-6 border-2 border-accent/20">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Eye className="h-5 w-5 text-accent" />
                  Top Pages
                </h3>
                {data.topPages.length === 0 ? (
                  <p className="text-muted-foreground text-sm">No page views recorded yet.</p>
                ) : (
                  <div className="space-y-3">
                    {data.topPages.map(({ path, count }) => (
                      <div key={path} className="flex items-center justify-between">
                        <span className="text-sm text-foreground">{path}</span>
                        <span className="text-sm font-bold text-accent">{count}</span>
                      </div>
                    ))}
                  </div>
                )}
              </Card>

              {/* Device Breakdown */}
              <Card className="p-6 border-2 border-accent/20">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Monitor className="h-5 w-5 text-accent" />
                  Device Breakdown
                </h3>
                <div className="space-y-3">
                  {Object.entries(data.deviceBreakdown).map(([device, count]) => {
                    const Icon = device === 'mobile' ? Smartphone : device === 'tablet' ? Tablet : Monitor;
                    const percentage = data.totalSessions > 0 
                      ? Math.round((count / data.totalSessions) * 100) 
                      : 0;
                    return (
                      <div key={device} className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-muted-foreground" />
                        <div className="flex-1">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm capitalize text-foreground">{device}</span>
                            <span className="text-sm text-muted-foreground">{percentage}%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-accent rounded-full transition-all"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                        </div>
                        <span className="text-sm font-bold text-accent w-8 text-right">{count}</span>
                      </div>
                    );
                  })}
                </div>
              </Card>

              {/* Traffic Sources */}
              <Card className="p-6 border-2 border-accent/20">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-accent" />
                  Traffic Sources
                </h3>
                {Object.keys(data.trafficSources).length === 0 ? (
                  <p className="text-muted-foreground text-sm">No traffic sources recorded yet.</p>
                ) : (
                  <div className="space-y-3">
                    {Object.entries(data.trafficSources)
                      .sort((a, b) => b[1] - a[1])
                      .slice(0, 5)
                      .map(([source, count]) => (
                        <div key={source} className="flex items-center justify-between">
                          <span className="text-sm text-foreground truncate max-w-[200px]">
                            {source}
                          </span>
                          <span className="text-sm font-bold text-accent">{count}</span>
                        </div>
                      ))}
                  </div>
                )}
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Analytics;
