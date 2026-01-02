import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Suspense } from "react";
import "./index.css";
import App from "./App.jsx";
import "./components/i18n/I18n.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback="Loading...">
      <App />
    </Suspense>
  </StrictMode>
);
