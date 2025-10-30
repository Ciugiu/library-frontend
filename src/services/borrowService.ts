import api from './api';
import { Borrow, CreateBorrow, ReturnBook } from '../types';

export const borrowService = {
  // Get all borrows
  async getAll(): Promise<Borrow[]> {
    const response = await api.get<Borrow[]>('/Borrows');
    return response.data;
  },

  // Get borrow by ID
  async getById(id: number): Promise<Borrow> {
    const response = await api.get<Borrow>(`/Borrows/${id}`);
    return response.data;
  },

  // Get borrows by user ID
  async getByUserId(userId: number): Promise<Borrow[]> {
    const response = await api.get<Borrow[]>(`/Borrows/user/${userId}`);
    return response.data;
  },

  // Create new borrow
  async create(borrow: CreateBorrow): Promise<Borrow> {
    const response = await api.post<Borrow>('/Borrows', borrow);
    return response.data;
  },

  // Return book
  async returnBook(id: number, returnData?: ReturnBook): Promise<Borrow> {
    const response = await api.put<Borrow>(`/Borrows/${id}/return`, returnData || {});
    return response.data;
  },

  // Delete borrow
  async delete(id: number): Promise<void> {
    await api.delete(`/Borrows/${id}`);
  },
};
