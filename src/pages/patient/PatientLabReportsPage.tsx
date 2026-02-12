import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TestTube, Download, Eye, Calendar, CheckCircle, Clock } from 'lucide-react';

const labReports = [
  { id: '1', test: 'Complete Blood Count (CBC)', date: '24 Jan 2026', status: 'ready', lab: 'Central Lab' },
  { id: '2', test: 'Lipid Profile', date: '20 Jan 2026', status: 'ready', lab: 'Central Lab' },
  { id: '3', test: 'Thyroid Function Test', date: '18 Jan 2026', status: 'ready', lab: 'Pathology Dept' },
  { id: '4', test: 'HbA1c', date: '15 Jan 2026', status: 'ready', lab: 'Central Lab' },
  { id: '5', test: 'Liver Function Test', date: '28 Jan 2026', status: 'processing', lab: 'Central Lab' },
];

export default function PatientLabReportsPage() {
  return (
    <DashboardLayout requiredRole="patient">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Lab Reports</h1>
          <p className="text-muted-foreground mt-1">View and download your laboratory test results</p>
        </div>
        <div className="bg-card rounded-xl border border-border shadow-sm divide-y divide-border">
          {labReports.map((report) => (
            <div key={report.id} className="p-5 hover:bg-muted/50 transition-colors flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${report.status === 'ready' ? 'bg-success/10' : 'bg-warning/10'}`}>
                  {report.status === 'ready' ? <CheckCircle className="w-5 h-5 text-success" /> : <Clock className="w-5 h-5 text-warning" />}
                </div>
                <div>
                  <p className="font-semibold">{report.test}</p>
                  <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{report.date}</span>
                    <span>{report.lab}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant={report.status === 'ready' ? 'completed' : 'pending'}>
                  {report.status === 'ready' ? 'Ready' : 'Processing'}
                </Badge>
                {report.status === 'ready' && (
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm"><Eye className="w-4 h-4" /></Button>
                    <Button variant="ghost" size="sm"><Download className="w-4 h-4" /></Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
