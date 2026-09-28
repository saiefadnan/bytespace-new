import type { LoginCredentials, RegisterCredentials, AuthResponse } from '../types';
import { mockFetch } from '../../../services';

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    return mockFetch<AuthResponse>({
      success: true,
      user: {
        id: 'usr-1',
        name: 'Alex Morgan',
        email: credentials.email,
      },
    }, 400);
  },

  async register(credentials: RegisterCredentials): Promise<AuthResponse> {
    return mockFetch<AuthResponse>({
      success: true,
      user: {
        id: 'usr-2',
        name: credentials.fullName,
        email: credentials.email,
      },
    }, 400);
  },
};
