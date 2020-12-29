import React from "react";
import Login from "./pages/Login";

import { useAppState } from "./AppContext";
import Home from "./pages/Home";

function App() {
    const { state } = useAppState();

    if (state.logged) {
        return <Home />;
    } else {
        return <Login />;
    }
}

export default App;
