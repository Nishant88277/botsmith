import React, { useState } from 'react';

// --style--
import SidebarStyle from "./style";

// --images--
import DesignerIcon from "../../Assets/images/designer-icon.svg"
import BotIcon from "../../Assets/images/bot-icon.svg"
import PortalsIcon from "../../Assets/images/portals-icon.svg"
import UserIcon from "../../Assets/images/users-icon.svg"
import ProfileIcon from "../../Assets/images/profile-icon.svg"
import LogoutIcon from "../../Assets/images/logout-icon.svg"
import SliderContainer from "../../Assets/images/slider-container.svg"
import RightArrow from "../../Assets/images/right-arrow.svg"

const Sidebar = () => {

    const [Expand, setExpand] = useState(true);

    return (
        <>
            <div className="sidebar-wrap">
                <div className={Expand ? "slider-collapse" : "slider-expand"}>
                    <p className="logo text-white m-0">
                        Logo
                    </p>
                    <div className="icon-wrap">
                        <div className="d-flex align-items-center icon mb-4">
                            <img src={DesignerIcon} alt="designer icon"/>
                            {Expand ? '' : <p className="m-0 text-white ml-2">Designer</p>}
                        </div>
                        <div className="d-flex align-items-center icon mb-4">
                            <img src={BotIcon} alt="bot icon"/>
                            {Expand ? '' : <p className="m-0 text-white ml-2">Bot Manager</p>}
                        </div>
                        <div className="d-flex align-items-center icon mb-4">
                            <img src={PortalsIcon} alt="portals icon"/>
                            {Expand ? '' : <p className="m-0 text-white ml-2">Portals</p>}
                        </div>
                        <div className="d-flex align-items-center icon mb-4">
                            <img src={UserIcon} alt="user icon"/>
                            {Expand ? '' : <p className="m-0 text-white ml-2">User Management</p>}
                        </div>
                    </div>
                    <div className="sidebar-footer">
                        <div className="icon-wrap">
                            <div className="d-flex align-items-center icon mb-4">
                                <img src={ProfileIcon} alt="profile icon"/>
                                {Expand ? '' : <p className="m-0 text-white ml-2">Profile</p>}
                            </div>
                            <div className="d-flex align-items-center icon mb-4">
                                <img src={LogoutIcon} alt="logout icon"/>
                                {Expand ? '' : <p className="m-0 text-white ml-2">Log Out</p>}
                            </div>
                        </div>
                    </div>
                    <div className="slider-arrow-wrap position-absolute cursor-pointer" onClick={() => setExpand(!Expand)}>
                        <img src={SliderContainer} className="slider-container" alt="slider container"/>
                        <div className="arrow-wrap">
                            <img src={RightArrow} className={Expand ? "" : "arrow-rotate"} alt="right arrow"/>
                        </div>
                    </div>
                </div>
            </div>
            <SidebarStyle/>
        </>
    );
};

export default Sidebar;
