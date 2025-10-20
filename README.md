# 📚 Library App - Parallax Landing Page

A beautiful, modern parallax landing page for a Library App, built with React, TypeScript, and Framer Motion. This project features smooth scroll animations, a book-themed aesthetic, and a fully responsive design.

## ✨ Features

- **Smooth Parallax Scrolling**: Multi-layered parallax effects using Framer Motion
- **Book/Library Aesthetic**: Warm neutral tones, elegant typography, and book-themed design
- **5 Main Sections**:
  - **Hero**: Eye-catching landing with parallax background and "Enter Library" CTA
  - **About**: Description of the library app's mission
  - **Features**: Three animated cards showcasing key features
  - **Team**: Grid layout displaying team members
  - **Contact**: Functional contact form with social media links
- **Responsive Design**: Optimized for all screen sizes
- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS, Framer Motion
- **Clean Code**: Well-commented, organized components following best practices

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository** (or navigate to the project folder):

   ```bash
   cd parallax-site
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

4. **Open your browser** and visit:
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
parallax-site/
├── src/
│   ├── components/
│   │   ├── Hero.tsx          # Hero section with parallax background
│   │   ├── About.tsx         # About section with scroll animations
│   │   ├── Features.tsx      # Features section with cards
│   │   ├── Team.tsx          # Team members grid
│   │   └── Contact.tsx       # Contact form and footer
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # Application entry point
│   └── index.css             # Global styles and Tailwind config
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
└── README.md                 # This file
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

### Typography

- **Headings**: Playfair Display (serif) - Elegant, book-style font
- **Body Text**: Inter (sans-serif) - Clean, readable

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool with SWC compiler
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for smooth parallax effects
- **UI Avatars API** - Placeholder profile images

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🎯 Key Components

### Hero Section

- Parallax background layers with different scroll speeds
- Animated floating book emojis
- Fade-out effect on scroll
- "Enter Library" button with smooth scroll to About section

### About Section

- Scroll-triggered opacity animations
- Parallax text movement
- Mission statement with quote

### Features Section

- Three feature cards with different parallax speeds
- Hover effects with scale and shadow
- Icons for Search, Manage Loans, and Track Progress

### Team Section

- Responsive grid layout
- Team member cards with hover animations
- Placeholder avatars from UI Avatars API

### Contact Section

- Functional contact form with validation
- Success message animation
- Social media links with interactive hover effects
- Footer with copyright information

## 🔧 Customization

### Changing Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  cream: '#F5F5DC',
  beige: '#F5DEB3',
  // Add your custom colors here
}
```

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `App.tsx`
3. Follow the existing component structure for consistency

### Modifying Parallax Effects

Adjust parallax speeds in each component by modifying the `useTransform` values:

```typescript
const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
// Change '50%' to make it faster or slower
```

## 🌐 Integration with Backend

This landing page is designed to be integrated with a .NET/C# backend. To connect:

1. Update the form submission handler in `Contact.tsx`
2. Replace `console.log` with an API call to your backend
3. Add authentication flow for the "Enter Library" button
4. Connect to your book database and user management system

Example API integration:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const response = await fetch("https://your-api.com/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    // Handle response
  } catch (error) {
    // Handle error
  }
};
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🐛 Known Issues

- TypeScript errors will appear until dependencies are installed
- CSS @apply warnings are expected (Tailwind directives)

## 🤝 Contributing

This project is designed as a class assignment. Feel free to:

- Add new sections
- Enhance animations
- Improve accessibility
- Optimize performance

## 📄 License

This project is created for educational purposes as part of a Front-End Framework class assignment.

## 🎓 Academic Context

This parallax landing page serves as the welcome screen for a Library Management App project:

- **Backend**: Microsoft .NET ecosystem (C#)
- **Frontend**: React + TypeScript (this project)
- **Course**: Front-End Framework Development
- **Purpose**: Demonstrate modern web development skills, parallax effects, and component-based architecture

## 📞 Support

For questions or issues:

- Check the code comments in each component
- Review Framer Motion documentation: https://www.framer.com/motion/
- Tailwind CSS documentation: https://tailwindcss.com/docs

## 🎉 Acknowledgments

- Design inspiration from classic library aesthetics
- Framer Motion for powerful animation capabilities
- UI Avatars for placeholder profile images
- Google Fonts for beautiful typography

---

**Built with ❤️ for book lovers everywhere**
