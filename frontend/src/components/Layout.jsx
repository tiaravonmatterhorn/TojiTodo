import { Outlet } from "react-router-dom";
// import Footer from "./Footer";
import Navbar from "./NavBar.jsx";

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-14">
                <Outlet />
            </main>
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;
