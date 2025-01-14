import { AddButton } from "./components/AddButton";
import { CountCard } from "./components/CountCard";
import { ValueProvider } from "./contexts/ValueContext";
export function App() {
  return (
    <>
      <ValueProvider>
        <h1>class 04 contexts</h1>

        <AddButton />

        <CountCard />
      </ValueProvider>
    </>
  );
}
