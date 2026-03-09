import { BrowserRouter, Routes, Route } from "react-router";
import { PageComponents } from "./pages/page-components";
import { Layout } from "./pages/layout";
import { Home } from "./pages/home";
import { NewRefund } from "./pages/new-refund";
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/new-refund" element={<NewRefund />} />
          <Route path="/components" element={<PageComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
