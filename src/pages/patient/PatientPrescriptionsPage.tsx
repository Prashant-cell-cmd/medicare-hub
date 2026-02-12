import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ClipboardList, Download, Pill, Calendar } from 'lucide-react';

const prescriptions = [
  { id: '1', doctor: 'Dr. Priya Sharma', date: '25 Jan 2026', medications: ['Atorvastatin 10mg', 'Aspirin 75mg', 'Metoprolol 25mg'], status: 'active' },
  { id: '2', doctor: 'Dr. Anil Verma', date: '15 Jan 2026', medications: ['Paracetamol 500mg', 'Cetirizine 10mg'], status: 'active' },
  { id: '3', doctor: 'Dr. Rajesh Kumar', date: '05 Jan 2026', medications: ['Ibuprofen 400mg', 'Calcium Supplement'], status: 'completed' },
  { id: '4', doctor: 'Dr. Meena Gupta', date: '20 Dec 2025', medications: ['Vitamin B12', 'Iron Supplement', 'Folic Acid'], status: 'completed' },
];

export default function PatientPrescriptionsPage() {
  return (
    <DashboardLayout requiredRole="patient">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Prescriptions</h1>
          <p className="text-muted-foreground mt-1">View your prescriptions and medications</p>
        </div>
        <div className="space-y-4">
          {prescriptions.map((rx) => (
            <div key={rx.id} className="bg-card rounded-xl border border-border p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <ClipboardList className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">{rx.doctor}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />{rx.date}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={rx.status === 'active' ? 'completed' : 'soft'}>{rx.status === 'active' ? 'Active' : 'Completed'}</Badge>
                  <Button variant="ghost" size="sm"><Download className="w-4 h-4" /></Button>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {rx.medications.map((med) => (
                  <div key={med} className="flex items-center gap-1.5 bg-muted rounded-lg px-3 py-1.5 text-sm">
                    <Pill className="w-3.5 h-3.5 text-muted-foreground" />
                    {med}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
