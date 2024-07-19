import { ModeToggle } from "./components/globals/modeToggle";
import { ThemeProvider } from "./Provider/themeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <ModeToggle></ModeToggle>
      </div>
    </ThemeProvider>
  );
}

export default App;
