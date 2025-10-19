import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Contact from "./components/Contact";

/**
 * Main App Component
 *
 * This is the root component that assembles all sections of the landing page.
 * Each section is a separate component for better organization and reusability.
 */
function App() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Features />
      <Contact />
    </main>
  );
}

export default App;
