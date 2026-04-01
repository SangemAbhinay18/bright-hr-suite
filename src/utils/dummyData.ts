export const companies = [
  { id: '1', name: 'TechCorp Solutions', plan: 'yearly', employees: 45, status: 'active', expiry: '2027-01-15' },
  { id: '2', name: 'Digital Dynamics', plan: 'monthly', employees: 22, status: 'active', expiry: '2026-05-01' },
  { id: '3', name: 'CloudWave Inc', plan: 'free', employees: 8, status: 'active', expiry: 'N/A' },
  { id: '4', name: 'DataPulse LLC', plan: 'yearly', employees: 67, status: 'active', expiry: '2026-12-20' },
  { id: '5', name: 'NextGen Labs', plan: 'monthly', employees: 15, status: 'expired', expiry: '2026-03-01' },
];

export const employees = [
  { id: '1', name: 'Alice Johnson', email: 'alice@tech.com', department: 'Engineering', position: 'Senior Developer', status: 'active', joinDate: '2023-03-15', salary: 8500, phone: '+1-555-0101' },
  { id: '2', name: 'Bob Smith', email: 'bob@tech.com', department: 'Marketing', position: 'Marketing Lead', status: 'active', joinDate: '2022-07-20', salary: 7200, phone: '+1-555-0102' },
  { id: '3', name: 'Carol White', email: 'carol@tech.com', department: 'HR', position: 'HR Specialist', status: 'active', joinDate: '2024-01-10', salary: 6500, phone: '+1-555-0103' },
  { id: '4', name: 'David Brown', email: 'david@tech.com', department: 'Engineering', position: 'Junior Developer', status: 'on-leave', joinDate: '2024-06-01', salary: 5500, phone: '+1-555-0104' },
  { id: '5', name: 'Eva Martinez', email: 'eva@tech.com', department: 'Design', position: 'UI/UX Designer', status: 'active', joinDate: '2023-11-05', salary: 7000, phone: '+1-555-0105' },
  { id: '6', name: 'Frank Lee', email: 'frank@tech.com', department: 'Sales', position: 'Sales Executive', status: 'active', joinDate: '2023-09-12', salary: 6800, phone: '+1-555-0106' },
];

export const attendanceRecords = [
  { id: '1', employeeId: '1', name: 'Alice Johnson', date: '2026-03-31', clockIn: '09:00', clockOut: '17:30', status: 'present', hours: 8.5 },
  { id: '2', employeeId: '2', name: 'Bob Smith', date: '2026-03-31', clockIn: '08:45', clockOut: '17:00', status: 'present', hours: 8.25 },
  { id: '3', employeeId: '3', name: 'Carol White', date: '2026-03-31', clockIn: '09:15', clockOut: '17:45', status: 'present', hours: 8.5 },
  { id: '4', employeeId: '4', name: 'David Brown', date: '2026-03-31', clockIn: '', clockOut: '', status: 'absent', hours: 0 },
  { id: '5', employeeId: '5', name: 'Eva Martinez', date: '2026-03-31', clockIn: '09:00', clockOut: '17:00', status: 'present', hours: 8 },
  { id: '6', employeeId: '6', name: 'Frank Lee', date: '2026-03-31', clockIn: '10:00', clockOut: '17:00', status: 'late', hours: 7 },
];

export const holidays = [
  { id: '1', name: 'New Year\'s Day', date: '2026-01-01', type: 'Public' },
  { id: '2', name: 'Martin Luther King Jr. Day', date: '2026-01-19', type: 'Public' },
  { id: '3', name: 'Presidents\' Day', date: '2026-02-16', type: 'Public' },
  { id: '4', name: 'Memorial Day', date: '2026-05-25', type: 'Public' },
  { id: '5', name: 'Independence Day', date: '2026-07-04', type: 'Public' },
  { id: '6', name: 'Labor Day', date: '2026-09-07', type: 'Public' },
  { id: '7', name: 'Thanksgiving', date: '2026-11-26', type: 'Public' },
  { id: '8', name: 'Christmas Day', date: '2026-12-25', type: 'Public' },
];

export const leaveRequests = [
  { id: '1', employeeId: '1', name: 'Alice Johnson', type: 'Sick Leave', from: '2026-03-20', to: '2026-03-21', days: 2, status: 'approved', reason: 'Medical appointment' },
  { id: '2', employeeId: '2', name: 'Bob Smith', type: 'Annual Leave', from: '2026-04-10', to: '2026-04-15', days: 5, status: 'pending', reason: 'Family vacation' },
  { id: '3', employeeId: '4', name: 'David Brown', type: 'Sick Leave', from: '2026-03-28', to: '2026-04-02', days: 4, status: 'approved', reason: 'Surgery recovery' },
  { id: '4', employeeId: '5', name: 'Eva Martinez', type: 'Personal Leave', from: '2026-04-05', to: '2026-04-05', days: 1, status: 'rejected', reason: 'Personal errand' },
];

export const expenses = [
  { id: '1', employeeId: '1', name: 'Alice Johnson', category: 'Travel', amount: 450, date: '2026-03-15', status: 'approved', description: 'Client meeting travel' },
  { id: '2', employeeId: '2', name: 'Bob Smith', category: 'Office Supplies', amount: 120, date: '2026-03-18', status: 'pending', description: 'Printer cartridges' },
  { id: '3', employeeId: '5', name: 'Eva Martinez', category: 'Software', amount: 299, date: '2026-03-20', status: 'approved', description: 'Figma annual license' },
  { id: '4', employeeId: '6', name: 'Frank Lee', category: 'Travel', amount: 680, date: '2026-03-22', status: 'pending', description: 'Conference attendance' },
];

export const policies = [
  { id: '1', title: 'Remote Work Policy', description: 'Employees may work remotely up to 3 days per week with manager approval. All remote workers must be available during core hours (10 AM - 4 PM).', category: 'Work Arrangement' },
  { id: '2', title: 'Leave Policy', description: 'Full-time employees are entitled to 20 days of annual leave, 10 days of sick leave, and 5 days of personal leave per calendar year.', category: 'Time Off' },
  { id: '3', title: 'Code of Conduct', description: 'All employees must maintain professional behavior, respect colleagues, and uphold the company\'s values of integrity, collaboration, and innovation.', category: 'General' },
  { id: '4', title: 'Data Security Policy', description: 'Employees must use strong passwords, enable 2FA, and never share confidential information outside authorized channels.', category: 'Security' },
  { id: '5', title: 'Expense Reimbursement', description: 'Business expenses must be submitted within 30 days with receipts. Expenses over $500 require pre-approval from department heads.', category: 'Finance' },
  { id: '6', title: 'Anti-Harassment Policy', description: 'The company maintains a zero-tolerance policy for harassment of any kind. All complaints will be investigated promptly and confidentially.', category: 'General' },
  { id: '7', title: 'Performance Review Policy', description: 'Performance reviews are conducted quarterly. Employees receive feedback on goals, achievements, and areas for improvement.', category: 'HR' },
  { id: '8', title: 'Travel Policy', description: 'Business travel must be pre-approved. Economy class for flights under 6 hours. Per diem rates apply based on destination.', category: 'Travel' },
  { id: '9', title: 'Social Media Policy', description: 'Employees should not share confidential company information on social media. Personal accounts must include a disclaimer when discussing work.', category: 'Communication' },
  { id: '10', title: 'Health & Safety Policy', description: 'All employees must comply with workplace safety guidelines. Report any hazards immediately to the facilities team.', category: 'Health' },
];

export const payslipData = {
  basicSalary: 7000,
  hra: 1500,
  conveyance: 500,
  medicalAllowance: 300,
  specialAllowance: 700,
  grossEarnings: 10000,
  providentFund: 840,
  professionalTax: 200,
  incomeTax: 1200,
  totalDeductions: 2240,
  netSalary: 7760,
};

export const offboardingRecords = [
  { id: '1', name: 'Mark Wilson', department: 'Engineering', lastDate: '2026-03-15', reason: 'Resignation', status: 'completed', exitInterview: true },
  { id: '2', name: 'Sarah Davis', department: 'Sales', lastDate: '2026-04-01', reason: 'Contract End', status: 'in-progress', exitInterview: false },
];
