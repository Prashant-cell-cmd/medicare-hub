import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { useAuth } from '@/contexts/AuthContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Users,
  Calendar,
  Receipt,
  Clock,
  Plus,
  Search,
} from 'lucide-react';
import { Input } from '@/components/ui/input';

const upcomingAppointments = [
  { id: '1', patient: 'Amit Patel', doctor: 'Dr. Priya Sharma', time: '10:00 AM', department: 'Cardiology', status: 'confirmed' },
  { id: '2', patient: 'Sunita Devi', doctor: 'Dr. Rajesh Kumar', time: '10:30 AM', department: 'Orthopedics', status: 'waiting' },
  { id: '3', patient: 'Rahul Singh', doctor: 'Dr. Meena Gupta', time: '11:00 AM', department: 'Neurology', status: 'confirmed' },
  { id: '4', patient: 'Priya Sharma', doctor: 'Dr. Anil Verma', time: '11:30 AM', department: 'General', status: 'waiting' },
];

export default function ReceptionistDashboard() {
  const { user } = useAuth();

  return (
    <DashboardLayout requiredRole="receptionist">
      <div className="space-y-8">
        {/* Welcome Header */}
        <div className="dashboard-header flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Welcome, {user?.name}</h1>
            <p className="text-muted-foreground mt-1">
              Manage patient registrations and appointments
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline">
              <Search className="w-4 h-4 mr-2" />
              Find Patient
            </Button>
            <Button variant="hero">
              <Plus className="w-4 h-4 mr-2" />
              New Patient
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="New Registrations"
            value="28"
            change="Today"
            changeType="neutral"
            icon={Users}
            variant="primary"
          />
          <StatCard
            title="Appointments Booked"
            value="45"
            change="12 pending"
            changeType="neutral"
            icon={Calendar}
          />
          <StatCard
            title="Waiting Patients"
            value="8"
            change="Avg. wait: 15 min"
            changeType="neutral"
            icon={Clock}
            variant="accent"
          />
          <StatCard
            title="Bills Generated"
            value="₹2.4L"
            change="Today's collection"
            changeType="positive"
            icon={Receipt}
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Upcoming Appointments */}
          <div className="lg:col-span-2 bg-card rounded-xl border border-border shadow-sm">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Upcoming Appointments</h3>
                  <p className="text-sm text-muted-foreground mt-1">Next appointments in queue</p>
                </div>
                <Button variant="outline" size="sm">View All</Button>
              </div>
            </div>
            <div className="divide-y divide-border">
              {upcomingAppointments.map((apt) => (
                <div key={apt.id} className="p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-semibold text-primary">
                          {apt.patient.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium">{apt.patient}</p>
                        <p className="text-sm text-muted-foreground">{apt.doctor} • {apt.department}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-medium">{apt.time}</p>
                        <Badge variant={apt.status === 'confirmed' ? 'completed' : 'pending'}>
                          {apt.status === 'confirmed' ? 'Confirmed' : 'Waiting'}
                        </Badge>
                      </div>
                      <Button size="sm" variant="outline">Check-in</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <QuickActions />
        </div>

        {/* Quick Search */}
        <div className="bg-card rounded-xl border border-border shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Patient Search</h3>
          <div className="flex gap-4">
            <div className="flex-1">
              <Input placeholder="Search by Patient ID, Name, or Phone Number..." className="h-12" />
            </div>
            <Button size="lg">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <span className="text-sm text-muted-foreground">Recent searches:</span>
            <Button variant="ghost" size="sm" className="text-primary">PAT-2024-1247</Button>
            <Button variant="ghost" size="sm" className="text-primary">Amit Patel</Button>
            <Button variant="ghost" size="sm" className="text-primary">+91 98765 43210</Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
