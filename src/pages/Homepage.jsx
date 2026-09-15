import { useContext } from "react";
import HabitList from "../components/HabitList";
import Panel from "../components/Panel";
import { HabitContext } from "../context/HabitContext";

export default function HomePage() {
  const { habits, completedCount } = useContext(HabitContext);
  return (
    <>
      <header className="hero">
        <p className="eyebrow">MY DAILY HABITS</p>
        <h1>Pequenos hábitos, progresso visível.</h1>
        <p>{completedCount} de {habits.length} hábitos concluídos.</p>
      </header>
      <Panel title="Hábitos de hoje">
        <HabitList />
      </Panel>
    </>
  );
}
