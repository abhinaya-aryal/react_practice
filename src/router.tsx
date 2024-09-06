import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </BrowserRouter>
  );
}
