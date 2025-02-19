import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/components.scss";
import "./styles/swiperStyle.scss";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
