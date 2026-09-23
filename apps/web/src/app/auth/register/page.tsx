"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import useAuthStore from "@/store/auth";
import { toast } from "@/components/ui/Toast";
import { signInWithGoogle } from "@/lib/firebase";
import { Check, ShieldCheck, Sparkles, Phone, Mail, ArrowRight } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const { login } = useAuthStore();

  const [method, setMethod] = useState<"email" | "phone">("email");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  // Password strength logic
  const getPasswordStrength = () => {
    if (!password) return { level: 0, label: "None", color: "bg-neutral-200" };
    if (password.length < 6) return { level: 1, label: "Weak", color: "bg-error-500 text-error-600" };
    if (password.length < 10) return { level: 2, label: "Good", color: "bg-accent-500 text-accent-600" };
    return { level: 3, label: "Strong", color: "bg-success-500 text-success-600" };
  };

  const strength = getPasswordStrength();

  const handleGoogleSignup = async () => {
    setGoogleLoading(true);
    try {
      const user = await signInWithGoogle();
      login(
        {
          id: user.id,
          name: user.name,
          firstName: user.name.split(" ")[0],
          lastName: user.name.split(" ").slice(1).join(" "),
          email: user.email,
          role: "customer",
          avatar: user.avatar,
        },
        user.token
      );
      toast({
        type: "success",
        title: `Welcome to NexMart, ${user.name.split(" ")[0]}!`,
        message: "Your account has been created via Google Sign-In.",
      });
      router.push("/");
    } catch (err) {
      toast({
        type: "error",
        title: "Registration Failed",
        message: "Could not complete Google Sign-in. Please try standard registration.",
      });
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleEmailRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast({
        type: "error",
        title: "Passwords Don't Match",
        message: "Please ensure both password fields match.",
      });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const fullName = `${firstName || "Jan"} ${lastName || "User"}`.trim();
      login(
        {
          id: `usr-${Date.now()}`,
          name: fullName,
          firstName: firstName || "Jan",
          lastName: lastName || "User",
          email: email || "customer@nexmart.in",
          phone: phone || "+91 98765 43210",
          role: "customer",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
        },
        `mock-jwt-token-${Date.now()}`
      );
      setLoading(false);
      toast({
        type: "success",
        title: "Welcome to NexMart!",
        message: "Your account was successfully registered.",
      });
      router.push("/");
    }, 600);
  };

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      toast({
        type: "error",
        title: "Invalid Phone Number",
        message: "Please enter a valid 10-digit mobile number.",
      });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setOtpSent(true);
      setLoading(false);
      toast({
        type: "info",
        title: "OTP Sent",
        message: "Your 6-digit registration OTP is 123456 (demo code).",
      });
    }, 700);
  };

  const handleVerifyOtp = () => {
    const code = otp.join("");
    if (code.length < 6) {
      toast({
        type: "error",
        title: "Incomplete Code",
        message: "Please enter all 6 digits.",
      });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      login(
        {
          id: `user-phone-${Date.now()}`,
          name: firstName ? `${firstName} ${lastName}` : "NexMart Shopper",
          firstName: firstName || "Shopper",
          lastName: lastName || "",
          email: `${phone.replace(/[^0-9]/g, "")}@phone.nexmart.in`,
          phone: phone,
          role: "customer",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
        },
        `otp-jwt-token-${Date.now()}`
      );
      setLoading(false);
      toast({
        type: "success",
        title: "Account Created!",
        message: "Welcome to NexMart Vadodara community.",
      });
      router.push("/");
    }, 600);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-bl from-primary-50/40 via-white to-neutral-50">
      <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-neutral-100/80">
        {/* Header */}
        <div className="text-center mb-6">
          <Link href="/" className="inline-block mb-3 transition hover:scale-105">
            <span className="font-display text-3xl font-black tracking-tight text-primary-600">Nex</span>
            <span className="font-display text-3xl font-black tracking-tight text-neutral-900">Mart</span>
          </Link>
          <h2 className="text-2xl font-display font-bold text-neutral-900">Create your account</h2>
          <p className="mt-1 text-sm text-neutral-500">
            Join thousands of smart shoppers in Vadodara & across India
          </p>
        </div>

        {/* Google Signup Button */}
        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={handleGoogleSignup}
          disabled={googleLoading}
          className="w-full flex items-center justify-center gap-3 border-neutral-200 hover:bg-neutral-50 shadow-sm font-semibold text-neutral-700 py-3.5 rounded-xl mb-5 transition active:scale-[0.99]"
        >
          <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24">
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
          <span>{googleLoading ? "Connecting to Google..." : "Sign up with Google"}</span>
        </Button>

        {/* Divider */}
        <div className="relative flex py-2 items-center mb-5">
          <div className="flex-grow border-t border-neutral-200"></div>
          <span className="flex-shrink mx-4 text-xs font-semibold uppercase tracking-wider text-neutral-400">
            or register with
          </span>
          <div className="flex-grow border-t border-neutral-200"></div>
        </div>

        {/* Method Switcher */}
        <div className="grid grid-cols-2 p-1 bg-neutral-100 rounded-xl mb-6 text-sm font-semibold text-neutral-600">
          <button
            type="button"
            onClick={() => setMethod("email")}
            className={`py-2 rounded-lg flex items-center justify-center gap-1.5 transition ${
              method === "email" ? "bg-white text-primary-600 shadow-sm" : "hover:text-neutral-900"
            }`}
          >
            <Mail className="w-4 h-4" /> Email
          </button>
          <button
            type="button"
            onClick={() => setMethod("phone")}
            className={`py-2 rounded-lg flex items-center justify-center gap-1.5 transition ${
              method === "phone" ? "bg-white text-primary-600 shadow-sm" : "hover:text-neutral-900"
            }`}
          >
            <Phone className="w-4 h-4" /> Mobile OTP
          </button>
        </div>

        {/* Method 1: Email & Password */}
        {method === "email" && (
          <form className="space-y-4" onSubmit={handleEmailRegister}>
            <div className="grid grid-cols-2 gap-3">
              <Input
                label="First Name"
                placeholder="Jan Steve"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="bg-neutral-50 focus:bg-white"
                required
              />
              <Input
                label="Last Name"
                placeholder="Daniel"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="bg-neutral-50 focus:bg-white"
                required
              />
            </div>
            <Input
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-neutral-50 focus:bg-white"
              required
            />
            <Input
              label="Mobile Number (Optional)"
              type="tel"
              placeholder="+91 98765 43210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-neutral-50 focus:bg-white"
            />

            <div>
              <Input
                label="Create Password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-neutral-50 focus:bg-white mb-2"
                required
              />
              {password && (
                <div className="space-y-1">
                  <div className="flex gap-1.5 h-1.5 w-full">
                    <div className={`flex-1 rounded-full ${strength.level >= 1 ? "bg-error-500" : "bg-neutral-200"}`}></div>
                    <div className={`flex-1 rounded-full ${strength.level >= 2 ? "bg-accent-500" : "bg-neutral-200"}`}></div>
                    <div className={`flex-1 rounded-full ${strength.level >= 3 ? "bg-success-500" : "bg-neutral-200"}`}></div>
                  </div>
                  <p className="text-xs font-semibold text-right text-neutral-500">
                    Strength: <span className={strength.color}>{strength.label}</span>
                  </p>
                </div>
              )}
            </div>

            <Input
              label="Confirm Password"
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-neutral-50 focus:bg-white"
              required
            />

            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="w-full mt-2 font-bold shadow-lg shadow-primary-500/25 bg-primary-600 hover:bg-primary-700 text-white py-3.5 rounded-xl"
            >
              {loading ? "Creating Account..." : "Complete Registration"}
            </Button>
          </form>
        )}

        {/* Method 2: Mobile OTP */}
        {method === "phone" && (
          <div>
            {!otpSent ? (
              <form className="space-y-4" onSubmit={handleSendOtp}>
                <div className="grid grid-cols-2 gap-3">
                  <Input
                    label="First Name"
                    placeholder="Steve"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="bg-neutral-50 focus:bg-white"
                  />
                  <Input
                    label="Last Name"
                    placeholder="Daniel"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="bg-neutral-50 focus:bg-white"
                  />
                </div>
                <Input
                  label="10-Digit Mobile Number"
                  type="tel"
                  placeholder="9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-neutral-50 focus:bg-white"
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full mt-2 font-bold shadow-lg shadow-primary-500/25 bg-primary-600 hover:bg-primary-700 text-white py-3.5 rounded-xl flex items-center justify-center gap-2"
                >
                  <span>{loading ? "Sending SMS..." : "Get 6-Digit OTP"}</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            ) : (
              <div className="space-y-5">
                <div className="bg-primary-50/60 p-3.5 rounded-xl border border-primary-100 text-xs text-primary-800">
                  Enter OTP sent to <strong className="font-bold">{phone}</strong>. (Use code <strong className="font-mono font-bold">123456</strong> for testing).
                </div>
                <div className="flex justify-between gap-2">
                  {otp.map((digit, idx) => (
                    <input
                      key={idx}
                      id={`otp-${idx}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        const newOtp = [...otp];
                        newOtp[idx] = val;
                        setOtp(newOtp);
                        if (val && idx < 5) {
                          const nextInput = document.getElementById(`otp-${idx + 1}`);
                          nextInput?.focus();
                        }
                      }}
                      className="w-12 h-14 text-center font-mono text-xl font-bold rounded-xl border-2 border-neutral-200 focus:border-primary-500 focus:outline-none transition"
                    />
                  ))}
                </div>
                <Button
                  type="button"
                  size="lg"
                  disabled={loading}
                  onClick={handleVerifyOtp}
                  className="w-full font-bold shadow-lg shadow-primary-500/25 bg-primary-600 hover:bg-primary-700 text-white py-3.5 rounded-xl"
                >
                  {loading ? "Verifying..." : "Verify & Sign Up"}
                </Button>
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setOtpSent(false)}
                    className="text-xs font-semibold text-neutral-500 hover:text-neutral-800 underline"
                  >
                    Change phone number
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Benefits badge */}
        <div className="mt-6 pt-5 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500 font-medium">
          <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-success-500" /> 100% Secure</span>
          <span className="flex items-center gap-1"><Sparkles className="w-3.5 h-3.5 text-accent-500" /> ₹200 Welcome Bonus</span>
          <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-primary-500" /> Free Vadodara Delivery</span>
        </div>

        {/* Footer Link */}
        <p className="mt-6 text-center text-sm font-medium text-neutral-600">
          Already have an account?{" "}
          <Link href="/auth/login" className="font-bold text-primary-600 hover:text-primary-700 underline underline-offset-4">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}