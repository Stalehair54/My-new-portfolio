import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <section className="bg-[#1a1a1a] flex flex-col">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </section>
);

reportWebVitals();
