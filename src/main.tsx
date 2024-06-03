import React from "react";
import ReactDOM from "react-dom/client";
// https://github.com/bitovi/react-to-web-component?tab=readme-ov-file
import r2wc from "@r2wc/react-to-web-component";
import App from "./App.tsx";
import "./index.scss";

if (
  import.meta.env.VITE_ENV === "test" ||
  import.meta.env.VITE_ENV === "prod"
) {
  const Nyhetssenter = r2wc(App);

  customElements.define("ilt-nyhetssenter-wrapper", Nyhetssenter);
} else {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
