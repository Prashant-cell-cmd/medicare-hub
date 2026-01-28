import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Cardiology', value: 28, color: 'hsl(215, 70%, 25%)' },
  { name: 'Orthopedics', value: 22, color: 'hsl(175, 60%, 40%)' },
  { name: 'Neurology', value: 18, color: 'hsl(199, 89%, 48%)' },
  { name: 'General Medicine', value: 32, color: 'hsl(152, 60%, 40%)' },
];

export function DepartmentStats() {
  return (
    <div className="bg-card rounded-xl border border-border shadow-sm p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Department Distribution</h3>
        <p className="text-sm text-muted-foreground mt-1">Appointments by department</p>
      </div>
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(0, 0%, 100%)',
                border: '1px solid hsl(214, 20%, 90%)',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }}
              formatter={(value: number) => [`${value}%`, 'Share']}
            />
            <Legend
              layout="vertical"
              verticalAlign="middle"
              align="right"
              iconType="circle"
              iconSize={10}
              formatter={(value) => (
                <span className="text-sm text-foreground">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
