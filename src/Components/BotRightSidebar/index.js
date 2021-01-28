import React from 'react';

// style
import BotRightStyle from "./style"

function BotRightSidebar(props) {
    console.log(props.node)
    return (
        <div className="BotRightSidebar position-fixed pt-5">
            <h5 className="theme-text header pt-4 pl-3 pr-3 pb-3">{props.node.data.label}</h5>
            <BotRightStyle/>
        </div>
    );
}

export default BotRightSidebar;