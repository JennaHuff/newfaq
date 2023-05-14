import { Outlet } from "react-router-dom";
import Header from "./header/Header";

export default function MainLayout() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
}
