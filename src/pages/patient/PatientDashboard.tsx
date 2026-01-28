import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { useAuth } from '@/contexts/AuthContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Calendar,
  FileText,
  TestTube,
  Receipt,
  Clock,
  Download,
  Eye,
} from 'lucide-react';

const upcomingAppointments = [
  { id: '1', doctor: 'Dr. Priya Sharma', department: 'Cardiology', date: '30 Jan 2026', time: '10:00 AM', status: 'confirmed' },
  { id: '2', doctor: 'Dr. Rajesh Kumar', department: 'General Medicine', date: '05 Feb 2026', time: '11:30 AM', status: 'pending' },
];

const recentPrescriptions = [
  { id: '1', doctor: 'Dr. Priya Sharma', date: '25 Jan 2026', medications: 3 },
  { id: '2', doctor: 'Dr. Anil Verma', date: '15 Jan 2026', medications: 2 },
];

const recentLabReports = [
  { id: '1', test: 'Complete Blood Count', date: '24 Jan 2026', status: 'ready' },
  { id: '2', test: 'Lipid Profile', date: '20 Jan 2026', status: 'ready' },
];

export default function PatientDashboard() {
  const { user } = useAuth();

  return (
    <DashboardLayout requiredRole="patient">
      <div className="space-y-8">
        {/* Welcome Header */}
        <div className="dashboard-header">
          <h1 className="text-2xl font-bold">Welcome, {user?.name}</h1>
          <p className="text-muted-foreground mt-1">
            Manage your appointments and health records
          </p>
          <div className="flex items-center gap-2 mt-4">
            <Badge variant="soft">Patient ID: PAT-2024-1247</Badge>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Upcoming Appointments"
            value="2"
            change="Next: 30 Jan"
            changeType="neutral"
            icon={Calendar}
            variant="primary"
          />
          <StatCard
            title="Prescriptions"
            value="5"
            change="2 active"
            changeType="neutral"
            icon={FileText}
          />
          <StatCard
            title="Lab Reports"
            value="8"
            change="2 new"
            changeType="positive"
            icon={TestTube}
            variant="accent"
          />
          <StatCard
            title="Pending Bills"
            value="₹2,500"
            change="1 invoice"
            changeType="neutral"
            icon={Receipt}
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Upcoming Appointments */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-xl border border-border shadow-sm">
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Upcoming Appointments</h3>
                    <p className="text-sm text-muted-foreground mt-1">Your scheduled visits</p>
                  </div>
                  <Button variant="hero" size="sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book New
                  </Button>
                </div>
              </div>
              <div className="divide-y divide-border">
                {upcomingAppointments.map((apt) => (
                  <div key={apt.id} className="p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{apt.doctor}</p>
                        <p className="text-sm text-muted-foreground">{apt.department}</p>
                        <div className="flex items-center gap-3 mt-2 text-sm">
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {apt.date}
                          </span>
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            {apt.time}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant={apt.status === 'confirmed' ? 'completed' : 'pending'}>
                          {apt.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                        </Badge>
                        <Button variant="outline" size="sm">View Details</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Prescriptions */}
            <div className="bg-card rounded-xl border border-border shadow-sm">
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Recent Prescriptions</h3>
                    <p className="text-sm text-muted-foreground mt-1">Your medication history</p>
                  </div>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
              </div>
              <div className="divide-y divide-border">
                {recentPrescriptions.map((rx) => (
                  <div key={rx.id} className="p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{rx.doctor}</p>
                        <p className="text-sm text-muted-foreground">{rx.date} • {rx.medications} medications</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <QuickActions />

            {/* Lab Reports */}
            <div className="bg-card rounded-xl border border-border shadow-sm">
              <div className="p-6 border-b border-border">
                <h3 className="text-lg font-semibold">Recent Lab Reports</h3>
              </div>
              <div className="divide-y divide-border">
                {recentLabReports.map((report) => (
                  <div key={report.id} className="p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">{report.test}</p>
                        <p className="text-xs text-muted-foreground">{report.date}</p>
                      </div>
                      <Button variant="soft" size="sm">
                        <Download className="w-3 h-3 mr-1" />
                        PDF
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
