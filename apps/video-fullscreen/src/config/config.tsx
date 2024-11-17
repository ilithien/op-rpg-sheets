import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@/components/ui/provider.tsx";
import ConfigApp from "./ConfigApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <ConfigApp />
    </Provider>
  </StrictMode>
);
