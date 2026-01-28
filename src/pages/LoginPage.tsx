import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UserRole } from '@/types/hospital';
import {
  Activity,
  Shield,
  Stethoscope,
  UserCheck,
  User,
  Eye,
  EyeOff,
  ArrowRight,
} from 'lucide-react';

const roleOptions: { role: UserRole; label: string; icon: React.ComponentType<{ className?: string }>; description: string }[] = [
  { role: 'admin', label: 'Administrator', icon: Shield, description: 'Full system access' },
  { role: 'doctor', label: 'Doctor', icon: Stethoscope, description: 'Manage patients & appointments' },
  { role: 'receptionist', label: 'Receptionist', icon: UserCheck, description: 'Register & book appointments' },
  { role: 'patient', label: 'Patient', icon: User, description: 'View records & book visits' },
];

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState<UserRole>('admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter email and password');
      return;
    }

    const success = await login(email, password, selectedRole);
    if (success) {
      navigate(`/${selectedRole}`);
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10" />
        <div className="relative z-10 flex flex-col justify-between p-12 text-primary-foreground">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <Activity className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">MediCare</h1>
              <p className="text-sm opacity-80">Hospital Management System</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold leading-tight mb-4">
                Streamline Your<br />Hospital Operations
              </h2>
              <p className="text-lg opacity-90 max-w-md">
                Complete digital solution for patient management, appointments, 
                medical records, and billing — designed for Indian hospitals.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: '50,000+', desc: 'Patients Served' },
                { label: '500+', desc: 'Doctors Onboard' },
                { label: '99.9%', desc: 'Uptime' },
                { label: '24/7', desc: 'Support' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-2xl font-bold">{stat.label}</p>
                  <p className="text-sm opacity-80">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm opacity-70">
            © 2026 MediCare HMS. All rights reserved.
          </p>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <Activity className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">MediCare</h1>
              <p className="text-sm text-muted-foreground">Hospital Management System</p>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold">Welcome back</h2>
            <p className="text-muted-foreground mt-2">Sign in to access your dashboard</p>
          </div>

          {/* Role Selection */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Select your role</Label>
            <div className="grid grid-cols-2 gap-3">
              {roleOptions.map((option) => (
                <button
                  key={option.role}
                  type="button"
                  onClick={() => setSelectedRole(option.role)}
                  className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                    selectedRole === option.role
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/30 hover:bg-muted/50'
                  }`}
                >
                  <option.icon className={`w-5 h-5 mb-2 ${
                    selectedRole === option.role ? 'text-primary' : 'text-muted-foreground'
                  }`} />
                  <p className={`font-medium text-sm ${
                    selectedRole === option.role ? 'text-primary' : 'text-foreground'
                  }`}>
                    {option.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">{option.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder={`${selectedRole}@hospital.com`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}

            <Button type="submit" size="xl" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Signing in...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Sign in
                  <ArrowRight className="w-4 h-4" />
                </span>
              )}
            </Button>
          </form>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Demo credentials: Use any email with any password
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
