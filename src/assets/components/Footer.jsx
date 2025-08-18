import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Christian Wilhelm.</p>
    </footer>
  );
}