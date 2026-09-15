import { createContext, useEffect, useState } from "react";
import { initialHabits } from "../data/habits";
const STORAGE_KEY = "my-daily-habits:habits";
function loadHabits() {
  const savedHabits = localStorage.getItem(STORAGE_KEY);
  if (!savedHabits) return initialHabits;
  try {
    const parsedHabits = JSON.parse(savedHabits);
    return Array.isArray(parsedHabits) ? parsedHabits : initialHabits;
  } catch {
    return initialHabits;
  }
}
// eslint-disable-next-line react-refresh/only-export-components
export const HabitContext = createContext(null);

export function HabitsProvider({ children }) {
  const [habits, setHabits] = useState(loadHabits);

  const completedCount = habits.filter(
    (habit) => habit.completed,
  ).length;

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(habits));
  }, [habits]);

  function addHabit(newHabit) {
    setHabits((current) => [...current, newHabit]);
  }

  function toggleHabit(habitId) {
    setHabits((current) =>
      current.map((habit) =>
        habit.id === habitId
          ? { ...habit, completed: !habit.completed }
          : habit,
      ),
    );
  }
  const value = {
    habits,
    completedCount,
    addHabit,
    toggleHabit,
  };

  return (
    <HabitContext.Provider value={value}>
      {children}
    </HabitContext.Provider>
  );
}