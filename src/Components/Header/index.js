import React, { useState } from 'react';
import {Link, useLocation} from "react-router-dom";

// --style--
import HeaderStyle from "./style";

// image
import NotificationIcon from "../../Assets/images/notification-icon.svg"
import Profile from "../../Assets/images/noti-image.svg"
import BackArrow from "../../Assets/images/back-arrow.svg"

// bootstrap-components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = (props) => {
    const [NotificationOpen, setNotificationOpen] = useState(false);
    const location = useLocation();

    return (
        <>
            <div className="header-wrap position-fixed w-100 bg-white">
                <Row className="m-0">
                    <Col className="pl-0">
                        <Link to="/" className="d-block">
                            <div className="notification-head d-flex">
                                {location.pathname !== '/' && <img src={BackArrow} className="pr-3" alt="Back arrow"/>}
                                <p className="mb-0 theme-text">{props.text}</p>
                            </div>
                        </Link>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-end position-relative">
                        <img src={NotificationIcon} onClick={() => setNotificationOpen(!NotificationOpen)} className={NotificationOpen ? "mr-2 cursor-pointer notification-icon open" : "mr-2 cursor-pointer notification-icon"} alt="notification icon"/>
                        <div className="notify-icon position-absolute cursor-pointer" onClick={() => setNotificationOpen(!NotificationOpen)}/>
                    </Col>
                </Row>
                {NotificationOpen && <div className="notification-drawer position-absolute">
                    <h6 className="theme-text font-weight-bold">Notifications</h6>
                    <div className="notify-wrap">
                        <p className="f-16 notify-day">Today</p>
                        <div className="notification d-flex cursor-pointer">
                            <img src={Profile} alt="Profile"/>
                            <p className="theme-text"><b>John Doe</b> has send you a Bot Approvel Request for <b>Tech
                                News Meta</b></p>
                            <span className="notify-time text-right">5 min.</span>
                        </div>
                        <div className="notification d-flex cursor-pointer">
                            <img src={Profile} alt="Profile"/>
                            <p className="theme-text"><b>John Doe</b> has send you a Bot Approvel Request for <b>Tech
                                News Meta</b></p>
                            <span className="notify-time text-right">10 min.</span>
                        </div>
                    </div>
                    <div className="notify-wrap">
                        <p className="f-16 notify-day">Mon 16 Mar 20</p>
                        <div className="notification d-flex cursor-pointer">
                            <img src={Profile} alt="Profile"/>
                            <p className="theme-text"><b>John Doe</b> has send you a Bot Approvel Request for <b>Tech
                                News Meta</b></p>
                            <span className="notify-time text-right">5 min.</span>
                        </div>
                        <div className="notification d-flex cursor-pointer">
                            <img src={Profile} alt="Profile"/>
                            <p className="theme-text"><b>John Doe</b> has send you a Bot Approvel Request for <b>Tech
                                News Meta</b></p>
                            <span className="notify-time text-right">10 min.</span>
                        </div>
                    </div>
                </div>}
            </div>
            <HeaderStyle/>
        </>
    );
};

export default Header;
