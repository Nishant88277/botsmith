import React, {useState} from 'react';
import {Link} from "react-router-dom";

// components
import ModuleHeading from "../../Container/ModuleHeading";
import ModuleCard from "../../Container/ModuleCard";

// images
import SearchIcon from "../../Assets/images/search-icon.svg"
import FilterIcon from "../../Assets/images/filter-icon.svg"
import FilterArrow from "../../Assets/images/filter-arrow.svg"
import BotListingIcon from "../../Assets/images/bot-listing-icon.svg";

// style
import TemplateStyle from "../Template-listing/style"

// bootstrap-components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Bot = () => {
    const [FilterOpen, setFilterOpen] = useState(false);
    const [filter, setFilter] = useState('');

    const ChangeFilter = (e) => {
        setFilter(e.target.value)
    }
    return (
        <>
            <ModuleHeading main="Create Clone from your existing bot" sub="Select a bot to create a clone, This will open in a new window" />
            <div className="position-relative w-50 m-auto">
                <div className="d-flex justify-content-center">
                    <input
                        type="text"
                        placeholder="Search"
                        value={filter}
                        onChange={(e) => ChangeFilter(e)}
                        className="theme-text bg-white w-100"
                        style={{backgroundImage: `url(${SearchIcon})`}}
                    />
                    <div
                        className="filter-button d-flex align-items-center bg-white ml-3 pl-3 pr-3 pt-2 pb-2 cursor-pointer"
                        onClick={() => setFilterOpen(!FilterOpen)}
                    >
                        <img src={FilterIcon} alt="Filter Icon" />
                        <p className="m-0 pl-2 pr-3">Filter</p>
                        <img className="pt-1" src={FilterArrow} alt="Filter Icon" />
                    </div>
                </div>
                {FilterOpen && <div className="filter-drawer position-absolute">
                    <ul className="pl-0 m-0">
                        <li className="d-flex align-items-center mt-3">
                            <input type="checkbox" id="products"/>
                            <label htmlFor="products" className="m-0 ml-3 cursor-pointer">Products</label>
                            <img className="pt-1 ml-auto" src={FilterArrow} alt="Filter Icon"/>
                        </li>
                        <li className="d-flex align-items-center mt-3">
                            <input type="checkbox" id="actionable-intelligence"/>
                            <label htmlFor="actionable-intelligence" className="m-0 ml-3 cursor-pointer">News Actionable Intelligence</label>
                            <img className="pt-1 ml-auto" src={FilterArrow} alt="Filter Icon"/>
                        </li>
                        <li className="d-flex align-items-center mt-3">
                            <input type="checkbox" id="actionable-news"/>
                            <label htmlFor="actionable-news" className="m-0 ml-3 cursor-pointer">News Actionable</label>
                            <img className="pt-1 ml-auto" src={FilterArrow} alt="Filter Icon"/>
                        </li>
                        <li className="d-flex align-items-center mt-3">
                            <input type="checkbox" id="data-capture"/>
                            <label htmlFor="data-capture" className="m-0 ml-3 cursor-pointer">Data Capture</label>
                            <img className="pt-1 ml-auto" src={FilterArrow} alt="Filter Icon"/>
                        </li>
                        <li className="d-flex align-items-center mt-3">
                            <input type="checkbox" id="data-capture-lorem"/>
                            <label htmlFor="data-capture-lorem" className="m-0 ml-3 cursor-pointer">Data Capture lorem</label>
                            <img className="pt-1 ml-auto" src={FilterArrow} alt="Filter Icon"/>
                        </li>
                        <li className="d-flex align-items-center mt-3">
                            <input type="checkbox" id="data-capture-1"/>
                            <label htmlFor="data-capture-1" className="m-0 ml-3 cursor-pointer">Data Capture</label>
                            <img className="pt-1 ml-auto" src={FilterArrow} alt="Filter Icon"/>
                        </li>
                        <li className="d-flex align-items-center mt-3">
                            <input type="checkbox" id="data-capture-lorem1"/>
                            <label htmlFor="data-capture-lorem1" className="m-0 ml-3 cursor-pointer">Data Capture lorem</label>
                            <img className="pt-1 ml-auto" src={FilterArrow} alt="Filter Icon"/>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center mt-4">
                        <p className="text-primary font-weight-bold m-0 cursor-pointer">
                            Clear Filer
                        </p>
                        <button className="btn btn-primary pl-5 pt-2 pb-2 pr-5 ml-auto">Apply</button>
                    </div>
                </div>}
            </div>
            <Row className="ml-4 mr-4 mt-4 mb-4">
                <Col lg={3}>
                    <Link to="/bot-designer" className="d-block">
                        <ModuleCard icon={BotListingIcon} heading="Bot Name" sub="Short description about Bot Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                    </Link>
                </Col>
                <Col lg={3}>
                    <Link to="/bot" className="d-block">
                        <ModuleCard icon={BotListingIcon} heading="Bot Name" sub="Short description about Bot Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                    </Link>
                </Col>
                <Col lg={3}>
                    <Link to="/bot" className="d-block">
                        <ModuleCard icon={BotListingIcon} heading="Bot Name" sub="Short description about Bot Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                    </Link>
                </Col>
                <Col lg={3}>
                    <Link to="/bot" className="d-block">
                        <ModuleCard icon={BotListingIcon} heading="Bot Name" sub="Short description about Bot Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                    </Link>
                </Col>
            </Row>
            <Row className="ml-4 mr-4 mt-4 mb-4">
                <Col lg={3}>
                    <Link to="/bot" className="d-block">
                        <ModuleCard icon={BotListingIcon} heading="Bot Name" sub="Short description about Bot Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                    </Link>
                </Col>
                <Col lg={3}>
                    <Link to="/bot" className="d-block">
                        <ModuleCard icon={BotListingIcon} heading="Bot Name" sub="Short description about Bot Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                    </Link>
                </Col>
                <Col lg={3}>
                    <Link to="/bot" className="d-block">
                        <ModuleCard icon={BotListingIcon} heading="Bot Name" sub="Short description about Bot Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                    </Link>
                </Col>
                <Col lg={3}>
                    <Link to="/bot" className="d-block">
                        <ModuleCard icon={BotListingIcon} heading="Bot Name" sub="Short description about Bot Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                    </Link>
                </Col>
            </Row>
            <TemplateStyle/>
        </>
    );
}

export default Bot;
