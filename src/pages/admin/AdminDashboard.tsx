import { Building2, Users, CreditCard, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const barData = [
  { month: 'Jan', companies: 12 }, { month: 'Feb', companies: 18 }, { month: 'Mar', companies: 25 },
  { month: 'Apr', companies: 22 }, { month: 'May', companies: 30 }, { month: 'Jun', companies: 35 },
];

const pieData = [
  { name: 'Free', value: 35, color: 'hsl(215, 16%, 47%)' },
  { name: 'Monthly', value: 40, color: 'hsl(217, 91%, 60%)' },
  { name: 'Yearly', value: 25, color: 'hsl(142, 76%, 36%)' },
];

const stats = [
  { label: 'Total Companies', value: '142', icon: Building2, change: '+12%' },
  { label: 'Total Users', value: '3,847', icon: Users, change: '+8%' },
  { label: 'Active Subscriptions', value: '107', icon: CreditCard, change: '+5%' },
  { label: 'Revenue', value: '$24.5K', icon: TrendingUp, change: '+15%' },
];

const AdminDashboard = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-sm text-muted-foreground">Overview of your SaaS platform</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div key={i} className="stat-card">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xs font-medium text-success">{s.change}</span>
            </div>
            <p className="mt-3 text-2xl font-bold text-foreground">{s.value}</p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="glass-card p-6">
          <h3 className="mb-4 text-lg font-semibold text-foreground">Company Registrations</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 32%, 91%)" />
              <XAxis dataKey="month" stroke="hsl(215, 16%, 47%)" fontSize={12} />
              <YAxis stroke="hsl(215, 16%, 47%)" fontSize={12} />
              <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid hsl(214, 32%, 91%)' }} />
              <Bar dataKey="companies" fill="hsl(217, 91%, 60%)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-card p-6">
          <h3 className="mb-4 text-lg font-semibold text-foreground">Plan Distribution</h3>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                {pieData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
