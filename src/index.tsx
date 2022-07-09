import React from "react";
import ReactDOM from "react-dom/client";

import { AuthProvider } from "./contexts/AuthContext";
import { VehicleProvider } from "./contexts/VehicleContext";
import Routes from "./routes";
import { GlobalStyle } from "./styles/global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <VehicleProvider>
        <Routes />
      </VehicleProvider>
    </AuthProvider>
    <GlobalStyle />
  </React.StrictMode>
);
