import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./ui/input-otp";
import { Building2, Loader2 } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

export function Login() {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleSendOTP = () => {
    if (phone.length === 10) {
      setIsLoading(true);
      // Simulate API call to send OTP
      setTimeout(() => {
        setIsLoading(false);
        setStep("otp");
      }, 1000);
    }
  };

  const handleVerifyOTP = () => {
    if (otp.length === 6) {
      setIsLoading(true);
      // Mock authentication - in real app, verify OTP with backend
      setTimeout(() => {
        setIsLoading(false);
        login(phone);
        navigate("/");
      }, 1000);
    }
  };

  const handleResendOTP = () => {
    setOtp("");
    setIsLoading(true);
    // Simulate resend OTP
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold">Sportstik Vendor</CardTitle>
            <CardDescription className="mt-2">
              {step === "phone" 
                ? "Enter your mobile number to continue"
                : `OTP sent to +91 ${phone}`}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {step === "phone" ? (
            <>
              <div className="space-y-2">
                <Label htmlFor="phone">Mobile Number</Label>
                <div className="flex gap-2">
                  <div className="flex items-center px-3 border rounded-md bg-muted">
                    <span className="text-sm font-medium">+91</span>
                  </div>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter 10 digit mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                    maxLength={10}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && phone.length === 10) {
                        handleSendOTP();
                      }
                    }}
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  We'll send you a one-time password to verify your number
                </p>
              </div>
              <Button 
                className="w-full" 
                onClick={handleSendOTP}
                disabled={phone.length !== 10 || isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending OTP...
                  </>
                ) : (
                  "Send OTP"
                )}
              </Button>
            </>
          ) : (
            <>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-center block">Enter 6-Digit OTP</Label>
                  <div className="flex justify-center">
                    <InputOTP 
                      maxLength={6} 
                      value={otp}
                      onChange={(value) => setOtp(value)}
                    >
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                  <p className="text-xs text-muted-foreground text-center">
                    For demo: Use any 6 digits to login
                  </p>
                </div>
                
                <div className="text-center">
                  <button
                    type="button"
                    onClick={handleResendOTP}
                    disabled={isLoading}
                    className="text-sm text-emerald-600 hover:text-emerald-700 font-medium disabled:opacity-50"
                  >
                    Resend OTP
                  </button>
                </div>
              </div>
              
              <Button 
                className="w-full" 
                onClick={handleVerifyOTP}
                disabled={otp.length !== 6 || isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  "Verify & Login"
                )}
              </Button>
              
              <Button 
                variant="ghost" 
                className="w-full" 
                onClick={() => {
                  setStep("phone");
                  setOtp("");
                }}
                disabled={isLoading}
              >
                Change Number
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}