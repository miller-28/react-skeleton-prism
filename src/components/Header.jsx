export default function Header({ children }) {
    return (
        <header className="header">
            <h1>Welcome to React skeleton site - Prism</h1>
            <span className="muted">A minimal, centered panel layout</span>
            {children}
        </header>
    );
}