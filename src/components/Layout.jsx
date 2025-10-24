import React from "react";
import Header from "./Header.jsx";
import SideMenuButton from "./SideMenuButton.jsx";

export default function SiteLayout({ children }) {

    const [navOpen, setNavOpen] = React.useState(false);

    return (
        <div className="page">
        <div className="app">
            
            {/* Mobile top bar */}
            <div className="navbar">
            <button className="button" onClick={() => setNavOpen(v => !v)}>
                {navOpen ? "Hide Menu" : "Show Menu"}
            </button>
            </div>

            {/* Sidebar (collapsible on mobile) */}
            <aside className={`sidebar ${navOpen ? "" : "collapsed"}`}>
            <div className="brand">Prism</div>
            <nav className="nav" aria-label="Primary">
                <SideMenuButton buttonName={"Dashboard"} buttonActive={true} />
                <SideMenuButton buttonName={"Contact"} />
            </nav>
            </aside>

            {/* Main panel (centered layout via page grid) */}
            <main className="main" role="main">

            <Header />

            <section className="section">
                <div className="card">
                    <p>
                        This is <strong>Prism</strong> — a tiny React skeleton designed for quick POCs and
                        lightweight experiments. It provides a minimal, responsive layout you can expand into
                        larger setups like <em>Beam</em> or <em>Lighthouse</em>.
                    </p>
                </div>
            </section>
            </main>
            <footer>
                <p>
                    © 2025 React Skeleton - Prism <br/>
                    <small>By Jonathan Miller</small>
                </p>       
            </footer>
        </div>
        </div>
    );
}