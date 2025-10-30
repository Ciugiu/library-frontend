import api from './api';
import { User, CreateUser } from '../types';

export const userService = {
  // Get all users
  async getAll(): Promise<User[]> {
    const response = await api.get<User[]>('/Users');
    return response.data;
  },

  // Get user by ID
  async getById(id: number): Promise<User> {
    const response = await api.get<User>(`/Users/${id}`);
    return response.data;
  },

  // Create new user
  async create(user: CreateUser): Promise<User> {
    const response = await api.post<User>('/Users', user);
    return response.data;
  },

  // Delete user
  async delete(id: number): Promise<void> {
    await api.delete(`/Users/${id}`);
  },
};
