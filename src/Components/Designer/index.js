import React from 'react';

// components
import Header from "../Header";

// --style--
import DesignerStyle from "./style";

const Designer = () => {
    return (
        <>
            <div className="designer-wrap w-100">
                <Header text="Designer"/>
            </div>
            <DesignerStyle/>
        </>
    );
};

export default Designer;
