export default function AuthLayout({ children }) {
  return (
    <div>
      {/* Render Header */}
      <header>
      </header>

      {/* Render Inner Layout */}
      <main>
        <h3>Inner Layout</h3>
        {children}
      </main>

      {/* Render Footer */}
      <footer> 
      </footer>
    </div>
  );
}