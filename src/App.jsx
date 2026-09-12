import { useEffect, useState } from "react"; 
import "./App.css"; 
import HabitForm from "./components/HabitForm"; 
import HabitList from "./components/HabitList"; 
import Panel from "./components/Panel"; 
import { initialHabits } from "./data/habits"; 
 
const STORAGE_KEY = "my-daily-habits:habits"; 
 
function loadHabits() { 
  const savedHabits = localStorage.getItem(STORAGE_KEY); 
 
  if (!savedHabits) {
    return initialHabits; 
  }

  try { 
    const parsedHabits = JSON.parse(savedHabits); 
    return Array.isArray(parsedHabits) 
    ? parsedHabits : initialHabits; 
  } catch { 
    return initialHabits; 
  } 
} 
 
export default function App() { 
  const [habits, setHabits] = useState(loadHabits); 
 
  const completedCount = habits.filter( 
    (habit) => habit.completed, 
  ).length; 
 
  useEffect(() => { 
    localStorage.setItem(
      STORAGE_KEY, 
      JSON.stringify(habits)); 
  }, [habits]); 
 
  useEffect(() => { 
    const previousTitle = document.title; 
    document.title = `${completedCount}/${habits.length} hábitos concluídos`; 
 
    return () => { 
      document.title = previousTitle; 
    }; 
  }, [completedCount, habits.length]); 
 
  function handleAddHabit(newHabit) { 
    setHabits((current) => [...current, newHabit]); 
  } 
 
  function handleToggleHabit(habitId) { 
    setHabits((current) => 
      current.map((habit) => 
        habit.id === habitId 
          ? { ...habit, completed: !habit.completed } 
          : habit, 
      ), 
    ); 
  } 
 
  return ( 
    <main className="app"> 
      <header className="hero"> 
        <p className="eyebrow">Meus Hábitos Diários</p> 
        <h1>Pequenos hábitos, progresso visível.</h1> 
        <p>{completedCount} de {habits.length} hábitos concluídos.</p> 
      </header> 
 

      <Panel title="Novo hábito"> 
        <HabitForm onAddHabit={handleAddHabit} /> 
      </Panel> 
 
      <Panel title="Hábitos de hoje"> 
        <HabitList habits={habits} onToggle={handleToggleHabit} /> 
      </Panel> 
    </main> 
  ); 
} 