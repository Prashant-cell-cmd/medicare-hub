import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Receipt, Download, Calendar, IndianRupee } from 'lucide-react';

const bills = [
  { id: 'BILL-2026-042', date: '25 Jan 2026', description: 'Cardiology Consultation', amount: 800, status: 'paid' },
  { id: 'BILL-2026-039', date: '20 Jan 2026', description: 'Lab Tests - CBC, Lipid Profile', amount: 1200, status: 'paid' },
  { id: 'BILL-2026-050', date: '28 Jan 2026', description: 'General Medicine Consultation', amount: 500, status: 'pending' },
  { id: 'BILL-2026-045', date: '26 Jan 2026', description: 'X-Ray Knee', amount: 2000, status: 'pending' },
  { id: 'BILL-2025-198', date: '15 Dec 2025', description: 'MRI Brain', amount: 8500, status: 'paid' },
];

export default function PatientBillsPage() {
  const totalPending = bills.filter(b => b.status === 'pending').reduce((sum, b) => sum + b.amount, 0);

  return (
    <DashboardLayout requiredRole="patient">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Bills & Invoices</h1>
            <p className="text-muted-foreground mt-1">View and manage your billing history</p>
          </div>
          <div className="bg-destructive/10 text-destructive px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2">
            <IndianRupee className="w-4 h-4" />
            Pending: ₹{totalPending.toLocaleString('en-IN')}
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border shadow-sm divide-y divide-border">
          {bills.map((bill) => (
            <div key={bill.id} className="p-5 hover:bg-muted/50 transition-colors flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${bill.status === 'paid' ? 'bg-success/10' : 'bg-warning/10'}`}>
                  <Receipt className={`w-5 h-5 ${bill.status === 'paid' ? 'text-success' : 'text-warning'}`} />
                </div>
                <div>
                  <p className="font-semibold">{bill.description}</p>
                  <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                    <span>{bill.id}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{bill.date}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="font-bold text-lg">₹{bill.amount.toLocaleString('en-IN')}</p>
                <Badge variant={bill.status === 'paid' ? 'completed' : 'pending'}>
                  {bill.status === 'paid' ? 'Paid' : 'Pending'}
                </Badge>
                <Button variant="ghost" size="sm"><Download className="w-4 h-4" /></Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
