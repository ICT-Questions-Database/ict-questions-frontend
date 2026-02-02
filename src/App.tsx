import { Routes, Route } from "react-router-dom";
import { QuestionsPage } from "./pages/QuestionsPage";
import RegisterPage from "./pages/Register/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/questions" element={<QuestionsPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
