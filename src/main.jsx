import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import { Provider } from "react-redux";
import Store from "./Components/Redux Toolkit/Store.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  
    <Provider store={Store}>
      <App />
    </Provider>
);
{/* <StrictMode></StrictMode> */}