import { Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";
import Legal from "./pages/Legal";
import Projects from "./pages/Projects";
import NotFound from "./pages/404";

export default function Router() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<StartPage />} />
      <Route path="/legal" element={<Legal />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}
