import { useState } from 'react';
import { Plus, Trash2, ShieldCheck } from 'lucide-react';
import { toast } from 'sonner';

const initialAdmins = [
  { id: '1', name: 'Super Admin', email: 'superadmin@gmail.com', addedOn: '2025-01-01' },
  { id: '2', name: 'Admin Two', email: 'admin2@shnoor.com', addedOn: '2025-06-15' },
];

const AdminManagement = () => {
  const [admins, setAdmins] = useState(initialAdmins);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: '', email: '' });

  const handleAdd = () => {
    if (!form.name || !form.email) { toast.error('Fill all fields'); return; }
    setAdmins([...admins, { id: Date.now().toString(), ...form, addedOn: new Date().toISOString().split('T')[0] }]);
    setShowModal(false);
    setForm({ name: '', email: '' });
    toast.success('Admin added');
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Admin Management</h1>
          <p className="text-sm text-muted-foreground">Manage super admin accounts</p>
        </div>
        <button onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          <Plus className="h-4 w-4" /> Add Admin
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {admins.map(a => (
          <div key={a.id} className="glass-card p-5">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{a.name}</p>
                  <p className="text-xs text-muted-foreground">{a.email}</p>
                </div>
              </div>
              <button onClick={() => { setAdmins(admins.filter(x => x.id !== a.id)); toast.success('Admin removed'); }}
                className="rounded-lg p-1.5 text-destructive hover:bg-destructive/10">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">Added: {a.addedOn}</p>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/20 backdrop-blur-sm" onClick={() => setShowModal(false)}>
          <div className="w-full max-w-md rounded-xl border bg-card p-6 shadow-xl" onClick={e => e.stopPropagation()}>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Add Admin</h3>
            <div className="space-y-3">
              <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring" placeholder="Full name" />
              <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring" placeholder="Email" />
            </div>
            <div className="mt-6 flex gap-3 justify-end">
              <button onClick={() => setShowModal(false)} className="rounded-lg border px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-accent">Cancel</button>
              <button onClick={handleAdd} className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">Add</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminManagement;
