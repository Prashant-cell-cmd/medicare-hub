import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";

// Pages
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import ReceptionistDashboard from "./pages/receptionist/ReceptionistDashboard";
import PatientDashboard from "./pages/patient/PatientDashboard";
import BookAppointmentPage from "./pages/appointments/BookAppointmentPage";
import PatientRegistrationPage from "./pages/patients/PatientRegistrationPage";
import PatientAppointmentsPage from "./pages/patient/PatientAppointmentsPage";
import PatientRecordsPage from "./pages/patient/PatientRecordsPage";
import PatientPrescriptionsPage from "./pages/patient/PatientPrescriptionsPage";
import PatientLabReportsPage from "./pages/patient/PatientLabReportsPage";
import PatientBillsPage from "./pages/patient/PatientBillsPage";
import PatientHistoryPage from "./pages/patient/PatientHistoryPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
}

function AppRoutes() {
  const { isAuthenticated, user } = useAuth();

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={isAuthenticated ? <Navigate to={`/${user?.role}`} /> : <LandingPage />} />
      <Route path="/login" element={isAuthenticated ? <Navigate to={`/${user?.role}`} /> : <LoginPage />} />

      {/* Admin Routes */}
      <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
      <Route path="/admin/patients" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
      <Route path="/admin/doctors" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
      <Route path="/admin/departments" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
      <Route path="/admin/appointments" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
      <Route path="/admin/billing" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
      <Route path="/admin/reports" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
      <Route path="/admin/settings" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />

      {/* Doctor Routes */}
      <Route path="/doctor" element={<ProtectedRoute><DoctorDashboard /></ProtectedRoute>} />
      <Route path="/doctor/appointments" element={<ProtectedRoute><DoctorDashboard /></ProtectedRoute>} />
      <Route path="/doctor/patients" element={<ProtectedRoute><DoctorDashboard /></ProtectedRoute>} />
      <Route path="/doctor/prescriptions" element={<ProtectedRoute><DoctorDashboard /></ProtectedRoute>} />
      <Route path="/doctor/records" element={<ProtectedRoute><DoctorDashboard /></ProtectedRoute>} />
      <Route path="/doctor/schedule" element={<ProtectedRoute><DoctorDashboard /></ProtectedRoute>} />

      {/* Receptionist Routes */}
      <Route path="/receptionist" element={<ProtectedRoute><ReceptionistDashboard /></ProtectedRoute>} />
      <Route path="/receptionist/register" element={<ProtectedRoute><PatientRegistrationPage /></ProtectedRoute>} />
      <Route path="/receptionist/appointments" element={<ProtectedRoute><ReceptionistDashboard /></ProtectedRoute>} />
      <Route path="/receptionist/book" element={<ProtectedRoute><BookAppointmentPage /></ProtectedRoute>} />
      <Route path="/receptionist/billing" element={<ProtectedRoute><ReceptionistDashboard /></ProtectedRoute>} />
      <Route path="/receptionist/patients" element={<ProtectedRoute><ReceptionistDashboard /></ProtectedRoute>} />

      {/* Patient Routes */}
      <Route path="/patient" element={<ProtectedRoute><PatientDashboard /></ProtectedRoute>} />
      <Route path="/patient/book" element={<ProtectedRoute><BookAppointmentPage /></ProtectedRoute>} />
      <Route path="/patient/appointments" element={<ProtectedRoute><PatientAppointmentsPage /></ProtectedRoute>} />
      <Route path="/patient/records" element={<ProtectedRoute><PatientRecordsPage /></ProtectedRoute>} />
      <Route path="/patient/prescriptions" element={<ProtectedRoute><PatientPrescriptionsPage /></ProtectedRoute>} />
      <Route path="/patient/lab-reports" element={<ProtectedRoute><PatientLabReportsPage /></ProtectedRoute>} />
      <Route path="/patient/bills" element={<ProtectedRoute><PatientBillsPage /></ProtectedRoute>} />
      <Route path="/patient/history" element={<ProtectedRoute><PatientHistoryPage /></ProtectedRoute>} />

      {/* Catch-all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
