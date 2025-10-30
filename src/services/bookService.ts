import api from './api';
import { Book, CreateBook, GoogleBooksResponse } from '../types';

export const bookService = {
  // Get all books
  async getAll(): Promise<Book[]> {
    const response = await api.get<Book[]>('/Books');
    return response.data;
  },

  // Get book by ID
  async getById(id: number): Promise<Book> {
    const response = await api.get<Book>(`/Books/${id}`);
    return response.data;
  },

  // Create new book
  async create(book: CreateBook): Promise<Book> {
    const response = await api.post<Book>('/Books', book);
    return response.data;
  },

  // Delete book
  async delete(id: number): Promise<void> {
    await api.delete(`/Books/${id}`);
  },

  // Fetch book cover from Google Books API using ISBN
  async fetchCoverByISBN(isbn: string): Promise<string | null> {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`
      );
      const data: GoogleBooksResponse = await response.json();

      if (data.items && data.items.length > 0) {
        const imageLinks = data.items[0].volumeInfo?.imageLinks;
        return imageLinks?.thumbnail || imageLinks?.smallThumbnail || null;
      }
      return null;
    } catch (error) {
      console.error('Error fetching book cover:', error);
      return null;
    }
  },
};
