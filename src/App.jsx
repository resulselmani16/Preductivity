import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import BoardPage from "./pages/BoardPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/dashboard"} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/board/:id" element={<BoardPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
