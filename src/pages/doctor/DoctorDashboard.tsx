import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { useAuth } from '@/contexts/AuthContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Calendar,
  Clock,
  Users,
  CheckCircle,
  AlertCircle,
  FileText,
  ChevronRight,
} from 'lucide-react';

const todayAppointments = [
  {
    id: '1',
    patientName: 'Amit Patel',
    time: '10:00 AM',
    type: 'Consultation',
    status: 'upcoming' as const,
  },
  {
    id: '2',
    patientName: 'Sunita Devi',
    time: '10:30 AM',
    type: 'Follow-up',
    status: 'in-progress' as const,
  },
  {
    id: '3',
    patientName: 'Rahul Singh',
    time: '11:00 AM',
    type: 'Consultation',
    status: 'upcoming' as const,
  },
  {
    id: '4',
    patientName: 'Priya Sharma',
    time: '11:30 AM',
    type: 'Emergency',
    status: 'urgent' as const,
  },
  {
    id: '5',
    patientName: 'Vikram Mehta',
    time: '12:00 PM',
    type: 'Consultation',
    status: 'upcoming' as const,
  },
];

export default function DoctorDashboard() {
  const { user } = useAuth();

  return (
    <DashboardLayout requiredRole="doctor">
      <div className="space-y-8">
        {/* Welcome Header */}
        <div className="dashboard-header">
          <h1 className="text-2xl font-bold">Good morning, {user?.name}</h1>
          <p className="text-muted-foreground mt-1">
            You have 12 appointments scheduled for today
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Today's Appointments"
            value="12"
            change="3 completed"
            changeType="positive"
            icon={Calendar}
            variant="primary"
          />
          <StatCard
            title="Pending Reviews"
            value="5"
            change="2 urgent"
            changeType="negative"
            icon={AlertCircle}
          />
          <StatCard
            title="Patients This Week"
            value="47"
            change="+8 from last week"
            changeType="positive"
            icon={Users}
            variant="accent"
          />
          <StatCard
            title="Completed Today"
            value="3"
            change="25% of schedule"
            changeType="neutral"
            icon={CheckCircle}
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Today's Schedule */}
          <div className="lg:col-span-2 bg-card rounded-xl border border-border shadow-sm">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Today's Schedule</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
                </div>
                <Button variant="outline" size="sm">View All</Button>
              </div>
            </div>
            <div className="divide-y divide-border">
              {todayAppointments.map((apt) => (
                <div key={apt.id} className="p-4 hover:bg-muted/50 transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">
                        {apt.patientName.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">{apt.patientName}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {apt.time}
                        </span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{apt.type}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant={
                      apt.status === 'in-progress' ? 'soft-info' :
                      apt.status === 'urgent' ? 'soft-destructive' :
                      'soft'
                    }>
                      {apt.status === 'in-progress' ? 'In Progress' :
                       apt.status === 'urgent' ? 'Urgent' : 'Upcoming'}
                    </Badge>
                    <Button variant="ghost" size="icon-sm">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <QuickActions />
        </div>

        {/* Recent Patients */}
        <div className="bg-card rounded-xl border border-border shadow-sm">
          <div className="p-6 border-b border-border">
            <h3 className="text-lg font-semibold">Recent Patients</h3>
            <p className="text-sm text-muted-foreground mt-1">Patients you've seen recently</p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'Amit Patel', lastVisit: '2 days ago', condition: 'Hypertension' },
                { name: 'Sunita Devi', lastVisit: '3 days ago', condition: 'Diabetes' },
                { name: 'Rahul Singh', lastVisit: '5 days ago', condition: 'Back Pain' },
                { name: 'Priya Sharma', lastVisit: '1 week ago', condition: 'Migraine' },
              ].map((patient) => (
                <div key={patient.name} className="p-4 rounded-lg border border-border hover:border-primary/30 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-accent">
                        {patient.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">{patient.name}</p>
                      <p className="text-xs text-muted-foreground">{patient.lastVisit}</p>
                    </div>
                  </div>
                  <Badge variant="soft" className="text-xs">{patient.condition}</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
