import "./index.css";
import RouterComponent from "./router";
import { SessionContextProvider } from "./components/auth/SessionContext";

export default function App() {
    return (
        <SessionContextProvider>
            <RouterComponent />
        </SessionContextProvider>
    );
}
