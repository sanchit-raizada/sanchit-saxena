import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./fontAwesome.ts";
import App from "./App.tsx";
import Layout from "./components/Layout.tsx";
import ThemeProvider from "./theme/themeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Layout>
        <App />
      </Layout>
    </ThemeProvider>
  </StrictMode>
);
