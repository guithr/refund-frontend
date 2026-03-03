import { BrowserRouter, Routes, Route } from "react-router";
import { PageComponents } from "./pages/page-components";
import { Layout } from "./pages/layout";
import { Home } from "./pages/home";
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<PageComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
