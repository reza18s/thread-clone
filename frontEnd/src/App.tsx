import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { useAuthContext } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";

function App() {
  const { authUser, isLoading } = useAuthContext();

  if (isLoading) return null;

  return (
    <div className="flex h-screen items-center justify-center p-4">
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignUp /> : <Navigate to={"/"} />}
        />
        <Route
          path="/login"
          element={!authUser ? <Login /> : <Navigate to={"/"} />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
