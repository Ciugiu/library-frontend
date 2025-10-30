import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { bookService } from "../services/bookService";
import { authorService } from "../services/authorService";
import { categoryService } from "../services/categoryService";
import { CreateBook, Author, Category } from "../types";
import toast from "react-hot-toast";
import LoadingSpinner from "../components/LoadingSpinner";

const AddBook = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loadingData, setLoadingData] = useState(true);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);

  const [formData, setFormData] = useState<CreateBook & { isbn?: string }>({
    title: "",
    authorId: 0,
    categoryId: undefined,
    language: "",
    publishedYear: undefined,
    isbn: "",
  });

  useEffect(() => {
    loadFormData();
  }, []);

  const loadFormData = async () => {
    try {
      const [authorsData, categoriesData] = await Promise.all([
        authorService.getAll(),
        categoryService.getAll(),
      ]);
      setAuthors(authorsData);
      setCategories(categoriesData);
    } catch (err) {
      toast.error("Failed to load form data");
    } finally {
      setLoadingData(false);
    }
  };

  const handleISBNBlur = async () => {
    if (formData.isbn && formData.isbn.length >= 10) {
      const cover = await bookService.fetchCoverByISBN(formData.isbn);
      if (cover) {
        setCoverPreview(cover);
        toast.success("Book cover found!");
      } else {
        setCoverPreview(null);
        toast.error("No cover found for this ISBN");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      toast.error("Title is required");
      return;
    }

    if (!formData.authorId || formData.authorId === 0) {
      toast.error("Please select an author");
      return;
    }

    try {
      setLoading(true);
      await bookService.create(formData);
      toast.success("Book added successfully");
      navigate("/books");
    } catch (err) {
      toast.error("Failed to add book");
    } finally {
      setLoading(false);
    }
  };

  if (loadingData) return <LoadingSpinner />;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <button
          onClick={() => navigate("/books")}
          className="text-indigo-600 hover:text-indigo-700 flex items-center gap-2 mb-4"
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
        <h1 className="text-3xl font-bold text-gray-900">Add New Book</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter book title"
              maxLength={255}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ISBN
            </label>
            <input
              type="text"
              value={formData.isbn}
              onChange={(e) =>
                setFormData({ ...formData, isbn: e.target.value })
              }
              onBlur={handleISBNBlur}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter ISBN (for automatic cover)"
            />
            {coverPreview && (
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">Cover Preview:</p>
                <img
                  src={coverPreview}
                  alt="Cover preview"
                  className="h-48 rounded-lg shadow-sm"
                />
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Author <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.authorId}
              onChange={(e) =>
                setFormData({ ...formData, authorId: Number(e.target.value) })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value={0}>Select an author</option>
              {authors.map((author) => (
                <option key={author.id} value={author.id}>
                  {author.firstName} {author.lastName}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              value={formData.categoryId || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  categoryId: e.target.value
                    ? Number(e.target.value)
                    : undefined,
                })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="">Select a category (optional)</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Language
            </label>
            <input
              type="text"
              value={formData.language}
              onChange={(e) =>
                setFormData({ ...formData, language: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="e.g., English"
              maxLength={50}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Published Year
            </label>
            <input
              type="number"
              value={formData.publishedYear || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  publishedYear: e.target.value
                    ? Number(e.target.value)
                    : undefined,
                })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="e.g., 2024"
              min={1000}
              max={new Date().getFullYear()}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Adding..." : "Add Book"}
            </button>
            <button
              type="button"
              onClick={() => navigate("/books")}
              className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
