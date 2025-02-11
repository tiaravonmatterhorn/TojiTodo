import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import Layout from "../components/Layout.jsx";
import LoginPage from "../pages/loginPage.jsx";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<Layout />}>
                    <Route path="/home" element={<HomePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
