import { NavLink, Route, Routes } from "react-router";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/Homepage";
import NewHabitPage from "./pages/NewHabitPage";
import NotFoundPage from "./pages/NotFoundPage";
export default function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <strong>My Daily Habits</strong>
        <nav aria-label="Navegação principal">
          <NavLink to="/" end>Hoje</NavLink>
          <NavLink to="/novo">Novo hábito</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
        </nav>
      </header>
      <main className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/novo" element={<NewHabitPage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}