import React from "react";
import "./styles/styles.css";
import { createRoot } from "react-dom/client";
import SiteLayout from "./components/SiteLayout";

function App() {
  return (
    <>
      <SiteLayout>
        <p>this is place holder for children on <code>src/main.jsx</code></p>
      </SiteLayout>
    </>
  )
}

createRoot(document.getElementById("root")).render(<App />);