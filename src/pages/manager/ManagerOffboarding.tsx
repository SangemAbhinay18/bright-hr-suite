import { offboardingRecords } from '@/utils/dummyData';
import { UserMinus } from 'lucide-react';

const ManagerOffboarding = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Offboarding</h1>
        <p className="text-sm text-muted-foreground">Employee exit records</p>
      </div>

      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b bg-accent/50">
              <th className="px-4 py-3 text-left font-medium text-foreground">Employee</th>
              <th className="px-4 py-3 text-left font-medium text-foreground">Department</th>
              <th className="px-4 py-3 text-left font-medium text-foreground">Last Date</th>
              <th className="px-4 py-3 text-left font-medium text-foreground">Reason</th>
              <th className="px-4 py-3 text-left font-medium text-foreground">Status</th>
              <th className="px-4 py-3 text-left font-medium text-foreground">Exit Interview</th>
            </tr></thead>
            <tbody>
              {offboardingRecords.map(r => (
                <tr key={r.id} className="border-b last:border-0 hover:bg-accent/30 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-destructive/10">
                        <UserMinus className="h-4 w-4 text-destructive" />
                      </div>
                      <span className="font-medium text-foreground">{r.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{r.department}</td>
                  <td className="px-4 py-3 text-muted-foreground">{r.lastDate}</td>
                  <td className="px-4 py-3 text-muted-foreground">{r.reason}</td>
                  <td className="px-4 py-3">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      r.status === 'completed' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'
                    }`}>{r.status}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      r.exitInterview ? 'bg-success/10 text-success' : 'bg-accent text-muted-foreground'
                    }`}>{r.exitInterview ? 'Done' : 'Pending'}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManagerOffboarding;
