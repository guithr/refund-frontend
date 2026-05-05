import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router";
import { NuqsAdapter } from "nuqs/adapters/react";
import { Toaster } from "sonner";

import { Layout } from "./pages/layout";

import { PageComponents } from "./pages/page-components";
import { RefundDetails } from "./pages/refund-details";
import { Confirmation } from "./pages/confirmation";
import { NewRefund } from "./pages/new-refund";
import { Home } from "./pages/home";

export function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <NuqsAdapter>
        <Toaster />
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
      </NuqsAdapter>
    </QueryClientProvider>
  );
}
