import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Download, Eye, Calendar } from 'lucide-react';

const records = [
  { id: '1', title: 'General Checkup Report', doctor: 'Dr. Anil Verma', date: '25 Jan 2026', type: 'Checkup' },
  { id: '2', title: 'ECG Report', doctor: 'Dr. Priya Sharma', date: '20 Jan 2026', type: 'Cardiology' },
  { id: '3', title: 'X-Ray Report - Knee', doctor: 'Dr. Rajesh Kumar', date: '15 Jan 2026', type: 'Radiology' },
  { id: '4', title: 'Blood Work Analysis', doctor: 'Dr. Meena Gupta', date: '10 Jan 2026', type: 'Pathology' },
  { id: '5', title: 'MRI Scan Report', doctor: 'Dr. Meena Gupta', date: '05 Jan 2026', type: 'Neurology' },
];

export default function PatientRecordsPage() {
  return (
    <DashboardLayout requiredRole="patient">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Medical Records</h1>
          <p className="text-muted-foreground mt-1">Your complete medical history and documents</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {records.map((record) => (
            <div key={record.id} className="bg-card rounded-xl border border-border p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mt-0.5">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{record.title}</p>
                    <p className="text-sm text-muted-foreground">{record.doctor}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="soft">{record.type}</Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />{record.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4 pt-3 border-t border-border">
                <Button variant="outline" size="sm" className="flex-1"><Eye className="w-3.5 h-3.5 mr-1.5" />View</Button>
                <Button variant="outline" size="sm" className="flex-1"><Download className="w-3.5 h-3.5 mr-1.5" />Download</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
