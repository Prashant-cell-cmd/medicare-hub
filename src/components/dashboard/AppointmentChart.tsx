import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', appointments: 24, revenue: 45000 },
  { name: 'Tue', appointments: 32, revenue: 58000 },
  { name: 'Wed', appointments: 28, revenue: 52000 },
  { name: 'Thu', appointments: 35, revenue: 67000 },
  { name: 'Fri', appointments: 42, revenue: 78000 },
  { name: 'Sat', appointments: 38, revenue: 72000 },
  { name: 'Sun', appointments: 15, revenue: 28000 },
];

export function AppointmentChart() {
  return (
    <div className="bg-card rounded-xl border border-border shadow-sm p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Weekly Overview</h3>
        <p className="text-sm text-muted-foreground mt-1">Appointments and revenue this week</p>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorAppointments" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(215, 70%, 25%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(215, 70%, 25%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(175, 60%, 40%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(175, 60%, 40%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 20%, 90%)" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: 'hsl(215, 15%, 45%)', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: 'hsl(215, 15%, 45%)', fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(0, 0%, 100%)',
                border: '1px solid hsl(214, 20%, 90%)',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }}
            />
            <Area
              type="monotone"
              dataKey="appointments"
              stroke="hsl(215, 70%, 25%)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorAppointments)"
              name="Appointments"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary" />
          <span className="text-sm text-muted-foreground">Appointments</span>
        </div>
      </div>
    </div>
  );
}
