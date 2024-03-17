import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div class="parent">
       < Header/>
        <div class="main">
          <Sidebar/>
          <div class="child content">
            <Outlet/>
            </div>  
        </div>
       <Footer/>
      </div>
    );
};

export default Layout;