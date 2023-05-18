import "./index.css";
import { useState, useEffect, createContext } from "react";
import { Session } from "@supabase/supabase-js";
import supabase from "./services/supabase/supabaseClient";
import RouterComponent from "./router";
import { SessionContextProvider } from "./components/auth/SessionContext";

export default function App() {
    return (
        <SessionContextProvider>
            <RouterComponent />
        </SessionContextProvider>
    );
}
