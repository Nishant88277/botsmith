import React from 'react';
import {Link} from "react-router-dom";

// components
import ModuleHeading from "../../Container/ModuleHeading";
import ModuleCard from "../../Container/ModuleCard";

// image
import TemplateIcon from "../../Assets/images/templates-icon.svg"
import ManageBotIcon from "../../Assets/images/manage-bot-icon.svg"
import NewIcon from "../../Assets/images/new-icon.svg"

// bootstrap-components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Designer = () => {
    return (
        <>
            <div className="designer-wrap w-100">
                <ModuleHeading main="Let’s start your Bot creation" sub="Choose one of the options below to start creating a bot" />
                <Row className="justify-content-center m-0 mt-5">
                    <Col lg={3}>
                        <Link to="/template" className="d-block">
                            <ModuleCard icon={TemplateIcon} heading="templates" sub="These templates can help you start saving time right away, no matter which apps you use."/>
                        </Link>
                    </Col>
                    <Col lg={3}>
                        <Link to="/bot" className="d-block">
                            <ModuleCard icon={ManageBotIcon} heading="From an existing Bot" sub="Clone your existing bot to speed up your workflow!"/>
                        </Link>
                    </Col>
                    <Col lg={3}>
                        <ModuleCard icon={NewIcon} heading="From Scratch" sub="Start Fresh! Create bot from blank canvas"/>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Designer;
