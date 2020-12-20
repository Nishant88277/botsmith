import React from 'react';

// --style--
import ModuleCardStyle from "./style";

const ModuleCard = (props) => {
    return (
        <>
            <div className="module-card-wrap bg-white text-center">
                <div className="card-img-wrap d-flex justify-content-center align-items-center m-auto">
                    <img src={props.icon} alt={props.heading}/>
                </div>
                <h5 className="theme-text font-weight-bold text-capitalize m-0 pt-3 pb-2">{props.heading}</h5>
                <p className="m-0">{props.sub}</p>
            </div>
            <ModuleCardStyle/>
        </>
    );
};

export default ModuleCard;
