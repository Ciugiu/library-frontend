import api from './api';
import { Category, CreateCategory } from '../types';

export const categoryService = {
  // Get all categories
  async getAll(): Promise<Category[]> {
    const response = await api.get<Category[]>('/Categories');
    return response.data;
  },

  // Get category by ID
  async getById(id: number): Promise<Category> {
    const response = await api.get<Category>(`/Categories/${id}`);
    return response.data;
  },

  // Create new category
  async create(category: CreateCategory): Promise<Category> {
    const response = await api.post<Category>('/Categories', category);
    return response.data;
  },

  // Delete category
  async delete(id: number): Promise<void> {
    await api.delete(`/Categories/${id}`);
  },
};
