import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; //default export olmadigi icin parantez icinde nprmal export oldugu icin
import App from "./App"; //default export oldugu icin parantez icinde degil
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
