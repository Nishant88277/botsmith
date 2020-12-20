import React from 'react';
import {Route, Switch, useLocation} from "react-router-dom";

// Components
import Sidebar from "../Sidebar"
import Header from "../Header";
import Designer from "../Designer"
import Template from "../Template-listing";
import Bot from "../Bot-listing";

// --style--
import DashboardStyle from "./style";

const Dashboard = () => {
    const location = useLocation();
    const project = () => {
        switch(location.pathname) {
            case "/":   return "Designer";
            case "/template":   return "Template";
            case "/bot": return "Bot";
            default: return "Designer"
        }
    }
    return (
        <>
            <div className="d-flex">
                <Sidebar/>
                <Header text={ project() }/>
                <section className="mt-5 section-wrap w-100">
                    <Switch>
                        <Route exact path="/" component={Designer}/>
                        <Route exact path="/template" component={Template}/>
                        <Route exact path="/bot" component={Bot}/>
                    </Switch>
                </section>
            </div>
            <DashboardStyle/>
        </>
    );
};

export default Dashboard;
