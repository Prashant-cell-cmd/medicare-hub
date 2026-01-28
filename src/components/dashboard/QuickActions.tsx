import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';
import {
  UserPlus,
  CalendarPlus,
  FileText,
  Receipt,
  Stethoscope,
  ClipboardList,
  Users,
  Building2,
} from 'lucide-react';

interface QuickAction {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const actionsByRole: Record<string, QuickAction[]> = {
  admin: [
    { label: 'Add Doctor', href: '/admin/doctors/new', icon: Stethoscope, description: 'Register new doctor' },
    { label: 'Add Department', href: '/admin/departments/new', icon: Building2, description: 'Create department' },
    { label: 'View Reports', href: '/admin/reports', icon: FileText, description: 'Generate reports' },
    { label: 'Manage Users', href: '/admin/users', icon: Users, description: 'User management' },
  ],
  doctor: [
    { label: 'View Appointments', href: '/doctor/appointments', icon: CalendarPlus, description: 'Today\'s schedule' },
    { label: 'Write Prescription', href: '/doctor/prescriptions/new', icon: ClipboardList, description: 'New prescription' },
    { label: 'Patient Records', href: '/doctor/patients', icon: Users, description: 'Access records' },
    { label: 'My Schedule', href: '/doctor/schedule', icon: FileText, description: 'Manage availability' },
  ],
  receptionist: [
    { label: 'Register Patient', href: '/receptionist/register', icon: UserPlus, description: 'New patient' },
    { label: 'Book Appointment', href: '/receptionist/book', icon: CalendarPlus, description: 'Schedule visit' },
    { label: 'Generate Bill', href: '/receptionist/billing/new', icon: Receipt, description: 'Create invoice' },
    { label: 'View Patients', href: '/receptionist/patients', icon: Users, description: 'Patient list' },
  ],
  patient: [
    { label: 'Book Appointment', href: '/patient/book', icon: CalendarPlus, description: 'Schedule visit' },
    { label: 'My Records', href: '/patient/records', icon: FileText, description: 'Medical history' },
    { label: 'Prescriptions', href: '/patient/prescriptions', icon: ClipboardList, description: 'View medicines' },
    { label: 'My Bills', href: '/patient/bills', icon: Receipt, description: 'Payment history' },
  ],
};

export function QuickActions() {
  const { user } = useAuth();

  if (!user) return null;

  const actions = actionsByRole[user.role] || [];

  return (
    <div className="bg-card rounded-xl border border-border shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <Link key={action.href} to={action.href}>
            <div className="p-4 rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 group cursor-pointer">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <action.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="font-medium text-sm">{action.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{action.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
