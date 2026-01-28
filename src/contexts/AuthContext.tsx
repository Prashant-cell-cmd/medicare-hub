import React, { createContext, useContext, useState, useCallback } from 'react';
import { User, UserRole } from '@/types/hospital';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, role: UserRole) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo users for different roles
const demoUsers: Record<UserRole, User> = {
  admin: {
    id: 'admin-001',
    email: 'admin@hospital.com',
    name: 'Dr. Rajesh Kumar',
    role: 'admin',
    phone: '+91 98765 43210',
    createdAt: new Date(),
  },
  doctor: {
    id: 'doctor-001',
    email: 'doctor@hospital.com',
    name: 'Dr. Priya Sharma',
    role: 'doctor',
    phone: '+91 98765 43211',
    createdAt: new Date(),
  },
  receptionist: {
    id: 'receptionist-001',
    email: 'reception@hospital.com',
    name: 'Anita Verma',
    role: 'receptionist',
    phone: '+91 98765 43212',
    createdAt: new Date(),
  },
  patient: {
    id: 'patient-001',
    email: 'patient@hospital.com',
    name: 'Amit Patel',
    role: 'patient',
    phone: '+91 98765 43213',
    createdAt: new Date(),
  },
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback(async (email: string, password: string, role: UserRole): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For demo, accept any password and use the role to get demo user
    const demoUser = demoUsers[role];
    if (demoUser) {
      setUser({ ...demoUser, email });
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
