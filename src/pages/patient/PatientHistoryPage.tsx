import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Badge } from '@/components/ui/badge';
import { Calendar, Stethoscope, TestTube, Receipt, Pill } from 'lucide-react';

const historyItems = [
  { id: '1', type: 'appointment', title: 'Cardiology Consultation', detail: 'Dr. Priya Sharma', date: '25 Jan 2026', icon: Stethoscope },
  { id: '2', type: 'lab', title: 'CBC & Lipid Profile', detail: 'Central Lab', date: '24 Jan 2026', icon: TestTube },
  { id: '3', type: 'prescription', title: 'Prescription Updated', detail: 'Atorvastatin, Aspirin, Metoprolol', date: '25 Jan 2026', icon: Pill },
  { id: '4', type: 'bill', title: 'Payment - ₹800', detail: 'Consultation Fee', date: '25 Jan 2026', icon: Receipt },
  { id: '5', type: 'appointment', title: 'General Checkup', detail: 'Dr. Anil Verma', date: '15 Jan 2026', icon: Stethoscope },
  { id: '6', type: 'lab', title: 'X-Ray Knee', detail: 'Radiology Dept', date: '15 Jan 2026', icon: TestTube },
  { id: '7', type: 'bill', title: 'Payment - ₹2,700', detail: 'Consultation + X-Ray', date: '15 Jan 2026', icon: Receipt },
  { id: '8', type: 'appointment', title: 'MRI Scan', detail: 'Dr. Meena Gupta', date: '05 Jan 2026', icon: Stethoscope },
];

const typeColors: Record<string, string> = {
  appointment: 'bg-primary/10 text-primary',
  lab: 'bg-accent/10 text-accent',
  prescription: 'bg-success/10 text-success',
  bill: 'bg-warning/10 text-warning',
};

export default function PatientHistoryPage() {
  return (
    <DashboardLayout requiredRole="patient">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">History</h1>
          <p className="text-muted-foreground mt-1">Your complete activity timeline</p>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-border" />
          <div className="space-y-4">
            {historyItems.map((item) => (
              <div key={item.id} className="relative flex items-start gap-4 pl-0">
                <div className={`w-[54px] h-11 rounded-xl flex items-center justify-center shrink-0 z-10 ${typeColors[item.type]}`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="bg-card rounded-xl border border-border p-4 shadow-sm flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">{item.title}</p>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />{item.date}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
