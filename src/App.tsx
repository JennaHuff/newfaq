import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Forum from "./components/Forum/Forum";
import Faq from "./components/Faq/Faq";

function App() {
    const defaultPage: IPage = { pageName: "faq", pageTitle: "Faq", key: 1 };
    const [page, setPage] = useState(defaultPage);

    return (
        <div>
            <Header page={page} setPage={setPage} />
            <Routes>
                <Route path="/" element={<Faq page={page} />} />
                <Route path="/faq" element={<Faq page={page} />} />
                <Route path="/forum" element={<Forum page={page} />} />
            </Routes>
        </div>
    );
}

export default App;
