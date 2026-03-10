import { BrowserRouter, Routes, Route } from "react-router";
import { PageComponents } from "./pages/page-components";
import { Layout } from "./pages/layout";
import { Home } from "./pages/home";
import { NewRefund } from "./pages/new-refund";
import { RefundDetails } from "./pages/refund-details";
import { Confirmation } from "./pages/confirmation";
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/components" element={<PageComponents />} />

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/new-refund" element={<NewRefund />} />
          <Route path="/refunds/:id" element={<RefundDetails />} />
          <Route path="/components" element={<PageComponents />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
