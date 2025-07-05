import { createRoot } from "react-dom/client";
import { Header, Main } from "./App";

createRoot(document.getElementById("root")).render(
    <>
        <Header />
        <Main />
    </>
);