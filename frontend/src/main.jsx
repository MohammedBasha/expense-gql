import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

import GridBackground from "./components/ui/GridBackgroun.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <GridBackground>
                <App />
            </GridBackground>
        </BrowserRouter>
    </StrictMode>,
);
