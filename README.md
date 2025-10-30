# 📚 Library Management System - Frontend

A comprehensive full-stack library management application with a beautiful React frontend and C# ASP.NET Core backend. This project features a modern UI with complete CRUD operations for books, authors, categories, users, and borrows, plus Google Books API integration for automatic book cover fetching.

## ✨ Features

### Landing Page
- **Smooth Parallax Scrolling**: Multi-layered parallax effects using Framer Motion
- **Book/Library Aesthetic**: Warm neutral tones, elegant typography, and book-themed design
- **5 Main Sections**: Hero, About, Features, Team, and Contact

### Library Management System
- **Books Management**
  - Create, read, and delete books
  - Google Books API integration for automatic cover fetching via ISBN
  - Grid layout with book covers and metadata
  - Detailed book view with author and category information
  
- **Authors Management**
  - CRUD operations for authors
  - Table view with avatar initials
  - Email and age validation
  
- **Categories Management**
  - CRUD operations for categories
  - Card grid layout with descriptions
  
- **Users Management**
  - CRUD operations for library users
  - Table display with registration dates
  - Phone number validation
  
- **Borrows Management**
  - Create and manage book borrows
  - Return functionality with timestamps
  - Overdue detection and status tracking
  - Status badges (Active/Overdue/Returned)

### Technical Features
- **Responsive Design**: Optimized for all screen sizes
- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS, Framer Motion
- **API Integration**: Axios with interceptors and error handling
- **Toast Notifications**: Real-time feedback with react-hot-toast
- **Type Safety**: Full TypeScript implementation
- **Clean Architecture**: Service layer pattern with DTOs

## 🚀 Getting Started

### Prerequisites

- Bun (v1.3 or higher) - or Node.js (v18+)
- Backend API running (Azure deployment or local)

### Installation

1. **Clone the repository**:

   ```bash
   cd library-frontend
   ```

2. **Install dependencies** (using Bun):

   ```bash
   bun install
   ```

3. **Configure environment variables**:

   Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```

   Update the `.env` file with your API URL:
   ```properties
   VITE_API_URL=https://your-backend-url.com/api
   ```

4. **Start the development server**:

   ```bash
   bun run dev
   ```

5. **Open your browser** and visit:
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
library-frontend/
├── src/
│   ├── components/
│   │   ├── Hero.tsx              # Hero section with parallax background
│   │   ├── About.tsx             # About section with scroll animations
│   │   ├── Features.tsx          # Features section with cards
│   │   ├── Team.tsx              # Team members grid
│   │   ├── Contact.tsx           # Contact form and footer
│   │   ├── LandingPage.tsx       # Combined landing page component
│   │   ├── Layout.tsx            # Main layout with navigation
│   │   ├── LoadingSpinner.tsx    # Reusable loading component
│   │   └── ErrorMessage.tsx      # Reusable error display
│   ├── pages/
│   │   ├── BooksList.tsx         # Books grid with covers
│   │   ├── AddBook.tsx           # Create book form with ISBN
│   │   ├── BookDetails.tsx       # Detailed book view
│   │   ├── AuthorsList.tsx       # Authors table
│   │   ├── AddAuthor.tsx         # Create author form
│   │   ├── CategoriesList.tsx    # Categories grid
│   │   ├── AddCategory.tsx       # Create category form
│   │   ├── UsersList.tsx         # Users table
│   │   ├── AddUser.tsx           # Create user form
│   │   └── BorrowsPage.tsx       # Borrows management
│   ├── services/
│   │   ├── api.ts                # Axios instance configuration
│   │   ├── bookService.ts        # Books API + Google Books
│   │   ├── authorService.ts      # Authors API
│   │   ├── categoryService.ts    # Categories API
│   │   ├── userService.ts        # Users API
│   │   └── borrowService.ts      # Borrows API
│   ├── types/
│   │   └── index.ts              # TypeScript interfaces/DTOs
│   ├── App.tsx                   # Router configuration
│   ├── main.tsx                  # Application entry point
│   ├── index.css                 # Global styles and Tailwind
│   └── vite-env.d.ts             # Environment variables types
├── public/                       # Static assets
├── .env                          # Environment variables (gitignored)
├── .env.example                  # Environment variables template
├── index.html                    # HTML template
├── package.json                  # Dependencies and scripts
├── bun.lock                      # Bun lockfile
├── tsconfig.json                 # TypeScript configuration
├── vite.config.ts                # Vite configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── postcss.config.js             # PostCSS configuration
└── README.md                     # This file
```

## 🔧 API Configuration

### Environment Variables

The app uses environment variables for API configuration:

```properties
# .env
VITE_API_URL=https://your-backend-url.com/api
```

**Important**: 
- Environment variables must be prefixed with `VITE_` to be exposed to the client
- Never commit `.env` file to git (use `.env.example` as template)
- Update `VITE_API_URL` to point to your backend deployment

### CORS Configuration

The backend must have CORS enabled to allow frontend access. In the C# backend `Program.cs`:

```csharp
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

app.UseCors("AllowFrontend");
```

### Axios Interceptors

The app includes automatic error handling via axios interceptors:

```typescript
// services/api.ts
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || 'An error occurred';
    toast.error(message);
    return Promise.reject(error);
  }
);
```

## 🎨 Design System

### Colors

The project uses a warm, book-inspired color palette:

- **Cream**: `#F5F5DC` - Background
- **Beige**: `#F5DEB3` - Accents
- **Parchment**: `#FFF8DC` - Paper texture
- **Light Brown**: `#D2B48C` - Secondary elements
- **Warm Brown**: `#8B7355` - Interactive elements
- **Dark Brown**: `#654321` - Text and buttons
- **Indigo**: Tailwind's indigo palette - Primary actions

### Typography

- **Headings**: Playfair Display (serif) - Elegant, book-style font
- **Body Text**: Inter (sans-serif) - Clean, readable

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (sm-lg)
- **Desktop**: > 1024px (lg+)
- **Wide Desktop**: > 1280px (xl+)

## 🔄 Backend Integration

### Backend API Endpoints

The frontend expects these REST endpoints:

**Books**
- `GET /api/Books` - Get all books
- `GET /api/Books/{id}` - Get book by ID
- `POST /api/Books` - Create book
- `DELETE /api/Books/{id}` - Delete book

**Authors**
- `GET /api/Authors` - Get all authors
- `GET /api/Authors/{id}` - Get author by ID
- `POST /api/Authors` - Create author
- `DELETE /api/Authors/{id}` - Delete author

**Categories**
- `GET /api/Categories` - Get all categories
- `GET /api/Categories/{id}` - Get category by ID
- `POST /api/Categories` - Create category
- `DELETE /api/Categories/{id}` - Delete category

**Users**
- `GET /api/Users` - Get all users
- `GET /api/Users/{id}` - Get user by ID
- `POST /api/Users` - Create user
- `DELETE /api/Users/{id}` - Delete user

**Borrows**
- `GET /api/Borrows` - Get all borrows
- `GET /api/Borrows/{id}` - Get borrow by ID
- `POST /api/Borrows` - Create borrow
- `PUT /api/Borrows/{id}/return` - Return a borrow
- `DELETE /api/Borrows/{id}` - Delete borrow

### DTOs (Data Transfer Objects)

TypeScript interfaces match backend C# DTOs:

```typescript
interface Book {
  id: number;
  title: string;
  isbn: string;
  publicationDate: string;
  availableCopies: number;
  authorId: number;
  categoryId: number;
  author?: Author;
  category?: Category;
  coverUrl?: string;
}

interface CreateBook {
  title: string;
  isbn: string;
  publicationDate: string;
  availableCopies: number;
  authorId: number;
  categoryId: number;
}
```

## 🛠️ Technologies Used

### Core
- **React 18.3.1** - UI library
- **TypeScript 5.9.3** - Type-safe JavaScript
- **Vite 5.4.20** - Fast build tool with SWC compiler
- **Bun 1.3.1** - Fast JavaScript runtime and package manager

### UI & Styling
- **Tailwind CSS 3.4.18** - Utility-first CSS framework
- **Framer Motion 10.18.0** - Animation library for smooth effects
- **React Hot Toast 2.6.0** - Toast notifications

### Routing & HTTP
- **React Router DOM 7.9.5** - Client-side routing
- **Axios 1.13.1** - HTTP client with interceptors

### External APIs
- **Google Books API v1** - ISBN-based book cover fetching

## 📦 Available Scripts

Using Bun:
- `bun run dev` - Start development server (localhost:5173)
- `bun run build` - Build for production
- `bun run preview` - Preview production build locally
- `bun run lint` - Run ESLint

Using npm:
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Key Features Explained

### Google Books Integration

The app automatically fetches book covers from Google Books API when you enter an ISBN:

```typescript
// In AddBook form, on ISBN blur:
const handleISBNBlur = async () => {
  const coverUrl = await bookService.fetchCoverByISBN(formData.isbn);
  if (coverUrl) setCoverPreview(coverUrl);
};
```

No API key required for basic ISBN lookups!

### Service Layer Pattern

All API calls are centralized in service files:

```typescript
// services/bookService.ts
export const bookService = {
  getAll: () => api.get<Book[]>('/Books'),
  getById: (id: number) => api.get<Book>(`/Books/${id}`),
  create: (book: CreateBook) => api.post<Book>('/Books', book),
  delete: (id: number) => api.delete(`/Books/${id}`),
  fetchCoverByISBN: async (isbn: string) => { /* Google Books API */ }
};
```

### Toast Notifications

Real-time feedback using react-hot-toast:

```typescript
toast.success('Book added successfully!');
toast.error('Failed to delete author');
```

### Overdue Detection

Automatic overdue calculation in BorrowsPage:

```typescript
const isOverdue = (dueDate: string) => {
  return new Date(dueDate) < new Date();
};
```

## 🐛 Troubleshooting

### Common Issues

**CORS Errors**
- Ensure backend has CORS configured (see API Configuration section)
- Verify `VITE_API_URL` is correct in `.env`
- Check that backend is deployed and running

**Environment Variables Not Loading**
- Restart dev server after changing `.env`
- Ensure variables are prefixed with `VITE_`
- Check `.env` file is in root directory (not `/src`)

**Book Covers Not Loading**
- Google Books API may not have all ISBN numbers
- Check browser console for API errors
- Verify ISBN format is correct (10 or 13 digits)

**TypeScript Errors**
- Run `bun install` to ensure all dependencies are installed
- Check that all service files are created
- Verify `vite-env.d.ts` exists for environment variable types

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)

1. **Build the project**:
   ```bash
   bun run build
   ```

2. **Set environment variables** in your hosting platform:
   ```
   VITE_API_URL=https://your-backend-url.com/api
   ```

3. **Deploy** the `dist` folder

### Backend Requirements

- Backend must be deployed and accessible
- CORS must be configured to allow frontend origin
- All REST endpoints must be available

## 🤝 Contributing

### Development Workflow

1. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make changes and test**:
   ```bash
   bun run dev
   ```

3. **Commit with descriptive messages**:
   ```bash
   git commit -m "Add: Book cover preview functionality"
   ```

4. **Push to remote**:
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a pull request** on GitHub

### Code Style

- Use TypeScript for all new files
- Follow existing component structure
- Add comments for complex logic
- Use Tailwind CSS classes (avoid inline styles)
- Handle errors gracefully with try-catch and toast notifications

## 📄 License

This project is created for educational purposes as part of a Full-Stack Development course.

## 🎓 Academic Context

This library management system demonstrates:

- **Full-Stack Development**: React frontend + C# ASP.NET Core backend
- **RESTful API Design**: Complete CRUD operations
- **Modern Frontend Practices**: TypeScript, service layer, component composition
- **External API Integration**: Google Books API
- **State Management**: React hooks and controlled components
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **User Experience**: Loading states, error handling, toast notifications

### Technology Stack

- **Frontend**: React 18 + TypeScript + Vite + Tailwind CSS
- **Backend**: C# ASP.NET Core + Entity Framework + SQL Server
- **Deployment**: Azure (backend) + Vercel/Netlify (frontend)
- **Package Manager**: Bun (fast alternative to npm)

## 📞 Support

For questions or issues:

- Check the code comments in each component
- Review React documentation: https://react.dev/
- Tailwind CSS docs: https://tailwindcss.com/docs
- Framer Motion docs: https://www.framer.com/motion/
- React Router docs: https://reactrouter.com/

## 🎉 Acknowledgments

- Design inspiration from classic library aesthetics
- Framer Motion for powerful animation capabilities
- Google Books API for book cover integration
- UI Avatars for placeholder profile images
- Tailwind CSS for rapid UI development
- React community for excellent documentation

---

**Built with ❤️ for book lovers and library enthusiasts**
