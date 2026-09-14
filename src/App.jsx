import { useContext, useEffect } from "react";
import "./App.css"; 
import HabitForm from "./components/HabitForm"; 
import HabitList from "./components/HabitList"; 
import Panel from "./components/Panel"; 
import { HabitContext } from "./context/HabitContext";
 
export default function App() {
 const habitsContext = useContext(HabitContext);

 if (!habitsContext) {
  throw new Error("App precisa estar dentro de HabitsProvider.");
 }

const { habits, completedCount } = habitsContext;
 
useEffect(() => {
 const previousTitle = document.title;
 document.title = `${completedCount}/${habits.length} hábitos concluídos`;
 
  return () => {
   document.title = previousTitle;
   };

  }, [completedCount, habits.length]);
 return (
  <main className="app">
    <header className="hero">
      <p className="eyebrow">MY DAILY HABITS</p>
      <h1>Pequenos hábitos, progresso visível.</h1>
      <p>{completedCount} de {habits.length} hábitos concluídos.</p>
    </header>

  <Panel title="Novo hábito">
    <HabitForm />
  </Panel>

  <Panel title="Hábitos de hoje">
    <HabitList />
  </Panel>
 </main>
 );
}
