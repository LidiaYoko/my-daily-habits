import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App";
import { HabitsProvider } from "./context/HabitContext";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <HabitsProvider>
        <App />
      </HabitsProvider>
    </BrowserRouter>
  </StrictMode>,
);
