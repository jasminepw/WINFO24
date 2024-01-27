export default function Footer() {
    return (
      <footer className="w-screen fixed bottom-0 text-center p-4 text-sm font-semibold bg-dark-yellow text-primary-900 border-primary-200">
        <p>Me &copy; {new Date().getFullYear()}</p>
      </footer>
    );
  }