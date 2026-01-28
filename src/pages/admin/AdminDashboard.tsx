import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { RecentAppointments } from '@/components/dashboard/RecentAppointments';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { AppointmentChart } from '@/components/dashboard/AppointmentChart';
import { DepartmentStats } from '@/components/dashboard/DepartmentStats';
import { useAuth } from '@/contexts/AuthContext';
import {
  Users,
  Stethoscope,
  Calendar,
  IndianRupee,
  TrendingUp,
  Clock,
} from 'lucide-react';

export default function AdminDashboard() {
  const { user } = useAuth();

  return (
    <DashboardLayout requiredRole="admin">
      <div className="space-y-8">
        {/* Welcome Header */}
        <div className="dashboard-header">
          <h1 className="text-2xl font-bold">Welcome back, {user?.name}</h1>
          <p className="text-muted-foreground mt-1">
            Here's what's happening at your hospital today
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Patients"
            value="12,847"
            change="+12% from last month"
            changeType="positive"
            icon={Users}
            variant="primary"
          />
          <StatCard
            title="Active Doctors"
            value="156"
            change="8 on leave today"
            changeType="neutral"
            icon={Stethoscope}
          />
          <StatCard
            title="Today's Appointments"
            value="248"
            change="32 pending"
            changeType="neutral"
            icon={Calendar}
            variant="accent"
          />
          <StatCard
            title="Monthly Revenue"
            value="₹48.5L"
            change="+18% from last month"
            changeType="positive"
            icon={IndianRupee}
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <AppointmentChart />
          </div>
          <DepartmentStats />
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RecentAppointments />
          </div>
          <QuickActions />
        </div>
      </div>
    </DashboardLayout>
  );
}
