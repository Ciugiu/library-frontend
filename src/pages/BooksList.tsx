import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { bookService } from "../services/bookService";
import { Book } from "../types";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import toast from "react-hot-toast";

const BooksList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [bookCovers, setBookCovers] = useState<Record<number, string>>({});

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await bookService.getAll();
      setBooks(data);

      // Load book covers for books with ISBN
      data.forEach(async (book) => {
        if (book.isbn) {
          const cover = await bookService.fetchCoverByISBN(book.isbn);
          if (cover) {
            setBookCovers((prev) => ({ ...prev, [book.id]: cover }));
          }
        }
      });
    } catch (err) {
      setError("Failed to load books");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number, title: string) => {
    if (!window.confirm(`Are you sure you want to delete "${title}"?`)) {
      return;
    }

    try {
      await bookService.delete(id);
      toast.success("Book deleted successfully");
      loadBooks();
    } catch (err) {
      toast.error("Failed to delete book");
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Books</h1>
        <Link
          to="/books/add"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add Book
        </Link>
      </div>

      {books.length === 0 ? (
        <div className="text-center py-12">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No books</h3>
          <p className="mt-1 text-sm text-gray-500">
            Get started by adding a new book.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="aspect-[2/3] bg-gray-200 relative">
                {bookCovers[book.id] ? (
                  <img
                    src={bookCovers[book.id]}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{book.authorName}</p>
                {book.categoryName && (
                  <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full mb-2">
                    {book.categoryName}
                  </span>
                )}
                {book.publishedYear && (
                  <p className="text-xs text-gray-500">
                    Published: {book.publishedYear}
                  </p>
                )}
                <div className="flex gap-2 mt-4">
                  <Link
                    to={`/books/${book.id}`}
                    className="flex-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 px-3 py-2 rounded text-sm font-medium transition-colors text-center"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => handleDelete(book.id, book.title)}
                    className="bg-red-50 hover:bg-red-100 text-red-600 px-3 py-2 rounded text-sm font-medium transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BooksList;
