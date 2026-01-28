import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Activity, ArrowRight, Calendar, FileText, Shield, Stethoscope, Users, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Patient Management',
    description: 'Complete patient lifecycle from registration to discharge with medical history tracking.',
  },
  {
    icon: Calendar,
    title: 'Appointment Scheduling',
    description: 'Smart slot-based booking system with conflict prevention and status tracking.',
  },
  {
    icon: FileText,
    title: 'Medical Records',
    description: 'Digital prescriptions, lab reports, and comprehensive medical history management.',
  },
  {
    icon: Shield,
    title: 'Secure & Compliant',
    description: 'Role-based access control with encrypted data storage and audit trails.',
  },
];

const stats = [
  { value: '50,000+', label: 'Patients Served' },
  { value: '500+', label: 'Doctors' },
  { value: '50+', label: 'Departments' },
  { value: '99.9%', label: 'Uptime' },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Activity className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">MediCare</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
            <Link to="/login">
              <Button variant="hero">
                Sign In
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <CheckCircle className="w-4 h-4" />
              Trusted by 100+ Indian Hospitals
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Modern Hospital
              <span className="block text-primary">Management System</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Streamline your hospital operations with our comprehensive digital solution. 
              From patient registration to billing – manage everything in one place.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/login">
                <Button size="xl" variant="hero">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Button size="xl" variant="outline">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-primary-foreground/80 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to run a modern hospital efficiently
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role-based Access */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Designed for Every Role</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored dashboards and features for each user type
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { role: 'Administrator', icon: Shield, features: ['Hospital Analytics', 'Staff Management', 'Reports & Insights'] },
              { role: 'Doctor', icon: Stethoscope, features: ['Patient History', 'Prescriptions', 'Appointment Management'] },
              { role: 'Receptionist', icon: Users, features: ['Patient Registration', 'Appointment Booking', 'Billing'] },
              { role: 'Patient', icon: Activity, features: ['Book Appointments', 'View Records', 'Download Reports'] },
            ].map((item) => (
              <div key={item.role} className="p-6 rounded-xl bg-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-4">{item.role}</h3>
                <ul className="space-y-2">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-success" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="bg-primary rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Hospital?
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Join hundreds of hospitals already using MediCare to streamline their operations.
            </p>
            <Link to="/login">
              <Button size="xl" className="bg-white text-primary hover:bg-white/90">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Activity className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-semibold">MediCare HMS</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2026 MediCare Hospital Management System. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
