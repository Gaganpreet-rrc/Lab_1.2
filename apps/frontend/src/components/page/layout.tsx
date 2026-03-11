import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar";
import Footer from "./footer";
import HeaderH1 from "./header";

export function Layout() {
    return(
        <>
            <Navbar />
            <HeaderH1 />
            <Outlet />
            <Footer />
        </>
    )
}