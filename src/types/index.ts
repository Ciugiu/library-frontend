// Author types
export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

export interface CreateAuthor {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

// Book types
export interface Book {
  id: number;
  title: string;
  authorId: number;
  authorName: string;
  categoryId?: number;
  categoryName?: string;
  language?: string;
  publishedYear?: number;
  isbn?: string;
  coverUrl?: string;
}

export interface CreateBook {
  title: string;
  authorId: number;
  categoryId?: number;
  language?: string;
  publishedYear?: number;
  isbn?: string;
}

// Category types
export interface Category {
  id: number;
  name: string;
  description?: string;
}

export interface CreateCategory {
  name: string;
  description?: string;
}

// User types
export interface User {
  id: number;
  name: string;
  email: string;
  phoneNumber?: string;
  registrationDate: string;
}

export interface CreateUser {
  name: string;
  email: string;
  phoneNumber?: string;
}

// Borrow types
export interface Borrow {
  id: number;
  userId: number;
  userName: string;
  bookId: number;
  bookTitle: string;
  borrowDate: string;
  dueDate?: string;
  returnDate?: string;
  isReturned: boolean;
}

export interface CreateBorrow {
  userId: number;
  bookId: number;
  dueDate?: string;
}

export interface ReturnBook {
  returnDate?: string;
}

// Google Books API types
export interface GoogleBookVolume {
  volumeInfo?: {
    imageLinks?: {
      thumbnail?: string;
      smallThumbnail?: string;
    };
  };
}

export interface GoogleBooksResponse {
  items?: GoogleBookVolume[];
}
