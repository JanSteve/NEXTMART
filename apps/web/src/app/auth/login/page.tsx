'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { toast } from '@/components/ui/Toast';
import { signInWithGoogle } from '@/lib/firebase';
import useAuthStore from '@/store/auth';
import useLanguageStore from '@/store/language';
import {
  Mail,
  Lock,
  Phone,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get('redirect') || '/account';

  const { login } = useAuthStore();
  const { t } = useLanguageStore();

  const [authMethod, setAuthMethod] = useState<'google' | 'phone' | 'email'>('google');
  const [loading, setLoading] = useState(false);

  // Email state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Phone state
  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [resendTimer, setResendTimer] = useState(30);

  // Handle Firebase Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const user = await signInWithGoogle();
      login(
        {
          id: user.id,
          name: user.name,
          firstName: user.name.split(' ')[0],
          lastName: user.name.split(' ').slice(1).join(' '),
          email: user.email,
          avatar: user.avatar,
          role: 'CUSTOMER',
        },
        user.token
      );

      toast({
        type: 'success',
        title: 'Welcome back!',
        message: `Signed in as ${user.name}`,
      });
      router.push(redirectUrl);
    } catch (err: any) {
      toast({
        type: 'error',
        title: 'Authentication Failed',
        message: err?.message || 'Could not complete Google Sign In',
      });
    } finally {
      setLoading(false);
    }
  };

  // Handle Email Login
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({ type: 'error', title: 'Error', message: 'Please enter both email and password' });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      login(
        {
          id: 'user-001',
          name: 'R. Jan Steve Daniel',
          firstName: 'Jan Steve',
          lastName: 'Daniel',
          email: email,
          phone: '+91 98765 43210',
          role: 'CUSTOMER',
        },
        'token-jwt-mock-123'
      );
      toast({
        type: 'success',
        title: 'Login Successful',
        message: 'Welcome back to NexMart!',
      });
      router.push(redirectUrl);
      setLoading(false);
    }, 800);
  };

  // Handle Phone OTP
  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(phone)) {
      toast({ type: 'error', title: 'Invalid Phone', message: 'Please enter a valid 10-digit mobile number' });
      return;
    }

    setOtpSent(true);
    toast({
      type: 'success',
      title: 'OTP Sent',
      message: `A 6-digit verification code was sent to +91 ${phone} (Demo Code: 123456)`,
    });
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredCode = otp.join('');
    if (enteredCode.length < 6) {
      toast({ type: 'error', title: 'Incomplete OTP', message: 'Please enter all 6 digits' });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      login(
        {
          id: 'user-phone-001',
          name: 'Jan Steve Daniel',
          firstName: 'Jan Steve',
          lastName: 'Daniel',
          email: 'jansteve@nexmart.in',
          phone: `+91 ${phone}`,
          role: 'CUSTOMER',
        },
        'token-phone-123'
      );
      toast({
        type: 'success',
        title: 'Verified & Logged In',
        message: 'Welcome to your NexMart account!',
      });
      router.push(redirectUrl);
      setLoading(false);
    }, 600);
  };

  const handleOtpChange = (index: number, val: string) => {
    if (val.length > 1) val = val[val.length - 1];
    const newOtp = [...otp];
    newOtp[index] = val;
    setOtp(newOtp);

    // Auto-focus next input
    if (val && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      nextInput?.focus();
    }
  };

  return (
    <div className="flex min-h-[85vh] items-center justify-center bg-neutral-50 px-4 py-12">
      <div className="w-full max-w-md">
        {/* Card Header */}
        <div className="rounded-2xl border border-neutral-100 bg-white p-8 shadow-card animate-fade-in">
          <div className="mb-6 text-center">
            <Link href="/" className="inline-block font-display">
              <span className="text-3xl font-extrabold tracking-tight">
                <span className="text-gradient">Nex</span>
                <span className="text-neutral-900">Mart</span>
              </span>
            </Link>
            <h1 className="mt-3 font-display text-2xl font-bold text-neutral-900">
              Welcome Back
            </h1>
            <p className="mt-1 text-xs text-neutral-500">
              Sign in to track orders, manage addresses, and access NexMart Plus
            </p>
          </div>

          {/* Primary Action: Google Sign In via Firebase */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-neutral-300 bg-white px-4 py-3.5 text-sm font-bold text-neutral-800 shadow-sm transition-all hover:border-neutral-400 hover:bg-neutral-50 hover:shadow disabled:opacity-50"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>
            <span>Continue with Google</span>
          </button>

          <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-200" />
            </div>
            <span className="relative bg-white px-3 text-xs font-bold uppercase text-neutral-400">
              Or sign in with
            </span>
          </div>

          {/* Tab Selector: Phone OTP vs Email */}
          <div className="mb-6 flex rounded-xl border border-neutral-200 bg-neutral-50 p-1">
            <button
              type="button"
              onClick={() => setAuthMethod('phone')}
              className={`flex-1 rounded-lg py-2 text-xs font-bold transition-all ${
                authMethod === 'phone'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              📱 Mobile OTP
            </button>
            <button
              type="button"
              onClick={() => setAuthMethod('email')}
              className={`flex-1 rounded-lg py-2 text-xs font-bold transition-all ${
                authMethod === 'email'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              ✉️ Email &amp; Password
            </button>
          </div>

          {/* ── METHOD: PHONE OTP ── */}
          {authMethod === 'phone' && (
            <div className="space-y-4">
              {!otpSent ? (
                <form onSubmit={handleSendOtp} className="space-y-4">
                  <div>
                    <label className="mb-1 block text-xs font-bold text-neutral-700">
                      Mobile Number
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-neutral-500">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                        placeholder="9876543210"
                        maxLength={10}
                        className="w-full rounded-lg border border-neutral-300 bg-white py-2.5 pl-12 pr-3 text-sm font-mono tracking-wider focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                  <Button type="submit" size="lg" className="w-full font-bold shadow-md">
                    Send Verification OTP →
                  </Button>
                </form>
              ) : (
                <form onSubmit={handleVerifyOtp} className="space-y-4 animate-fade-in">
                  <div className="text-center">
                    <p className="text-xs text-neutral-500">
                      Enter 6-digit code sent to <strong>+91 {phone}</strong>
                    </p>
                    <button
                      type="button"
                      onClick={() => setOtpSent(false)}
                      className="mt-1 text-[11px] font-bold text-primary-600 hover:underline"
                    >
                      Change Number
                    </button>
                  </div>

                  <div className="flex justify-center gap-2">
                    {otp.map((digit, idx) => (
                      <input
                        key={idx}
                        id={`otp-input-${idx}`}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(idx, e.target.value)}
                        className="h-12 w-11 rounded-lg border-2 border-neutral-300 text-center font-mono text-lg font-bold text-neutral-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                      />
                    ))}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    isLoading={loading}
                    className="w-full font-bold shadow-md"
                  >
                    Verify &amp; Sign In
                  </Button>
                  <p className="text-center text-[11px] text-neutral-400">
                    Demo OTP: <strong className="font-mono text-neutral-700">123456</strong>
                  </p>
                </form>
              )}
            </div>
          )}

          {/* ── METHOD: EMAIL & PASSWORD ── */}
          {authMethod === 'email' && (
            <form onSubmit={handleEmailSubmit} className="space-y-4 animate-fade-in">
              <div>
                <label className="mb-1 block text-xs font-bold text-neutral-700">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="janstevedaniel@gmail.com"
                    className="w-full rounded-lg border border-neutral-300 bg-white py-2.5 pl-9 pr-3 text-sm focus:border-primary-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <div className="mb-1 flex items-center justify-between">
                  <label className="text-xs font-bold text-neutral-700">Password</label>
                  <a href="#" className="text-[11px] font-bold text-primary-600 hover:underline">
                    Forgot Password?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-lg border border-neutral-300 bg-white py-2.5 pl-9 pr-3 text-sm focus:border-primary-500 focus:outline-none"
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                isLoading={loading}
                className="w-full font-bold shadow-md"
              >
                Sign In to NexMart
              </Button>
            </form>
          )}

          {/* Demo One-Click Account */}
          <div className="mt-6 rounded-xl border border-neutral-200 bg-neutral-50/80 p-3 text-center">
            <p className="text-[11px] font-bold text-neutral-700">
              ⚡ Quick 1-Click Demo Login
            </p>
            <button
              type="button"
              onClick={() => {
                login(
                  {
                    id: 'user-001',
                    name: 'R. Jan Steve Daniel',
                    firstName: 'Jan Steve',
                    lastName: 'Daniel',
                    email: 'janstevedaniel@gmail.com',
                    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
                    role: 'CUSTOMER',
                  },
                  'token-demo-123'
                );
                toast({ type: 'success', title: 'Logged in as Jan Steve Daniel' });
                router.push(redirectUrl);
              }}
              className="mt-1.5 text-xs font-bold text-primary-600 underline hover:text-primary-700"
            >
              Sign In as Jan Steve Daniel (Vadodara)
            </button>
          </div>

          <div className="mt-6 text-center text-xs text-neutral-500">
            Don&apos;t have an account?{' '}
            <Link
              href="/auth/register"
              className="font-bold text-primary-600 hover:text-primary-700 hover:underline"
            >
              Create Account
            </Link>
          </div>
        </div>

        {/* Security badges */}
        <div className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-neutral-400">
          <ShieldCheck className="h-4 w-4 text-success-500" />
          <span>256-bit SSL Encrypted &amp; Firebase Secured</span>
        </div>
      </div>
    </div>
  );
}