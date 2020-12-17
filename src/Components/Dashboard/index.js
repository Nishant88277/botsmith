import React from 'react';

// Components
import Sidebar from "../Sidebar"
import Designer from "../Designer"

// --style--
import DashboardStyle from "./style";

const Dashboard = () => {
    return (
        <>
            <div className="d-flex">
                <Sidebar/>
                <Designer/>
            </div>
            <DashboardStyle/>
        </>
    );
};

export default Dashboard;
