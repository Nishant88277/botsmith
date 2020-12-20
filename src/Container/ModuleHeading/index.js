import React from 'react';

// --style--
import HeadingStyle from "./style";

const Heading = (props) => {
    return (
        <>
            <div className="module-heading-wrap w-100 mt-5 text-center">
                <h4 className="theme-text font-weight-bold m-0">{props.main}</h4>
                <p className="pt-3">{props.sub}</p>
            </div>
            <HeadingStyle/>
        </>
    );
};

export default Heading;
