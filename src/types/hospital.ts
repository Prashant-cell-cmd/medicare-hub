// Hospital Management System Types

export type UserRole = 'admin' | 'doctor' | 'receptionist' | 'patient';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  phone?: string;
  avatar?: string;
  createdAt: Date;
}

export interface Patient {
  id: string;
  patientId: string; // Unique patient ID (e.g., PAT-2024-001)
  userId: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: Date;
  gender: 'male' | 'female' | 'other';
  bloodGroup?: string;
  address: Address;
  emergencyContact: EmergencyContact;
  medicalHistory?: MedicalHistory[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

export interface EmergencyContact {
  name: string;
  relationship: string;
  phone: string;
}

export interface Department {
  id: string;
  name: string;
  description?: string;
  headDoctorId?: string;
  isActive: boolean;
}

export interface Doctor {
  id: string;
  userId: string;
  name: string;
  email: string;
  phone: string;
  specialization: string;
  departmentId: string;
  qualification: string;
  experience: number; // years
  consultationFee: number;
  availability: DoctorAvailability[];
  isActive: boolean;
  createdAt: Date;
}

export interface DoctorAvailability {
  dayOfWeek: number; // 0-6, Sunday to Saturday
  startTime: string; // HH:mm
  endTime: string; // HH:mm
  slotDuration: number; // minutes
}

export interface Appointment {
  id: string;
  appointmentNumber: string; // APT-2024-001
  patientId: string;
  doctorId: string;
  departmentId: string;
  date: Date;
  timeSlot: string;
  status: AppointmentStatus;
  type: 'consultation' | 'follow-up' | 'emergency';
  reason: string;
  notes?: string;
  diagnosis?: string;
  prescription?: Prescription;
  createdAt: Date;
  updatedAt: Date;
}

export type AppointmentStatus = 'pending' | 'approved' | 'completed' | 'cancelled' | 'no-show';

export interface Prescription {
  id: string;
  appointmentId: string;
  doctorId: string;
  patientId: string;
  medications: Medication[];
  instructions?: string;
  followUpDate?: Date;
  createdAt: Date;
}

export interface Medication {
  name: string;
  dosage: string;
  frequency: string;
  duration: string;
  instructions?: string;
}

export interface MedicalHistory {
  id: string;
  patientId: string;
  condition: string;
  diagnosedDate?: Date;
  status: 'active' | 'resolved' | 'chronic';
  notes?: string;
}

export interface Bill {
  id: string;
  billNumber: string; // BILL-2024-001
  patientId: string;
  appointmentId?: string;
  items: BillItem[];
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
  status: 'pending' | 'paid' | 'partial' | 'cancelled';
  paymentMethod?: 'cash' | 'card' | 'upi' | 'insurance';
  createdAt: Date;
  paidAt?: Date;
}

export interface BillItem {
  description: string;
  quantity: number;
  unitPrice: number;
  amount: number;
  category: 'consultation' | 'lab' | 'pharmacy' | 'procedure' | 'room' | 'other';
}

export interface LabTest {
  id: string;
  patientId: string;
  doctorId: string;
  testName: string;
  testDate: Date;
  result?: string;
  status: 'pending' | 'in-progress' | 'completed';
  reportUrl?: string;
  createdAt: Date;
}

// Dashboard Stats
export interface DashboardStats {
  totalPatients: number;
  totalDoctors: number;
  todayAppointments: number;
  pendingAppointments: number;
  completedAppointments: number;
  totalRevenue: number;
  monthlyRevenue: number;
}

export interface ChartData {
  name: string;
  value: number;
}
