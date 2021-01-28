import React from 'react';
import {Route, Switch, useLocation} from "react-router-dom";

// Components
import Sidebar from "../Sidebar"
import BotSidebar from "../BotSidebar"
import Header from "../Header";
import Designer from "../Designer"
import Template from "../Template-listing";
import Bot from "../Bot-listing";
import BotEdit from "../../Container/EditBot";

// --style--
import DashboardStyle from "./style";

const Dashboard = () => {
    const location = useLocation();
    const project = () => {
        switch(location.pathname) {
            case "/":   return "Designer";
            case "/template":   return "Template";
            case "/bot": return "Bot";
            case "/editbot": return "Bot Name";
            default: return ""
        }
    }
    return (
        <>
            <Header text={ project() }/>
            <div className="d-flex mt-4">
                {location.pathname !== '/editbot' && <Sidebar/>}
                {location.pathname === '/editbot' && <BotSidebar/>}
                <section className="mt-5 section-wrap w-100">
                    <Switch>
                        <Route exact path="/" component={Designer}/>
                        <Route exact path="/template" component={Template}/>
                        <Route exact path="/bot" component={Bot}/>
                        <Route exact path="/editbot" component={BotEdit}/>
                    </Switch>
                </section>
            </div>
            <DashboardStyle/>
        </>
    );
};

export default Dashboard;
