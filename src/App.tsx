import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./components/LandingPage";
import BooksList from "./pages/BooksList";
import AddBook from "./pages/AddBook";
import BookDetails from "./pages/BookDetails";
import AuthorsList from "./pages/AuthorsList";
import AddAuthor from "./pages/AddAuthor";
import CategoriesList from "./pages/CategoriesList";
import AddCategory from "./pages/AddCategory";
import UsersList from "./pages/UsersList";
import AddUser from "./pages/AddUser";
import BorrowsPage from "./pages/BorrowsPage";

/**
 * Main App Component
 *
 * This is the root component that sets up routing for the entire application.
 * The landing page is preserved as the home route, and all CRUD pages are accessible via navigation.
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />

          {/* Books Routes */}
          <Route path="books" element={<BooksList />} />
          <Route path="books/add" element={<AddBook />} />
          <Route path="books/:id" element={<BookDetails />} />

          {/* Authors Routes */}
          <Route path="authors" element={<AuthorsList />} />
          <Route path="authors/add" element={<AddAuthor />} />

          {/* Categories Routes */}
          <Route path="categories" element={<CategoriesList />} />
          <Route path="categories/add" element={<AddCategory />} />

          {/* Users Routes */}
          <Route path="users" element={<UsersList />} />
          <Route path="users/add" element={<AddUser />} />

          {/* Borrows Routes */}
          <Route path="borrows" element={<BorrowsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
