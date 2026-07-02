'use client';

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

type FormMode = 'login' | 'signup';

export default function LoginForm() {

  const [mode, setMode] = useState<FormMode>('login');

  // Form states
  const [LdUsername, fnSetUsername] = useState('');

  const [LdEmail, fnSetEmail] = useState('');
  const [LdPassword, fnSetPassword] = useState('');
  const [LdSubmitting, fnSetSubmitting] = useState(false);
  const [LdError, fnSetError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const switchMode = (newMode: FormMode) => {
    setMode(newMode);
    fnSetError(null);
    fnSetPassword('');
  };

  // Note: If you named the initialization function 'fnCheckAuthStatus' 
  // or 'fnRefreshAuthLifecycle' inside your context, make sure it is exported 
  // in your TAuthContextProps so you can call it here. For this boilerplate,
  // we will simply trigger a hard window location reload on success to let the context naturally boot up.

  // async function fnHandleSubmit(e: React.FormEvent) {
  //   e.preventDefault();
  //   fnSetSubmitting(true);
  //   fnSetError(null);

  //   try {
  //     const LdResponse = await fetch('/api/auth/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         usr: LdEmail,
  //         pwd: LdPassword,
  //       }),
  //     });
  //     // console.log("response", LdResponse)
  //     if (!LdResponse.ok) {
  //       const LdErrData = await LdResponse.json();
  //       throw new Error(LdErrData.error || 'Invalid email or password');
  //     }
     
  //     // SUCCESS: The 'sid' cookie has been set in the browser by the Next API proxy.
  //     // Reload or route the user to force the layout Navbar to switch to the Profile dropdown view.
  //     window.location.href = '/';
  //     // window.open("http://localhost:8000/app/helpdesk");

  //   } catch (err: any) {
  //     console.error('Submission processing failure:', err);
  //     fnSetError(err.message || 'An unexpected connection error occurred.');
  //   } finally {
  //     fnSetSubmitting(false);
  //   }
  // }

  async function fnHandleSubmit(e: React.FormEvent) {
    e.preventDefault();
    fnSetSubmitting(true);
    fnSetError(null);

    const targetEndpoint = mode === 'login' ? '/api/auth/login' : '/api/auth/signup';
    
    // Adjusted payload: No pwd sent during sign up
    const payloadBody = mode === 'login' 
      ? { usr: LdEmail, pwd: LdPassword }
      : { username: LdUsername, email: LdEmail };

    try {
      const LdResponse = await fetch(targetEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payloadBody),
      });
      
      if (!LdResponse.ok) {
        const LdErrData = await LdResponse.json();
        throw new Error(LdErrData.error || `Invalid request during ${mode}`);
      }
     
      window.location.href = '/';

    } catch (err: any) {
      console.error('Submission processing failure:', err);
      fnSetError(err.message || 'An unexpected connection error occurred.');
    } finally {
      fnSetSubmitting(false);
    }
  }
  
  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-background">
      <div className="w-full max-w-lg p-8 bg-card text-card-foreground border border-border rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl">
        
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-2xl font-bold text-foreground tracking-tight">
            {mode === 'login' ? 'Welcome Back' : 'Create an Account'}
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            {mode === 'login' ? 'Please enter your details to sign in' : 'Fill out the details below to register'}
          </p>
        </div>
        
        <form onSubmit={fnHandleSubmit} className="flex flex-col gap-5">
          {LdError && (
            <div className="p-3 text-sm rounded-lg bg-destructive/10 text-destructive border border-destructive/20 animate-in fade-in-50 duration-200">
              {LdError}
            </div>
          )}

          {/* Username Field: Only for Sign Up */}
          {mode === 'signup' && (
            <div className="flex flex-col gap-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Username
              </label>
              <input
                type="text"
                required
                value={LdUsername}
                onChange={(e) => fnSetUsername(e.target.value)}
                placeholder="johndoe"
                className="h-11 px-3.5 rounded-lg bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
              />
            </div>
          )}

          {/* Email Field: Shared across both */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Email Address
            </label>
            <input
              type="email"
              required
              value={LdEmail}
              onChange={(e) => fnSetEmail(e.target.value)}
              placeholder="name@company.com"
              className="h-11 px-3.5 rounded-lg bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
            />
          </div>

          {/* Password Field: Only for Login */}
          {mode === 'login' && (
            <div className="flex flex-col gap-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={LdPassword}
                  onChange={(e) => fnSetPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full h-11 pl-3.5 pr-11 rounded-lg bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                />
                
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors focus:outline-none"
                  title={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4 stroke-[2]" />
                  ) : (
                    <Eye className="w-4 h-4 stroke-[2]" />
                  )}
                </button>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={LdSubmitting}
            className="h-11 mt-2 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:opacity-90 active:scale-[0.99] transition-all flex items-center justify-center disabled:opacity-50 shadow-sm"
          >
            {LdSubmitting 
              ? (mode === 'login' ? 'Signing In...' : 'Registering...') 
              : (mode === 'login' ? 'Sign In' : 'Sign Up')}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-muted-foreground border-t border-border pt-4">
          {mode === 'login' ? (
            <p>
              Don't have an account?{' '}
              <button 
                onClick={() => switchMode('signup')}
                className="font-semibold text-primary hover:underline focus:outline-none"
              >
                Sign up below
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button 
                onClick={() => switchMode('login')}
                className="font-semibold text-primary hover:underline focus:outline-none"
              >
                Log in instead
              </button>
            </p>
          )}
        </div>

      </div>
    </div>
  );
}