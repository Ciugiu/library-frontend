import api from './api';
import { Author, CreateAuthor } from '../types';

export const authorService = {
  // Get all authors
  async getAll(): Promise<Author[]> {
    const response = await api.get<Author[]>('/Authors');
    return response.data;
  },

  // Get author by ID
  async getById(id: number): Promise<Author> {
    const response = await api.get<Author>(`/Authors/${id}`);
    return response.data;
  },

  // Create new author
  async create(author: CreateAuthor): Promise<Author> {
    const response = await api.post<Author>('/Authors', author);
    return response.data;
  },

  // Delete author
  async delete(id: number): Promise<void> {
    await api.delete(`/Authors/${id}`);
  },
};
