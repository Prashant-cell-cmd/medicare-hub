import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, ChevronRight } from 'lucide-react';

const appointments = [
  { id: '1', doctor: 'Dr. Priya Sharma', department: 'Cardiology', date: '30 Jan 2026', time: '10:00 AM', status: 'confirmed', location: 'Room 201' },
  { id: '2', doctor: 'Dr. Rajesh Kumar', department: 'General Medicine', date: '05 Feb 2026', time: '11:30 AM', status: 'pending', location: 'Room 105' },
  { id: '3', doctor: 'Dr. Meena Gupta', department: 'Neurology', date: '10 Feb 2026', time: '02:00 PM', status: 'confirmed', location: 'Room 312' },
  { id: '4', doctor: 'Dr. Anil Verma', department: 'Orthopedics', date: '15 Jan 2026', time: '09:30 AM', status: 'completed', location: 'Room 108' },
  { id: '5', doctor: 'Dr. Priya Sharma', department: 'Cardiology', date: '10 Jan 2026', time: '10:00 AM', status: 'completed', location: 'Room 201' },
];

export default function PatientAppointmentsPage() {
  return (
    <DashboardLayout requiredRole="patient">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">My Appointments</h1>
            <p className="text-muted-foreground mt-1">View and manage your appointments</p>
          </div>
          <Button variant="hero" size="sm">
            <Calendar className="w-4 h-4 mr-2" />Book New
          </Button>
        </div>
        <div className="bg-card rounded-xl border border-border shadow-sm divide-y divide-border">
          {appointments.map((apt) => (
            <div key={apt.id} className="p-5 hover:bg-muted/50 transition-colors flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">{apt.doctor}</p>
                  <p className="text-sm text-muted-foreground">{apt.department}</p>
                  <div className="flex items-center gap-3 mt-1.5 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{apt.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{apt.time}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{apt.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant={apt.status === 'confirmed' ? 'completed' : apt.status === 'pending' ? 'pending' : 'soft'}>
                  {apt.status.charAt(0).toUpperCase() + apt.status.slice(1)}
                </Badge>
                <Button variant="ghost" size="icon-sm"><ChevronRight className="w-4 h-4" /></Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
