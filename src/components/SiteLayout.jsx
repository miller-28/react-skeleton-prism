import Button from "./Button.jsx";
import Header from "./Header.jsx";

export default function SiteLayout({ children }) {
    return (
        <div className="site-layout">       
            <Header />    
            <main>
                <p>This is a simple React application setup using Vite.</p>
                <p>Get started by editing <code>src/main.jsx</code> and <code>src/components/SiteLayout.jsx</code>.</p>
                <Button />
                {children}
            </main>
            <footer>
                <p>© 2025 React Skeleton - Prism</p>       
            </footer>
        </div>
    );
}