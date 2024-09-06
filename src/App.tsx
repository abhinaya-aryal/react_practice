import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import Router from "./router.tsx";

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <Router />
  </StrictMode>,
);
