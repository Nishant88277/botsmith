import React, {useState} from 'react';
import {Link, useLocation} from "react-router-dom";

// --style--
import HeaderStyle from "./style";

// image
import NotificationIcon from "../../Assets/images/notification-icon.svg"
import Profile from "../../Assets/images/noti-image.svg"
import BackArrow from "../../Assets/images/back-arrow.svg"
import FullScreenIcon from "../../Assets/images/fullscreen-icon.svg"

// bootstrap-components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// --images--
import EditBotIcon from "../../Assets/images/edit-icon.svg"

const Header = (props) => {
    const [NotificationOpen, setNotificationOpen] = useState(false);
    const [head, setHeadText] = useState(true);
    const [EditHead, setEditHead] = useState(props.text);
    const location = useLocation();
    const Links = () => {
        switch (location.pathname) {
            case "/template":
                return "/";
            case "/bot":
                return "/";
            case "/editbot":
                return "/bot";
            default:
                return ""
        }
    }

    const handleChange = (e) => {
        setEditHead(e.target.value)
    }

    return (
        <>
            <div className="header-wrap position-fixed w-100 bg-white">
                <Row className="m-0">
                    <Col className="pl-0">
                        <div
                            className={location.pathname === '/editbot' ? head === false ? "notification-head d-flex ml-0 align-items-center pt-2 pb-2" : "notification-head d-flex ml-0 align-items-center" : "notification-head d-flex"}>
                            <Link to={Links()} className="d-block">
                                {location.pathname !== '/' && <img src={BackArrow} onClick={() => setHeadText(true)} className="pr-3" alt="Back arrow"/>}
                            </Link>
                            {head === true && <p className="mb-0 theme-text">{EditHead}</p>}
                            {head === false && <input type='text' value={EditHead} onChange={handleChange} className='editBot ml-3 font-weight-bold'/>}
                            {
                                location.pathname === '/editbot' &&
                                    <span>
                                        {
                                            head === true ?
                                                <img
                                                    src={EditBotIcon}
                                                    className="ml-3 cursor-pointer"
                                                    onClick={() => setHeadText(false)}
                                                    alt="EditBotIcon"
                                                /> :
                                                <p
                                                    className='mb-0 theme-text ml-3 cursor-pointer'
                                                    onClick={() => setHeadText(true)}
                                                >
                                                    Save
                                                </p>
                                        }
                                    </span>
                            }
                        </div>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-end">
                        {
                            location.pathname === '/editbot' &&
                            <img
                                src={FullScreenIcon}
                                alt="FullScreenIcon"
                                className="mr-3 cursor-pointer"
                            />
                        }
                        <div className="position-relative">
                            <img src={NotificationIcon} onClick={() => setNotificationOpen(!NotificationOpen)}
                                 className={NotificationOpen ? "mr-2 cursor-pointer notification-icon open" : "mr-2 cursor-pointer notification-icon"}
                                 alt="notification icon"/>
                            <div className="notify-icon position-absolute cursor-pointer"
                                 onClick={() => setNotificationOpen(!NotificationOpen)}/>
                        </div>
                        {
                            location.pathname === '/editbot' &&
                            <button className="BotRunBtn ml-2 mr-3">
                                Run
                            </button>
                        }
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
