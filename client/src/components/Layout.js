import { Outlet } from "react-router-dom";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";
const Layout = () => {
    return ( 
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
     );
}
 
export default Layout;