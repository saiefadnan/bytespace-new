import { useState } from 'react';
import { useAuthContext } from '../../../context';
import { authService } from '../services/authService';
import type { LoginCredentials, RegisterCredentials } from '../types';

export function useAuth() {
  const { user, isAuthenticated, login: setContextUser, logout } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (credentials: LoginCredentials) => {
    setLoading(true);
    setError(null);
    try {
      const res = await authService.login(credentials);
      if (res.success && res.user) {
        setContextUser(res.user.email, res.user.name);
        return true;
      }
      setError(res.error || 'Login failed');
      return false;
    } catch {
      setError('An unexpected error occurred.');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const register = async (credentials: RegisterCredentials) => {
    setLoading(true);
    setError(null);
    try {
      const res = await authService.register(credentials);
      if (res.success && res.user) {
        setContextUser(res.user.email, res.user.name);
        return true;
      }
      setError(res.error || 'Registration failed');
      return false;
    } catch {
      setError('An unexpected error occurred.');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    isAuthenticated,
    loading,
    error,
    login,
    register,
    logout,
  };
}
