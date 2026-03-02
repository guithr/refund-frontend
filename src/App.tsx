import { BrowserRouter, Routes, Route } from "react-router";
import { PageComponents } from "./pages/page-components";
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/components" element={<PageComponents />} />
      </Routes>
    </BrowserRouter>
  );
}
