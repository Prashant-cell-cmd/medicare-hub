import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User } from 'lucide-react';

interface Appointment {
  id: string;
  patientName: string;
  doctorName: string;
  department: string;
  date: string;
  time: string;
  status: 'pending' | 'approved' | 'completed' | 'cancelled';
}

const mockAppointments: Appointment[] = [
  {
    id: '1',
    patientName: 'Amit Patel',
    doctorName: 'Dr. Priya Sharma',
    department: 'Cardiology',
    date: '28 Jan 2026',
    time: '10:00 AM',
    status: 'approved',
  },
  {
    id: '2',
    patientName: 'Sunita Devi',
    doctorName: 'Dr. Rajesh Kumar',
    department: 'Orthopedics',
    date: '28 Jan 2026',
    time: '11:30 AM',
    status: 'pending',
  },
  {
    id: '3',
    patientName: 'Rahul Singh',
    doctorName: 'Dr. Meena Gupta',
    department: 'Neurology',
    date: '28 Jan 2026',
    time: '02:00 PM',
    status: 'completed',
  },
  {
    id: '4',
    patientName: 'Priya Sharma',
    doctorName: 'Dr. Anil Verma',
    department: 'General Medicine',
    date: '28 Jan 2026',
    time: '03:30 PM',
    status: 'approved',
  },
  {
    id: '5',
    patientName: 'Vikram Mehta',
    doctorName: 'Dr. Sunita Rao',
    department: 'ENT',
    date: '29 Jan 2026',
    time: '09:00 AM',
    status: 'pending',
  },
];

export function RecentAppointments() {
  return (
    <div className="bg-card rounded-xl border border-border shadow-sm">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Recent Appointments</h3>
            <p className="text-sm text-muted-foreground mt-1">Today's scheduled appointments</p>
          </div>
          <Button variant="outline" size="sm">View All</Button>
        </div>
      </div>
      <div className="divide-y divide-border">
        {mockAppointments.map((appointment) => (
          <div key={appointment.id} className="p-4 hover:bg-muted/50 transition-colors">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{appointment.patientName}</p>
                  <p className="text-sm text-muted-foreground">{appointment.doctorName}</p>
                  <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {appointment.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {appointment.time}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <Badge variant={appointment.status}>
                  {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                </Badge>
                <p className="text-xs text-muted-foreground mt-2">{appointment.department}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
