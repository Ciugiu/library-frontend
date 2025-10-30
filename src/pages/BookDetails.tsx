import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { bookService } from "../services/bookService";
import { Book } from "../types";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [coverUrl, setCoverUrl] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      loadBook(Number(id));
    }
  }, [id]);

  const loadBook = async (bookId: number) => {
    try {
      setLoading(true);
      setError(null);
      const data = await bookService.getById(bookId);
      setBook(data);

      // Load cover if ISBN exists
      if (data.isbn) {
        const cover = await bookService.fetchCoverByISBN(data.isbn);
        if (cover) {
          setCoverUrl(cover);
        }
      }
    } catch (err) {
      setError("Failed to load book details");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!book) return <ErrorMessage message="Book not found" />;

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={() => navigate("/books")}
        className="text-indigo-600 hover:text-indigo-700 flex items-center gap-2 mb-6"
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
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Books
      </button>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 bg-gray-200">
            {coverUrl ? (
              <img
                src={coverUrl}
                alt={book.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full aspect-[2/3] flex items-center justify-center">
                <svg
                  className="w-24 h-24 text-gray-400"
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
          <div className="md:w-2/3 p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {book.title}
            </h1>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Author</h3>
                <p className="text-lg text-gray-900">{book.authorName}</p>
              </div>

              {book.categoryName && (
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Category
                  </h3>
                  <p className="text-lg text-gray-900">{book.categoryName}</p>
                </div>
              )}

              {book.language && (
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Language
                  </h3>
                  <p className="text-lg text-gray-900">{book.language}</p>
                </div>
              )}

              {book.publishedYear && (
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Published Year
                  </h3>
                  <p className="text-lg text-gray-900">{book.publishedYear}</p>
                </div>
              )}

              {book.isbn && (
                <div>
                  <h3 className="text-sm font-medium text-gray-500">ISBN</h3>
                  <p className="text-lg text-gray-900 font-mono">{book.isbn}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
