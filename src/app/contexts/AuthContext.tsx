import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  phone: string | null;
  login: (phone: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [phone, setPhone] = useState<string | null>(null);

  // Check if user is already authenticated on mount
  useEffect(() => {
    const storedAuth = localStorage.getItem("sportstik_auth");
    if (storedAuth) {
      const { phone } = JSON.parse(storedAuth);
      setPhone(phone);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (phone: string) => {
    setPhone(phone);
    setIsAuthenticated(true);
    localStorage.setItem("sportstik_auth", JSON.stringify({ phone }));
  };

  const logout = () => {
    setPhone(null);
    setIsAuthenticated(false);
    localStorage.removeItem("sportstik_auth");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, phone, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
