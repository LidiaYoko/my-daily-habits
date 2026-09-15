import HabitForm from "../components/HabitForm";
import Panel from "../components/Panel";
export default function NewHabitPage() {
  return (
    <>
      <h1>Novo habito</h1>
      <Panel title="Cadastre uma pequena meta">
        <HabitForm />
      </Panel>
    </>
  );
}