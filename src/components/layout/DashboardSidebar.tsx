import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  Users,
  UserCog,
  Calendar,
  FileText,
  CreditCard,
  Settings,
  LogOut,
  Stethoscope,
  Building2,
  ClipboardList,
  Activity,
  TestTube,
  Receipt,
  UserPlus,
  CalendarPlus,
  History,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useState } from 'react';

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItemsByRole: Record<string, NavItem[]> = {
  admin: [
    { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { label: 'Patients', href: '/admin/patients', icon: Users },
    { label: 'Doctors', href: '/admin/doctors', icon: Stethoscope },
    { label: 'Departments', href: '/admin/departments', icon: Building2 },
    { label: 'Appointments', href: '/admin/appointments', icon: Calendar },
    { label: 'Billing', href: '/admin/billing', icon: CreditCard },
    { label: 'Reports', href: '/admin/reports', icon: FileText },
    { label: 'Settings', href: '/admin/settings', icon: Settings },
  ],
  doctor: [
    { label: 'Dashboard', href: '/doctor', icon: LayoutDashboard },
    { label: 'My Appointments', href: '/doctor/appointments', icon: Calendar },
    { label: 'Patients', href: '/doctor/patients', icon: Users },
    { label: 'Prescriptions', href: '/doctor/prescriptions', icon: ClipboardList },
    { label: 'Medical Records', href: '/doctor/records', icon: FileText },
    { label: 'Schedule', href: '/doctor/schedule', icon: Activity },
  ],
  receptionist: [
    { label: 'Dashboard', href: '/receptionist', icon: LayoutDashboard },
    { label: 'Register Patient', href: '/receptionist/register', icon: UserPlus },
    { label: 'Appointments', href: '/receptionist/appointments', icon: Calendar },
    { label: 'Book Appointment', href: '/receptionist/book', icon: CalendarPlus },
    { label: 'Billing', href: '/receptionist/billing', icon: Receipt },
    { label: 'Patients', href: '/receptionist/patients', icon: Users },
  ],
  patient: [
    { label: 'Dashboard', href: '/patient', icon: LayoutDashboard },
    { label: 'Book Appointment', href: '/patient/book', icon: CalendarPlus },
    { label: 'My Appointments', href: '/patient/appointments', icon: Calendar },
    { label: 'Medical Records', href: '/patient/records', icon: FileText },
    { label: 'Prescriptions', href: '/patient/prescriptions', icon: ClipboardList },
    { label: 'Lab Reports', href: '/patient/lab-reports', icon: TestTube },
    { label: 'Bills & Invoices', href: '/patient/bills', icon: Receipt },
    { label: 'History', href: '/patient/history', icon: History },
  ],
};

export function DashboardSidebar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  if (!user) return null;

  const navItems = navItemsByRole[user.role] || [];

  return (
    <aside
      className={cn(
        'relative flex flex-col min-h-screen transition-all duration-300 ease-in-out',
        collapsed ? 'w-[72px]' : 'w-64'
      )}
      style={{
        background: 'linear-gradient(180deg, hsl(215 70% 18%) 0%, hsl(215 70% 14%) 50%, hsl(220 60% 12%) 100%)',
      }}
    >
      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-20 z-10 w-6 h-6 rounded-full bg-primary border-2 border-background flex items-center justify-center text-primary-foreground shadow-lg hover:scale-110 transition-transform"
      >
        {collapsed ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
      </button>

      {/* Logo */}
      <div className={cn('p-5 border-b border-white/10', collapsed && 'px-3')}>
        <Link to={`/${user.role}`} className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: 'linear-gradient(135deg, hsl(175 60% 45%), hsl(175 80% 55%))' }}
          >
            <Activity className="w-5 h-5 text-white" />
          </div>
          {!collapsed && (
            <div className="overflow-hidden">
              <h1 className="font-bold text-lg text-white tracking-tight">MediCare</h1>
              <p className="text-[11px] text-white/50 capitalize font-medium">{user.role} Portal</p>
            </div>
          )}
        </Link>
      </div>

      {/* Navigation */}
      <nav className={cn('flex-1 py-4 space-y-0.5 overflow-y-auto', collapsed ? 'px-2' : 'px-3')}>
        {!collapsed && (
          <p className="text-[10px] uppercase tracking-widest text-white/30 font-semibold px-3 mb-3">
            Navigation
          </p>
        )}
        {navItems.map((item) => {
          const isExactMatch = location.pathname === item.href;
          const isSubRoute = item.href !== `/${user.role}` && location.pathname.startsWith(item.href);
          const isActive = isExactMatch || isSubRoute;

          return (
            <Link
              key={item.href}
              to={item.href}
              title={collapsed ? item.label : undefined}
              className={cn(
                'group flex items-center gap-3 rounded-lg text-sm font-medium transition-all duration-200 relative',
                collapsed ? 'px-0 py-3 justify-center' : 'px-3 py-2.5',
                isActive
                  ? 'text-white'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              )}
            >
              {/* Active indicator bar */}
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-r-full"
                  style={{ background: 'linear-gradient(180deg, hsl(175 60% 55%), hsl(175 80% 45%))' }}
                />
              )}
              {/* Active background glow */}
              {isActive && (
                <div className="absolute inset-0 rounded-lg bg-white/8" />
              )}
              <div className={cn(
                'flex items-center justify-center w-8 h-8 rounded-lg shrink-0 transition-all duration-200 relative z-10',
                isActive
                  ? 'bg-white/15 shadow-sm'
                  : 'group-hover:bg-white/8'
              )}>
                <item.icon className={cn(
                  'w-[18px] h-[18px] transition-colors',
                  isActive ? 'text-[hsl(175,60%,55%)]' : 'text-white/50 group-hover:text-white/80'
                )} />
              </div>
              {!collapsed && (
                <span className="relative z-10 truncate">{item.label}</span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* User section */}
      <div className={cn('border-t border-white/10', collapsed ? 'p-2' : 'p-4')}>
        <div className={cn(
          'flex items-center gap-3 mb-2 rounded-lg',
          collapsed ? 'justify-center py-2' : 'px-3 py-3'
        )}>
          <div className="w-9 h-9 rounded-full shrink-0 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, hsl(175 60% 45%), hsl(200 70% 45%))' }}
          >
            <span className="text-xs font-bold text-white">
              {user.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">{user.name}</p>
              <p className="text-[11px] text-white/40 capitalize">{user.role}</p>
            </div>
          )}
        </div>
        <Button
          variant="ghost"
          size={collapsed ? 'icon' : 'default'}
          className={cn(
            'text-white/50 hover:text-white hover:bg-white/8 transition-all',
            collapsed ? 'w-full justify-center' : 'w-full justify-start'
          )}
          onClick={logout}
        >
          <LogOut className={cn('w-4 h-4', !collapsed && 'mr-3')} />
          {!collapsed && 'Logout'}
        </Button>
      </div>
    </aside>
  );
}
