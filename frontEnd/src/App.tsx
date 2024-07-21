import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./Provider/themeProvider";
import AppLayout from "./pages/AppLayout";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/:username" element={<UserPage></UserPage>} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
