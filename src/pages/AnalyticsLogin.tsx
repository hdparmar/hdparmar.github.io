import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { BarChart3, Lock } from 'lucide-react';

const AnalyticsLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Check if already logged in
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        // Verify admin status server-side
        await verifyAdminAndRedirect();
      }
    };
    
    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        // Defer verification with setTimeout to avoid auth deadlock
        setTimeout(() => {
          verifyAdminAndRedirect();
        }, 0);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const verifyAdminAndRedirect = async () => {
    try {
      const { data: verifyData, error } = await supabase.functions.invoke('verify-admin');
      
      if (error) {
        console.error('Admin verification error:', error);
        toast({
          title: "Error",
          description: "Failed to verify admin access.",
          variant: "destructive",
        });
        await supabase.auth.signOut();
        return;
      }
      
      if (verifyData?.isAdmin) {
        navigate('/analytics');
      } else {
        toast({
          title: "Access Denied",
          description: "You don't have admin access to view analytics.",
          variant: "destructive",
        });
        await supabase.auth.signOut();
      }
    } catch (err) {
      console.error('Admin verification failed:', err);
      toast({
        title: "Error",
        description: "Failed to verify admin access.",
        variant: "destructive",
      });
      await supabase.auth.signOut();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/analytics`,
          },
        });

        if (error) throw error;

        toast({
          title: "Account created",
          description: "Check your email to confirm your account. Note: You'll need admin access to view analytics.",
        });
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred';
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <Card className="w-full max-w-md p-8 border-2 border-accent/20">
        <div className="flex items-center justify-center gap-3 mb-8">
          <BarChart3 className="h-8 w-8 text-accent" />
          <h1 className="text-2xl font-bold text-foreground">Analytics Dashboard</h1>
        </div>

        <div className="flex items-center gap-2 justify-center mb-6 text-muted-foreground">
          <Lock className="h-4 w-4" />
          <span className="text-sm">Admin access required</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              minLength={6}
            />
          </div>

          <Button
            type="submit"
            className="w-full btn-rustic-hover bg-primary text-primary-foreground"
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            {isSignUp 
              ? 'Already have an account? Sign in' 
              : "Don't have an account? Sign up"}
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-border">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => navigate('/')}
          >
            Back to Portfolio
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default AnalyticsLogin;
