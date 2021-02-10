import React, {useState} from 'react';
import {Route, Switch, useLocation} from "react-router-dom";

// Components
import Sidebar from "../Sidebar"
import BotSidebar from "../BotSidebar"
import Header from "../Header";
import Designer from "../Designer"
import Template from "../Template-listing";
import Bot from "../Bot-listing";
import BotDesigner from "../../Container/BotDesigner";

// --style--
import DashboardStyle from "./style";

const Dashboard = () => {
    const location = useLocation();
    const [NodeData, setNodeData] = useState("");
    const project = () => {
        switch(location.pathname) {
            case "/":   return "Designer";
            case "/template":   return "Template";
            case "/bot": return "Bot";
            case "/bot-designer": return "Bot Name";
            default: return ""
        }
    }

    const Data = (Data) => {
        setNodeData(Data)
    }

    return (
        <>
            <Header text={ project() }/>
            <div className="d-flex mt-4">
                {location.pathname !== '/bot-designer' && <Sidebar/>}
                {location.pathname === '/bot-designer' && <BotSidebar Node={Data} />}
                <section className="mt-5 section-wrap w-100">
                    <Switch>
                        <Route exact path="/" component={Designer}/>
                        <Route exact path="/template" component={Template}/>
                        <Route exact path="/bot" component={Bot}/>
                        <Route exact path="/bot-designer" component={() => <BotDesigner Node={NodeData} />}/>
                    </Switch>
                </section>
            </div>
            <DashboardStyle/>
        </>
    );
};

export default Dashboard;
