import { attendanceRecords } from '@/utils/dummyData';

const ManagerSelfAttendance = () => (
  <div className="space-y-6 animate-fade-in">
    <div>
      <h1 className="text-2xl font-bold text-foreground">My Attendance</h1>
      <p className="text-sm text-muted-foreground">Your personal attendance history</p>
    </div>
    <div className="glass-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="border-b bg-accent/50">
            <th className="px-4 py-3 text-left font-medium text-foreground">Date</th>
            <th className="px-4 py-3 text-left font-medium text-foreground">Clock In</th>
            <th className="px-4 py-3 text-left font-medium text-foreground">Clock Out</th>
            <th className="px-4 py-3 text-left font-medium text-foreground">Hours</th>
            <th className="px-4 py-3 text-left font-medium text-foreground">Status</th>
          </tr></thead>
          <tbody>
            {attendanceRecords.slice(0, 3).map(a => (
              <tr key={a.id} className="border-b last:border-0 hover:bg-accent/30">
                <td className="px-4 py-3 text-muted-foreground">{a.date}</td>
                <td className="px-4 py-3 text-muted-foreground">{a.clockIn || '-'}</td>
                <td className="px-4 py-3 text-muted-foreground">{a.clockOut || '-'}</td>
                <td className="px-4 py-3 text-muted-foreground">{a.hours}h</td>
                <td className="px-4 py-3"><span className="rounded-full bg-success/10 px-2.5 py-0.5 text-xs font-medium text-success">{a.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default ManagerSelfAttendance;
