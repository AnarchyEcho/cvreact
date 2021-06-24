//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  // eslint-disable-next-line
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
// eslint-disable-next-line
import { FaList, FaRegHeart } from "react-icons/fa";
// eslint-disable-next-line
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
// eslint-disable-next-line
import { RiPencilLine } from "react-icons/ri";
// eslint-disable-next-line
import { BiCog, BiRefresh } from "react-icons/bi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "../style.css";
// eslint-disable-next-line
import { Redirect } from "react-router";
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


const Header = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(true)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "CV" : "CV Contents"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">

              
                <MenuItem active={true} icon={<FiHome />}>
                  <Link to="/" >Home</Link>
                </MenuItem>
              

              
                <MenuItem active={true} icon={<FaList />}>
                  <Link to="/projects" >Projects</Link>
                </MenuItem>
              

              {/* <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem> */}

              
                <MenuItem active={true} icon={<RiPencilLine />}>
                  <Link to="/about" >About</Link>
                </MenuItem>
              

              {/* <MenuItem icon={<BiCog />}>Settings</MenuItem> */}
            </Menu>
          </SidebarContent>
          {/* <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter> */}
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;