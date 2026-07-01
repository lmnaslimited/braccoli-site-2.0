'use client';

import React, { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const LFrappeUrl = process.env.NEXT_PUBLIC_FRAPPE_URL;

      // 1. Log directly into Frappe to establish the browser's 'sid' cookie session
      const LLoginResponse = await fetch(`${LFrappeUrl}/api/method/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usr: email, pwd: password }),
      });

      if (!LLoginResponse.ok) {
        throw new Error('Invalid email or password credentials');
      }

      // 2. 🎯 THE SECRET: Now that the browser has Frappe's session cookie, 
      // kick them back to your Check Gateway. It will immediately see the session,
      // run the Authorization Code Flow, and log them into the Next.js app seamlessly!
      window.location.href = '/api/auth/check';

    } catch (err: any) {
      setError(err.message || 'An unexpected authentication fault occurred.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md border border-gray-100">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">Sign In</h2>

        {error && <div className="bg-red-50 text-red-700 text-sm p-3 rounded-md mb-4">{error}</div>}

        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 transition-colors"
          >
            {isLoading ? 'Verifying...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}