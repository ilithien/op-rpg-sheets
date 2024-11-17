import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@/components/ui/provider.tsx";
import App from "./App.tsx";
import { setupi18n } from "./i18n/i18nProvider.ts";
import { I18nextProvider } from "react-i18next";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={setupi18n()}>
      <Provider>
        <App />
      </Provider>
    </I18nextProvider>
  </StrictMode>
);
