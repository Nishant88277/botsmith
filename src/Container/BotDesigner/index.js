import React, { useState, useEffect } from 'react';
import ReactFlow, { Controls, updateEdge, Background } from 'react-flow-renderer';

// components
import BotRightSidebar from "../../Components/BotRightSidebar"

// Images
import CreatedBotIocn from "../../Assets/images/Created-Bot-icon.svg"

// style
import BotEditStyle from "./style"

let initialElements = [
    // {
    //     id: '1',
    //     data: {label: (
    //             <div className="d-flex text-left">
    //                 <img className="mr-3 componentIcon" src={CreatedBotIocn} alt="CreatedBotIocn"/>
    //                 <div>
    //                     <p className="theme-text mb-0 componentHead">Component A</p>
    //                     <p className="componentSub mb-0" style={{color: '#6A768E'}}>Other Text that helps the user to uinderstand this</p>
    //                 </div>
    //             </div>
    //         )},
    //     position: { x: 250, y: 0 },
    // },
    // {
    //     id: '2',
    //     data: { label: (
    //             <div className="d-flex text-left">
    //                 <img className="mr-3 componentIcon" src={CreatedBotIocn} alt="CreatedBotIocn"/>
    //                 <div>
    //                     <p className="theme-text mb-0 componentHead">Component B</p>
    //                     <p className="componentSub mb-0" style={{color: '#6A768E'}}>Other Text that helps the user to uinderstand this</p>
    //                 </div>
    //             </div>
    //         ) },
    //     position: { x: 100, y: 200 },
    // },
    // {
    //     id: '3',
    //     data: { label: (
    //             <div className="d-flex text-left">
    //                 <img className="mr-3 componentIcon" src={CreatedBotIocn} alt="CreatedBotIocn"/>
    //                 <div>
    //                     <p className="theme-text mb-0 componentHead">Component C</p>
    //                     <p className="componentSub mb-0" style={{color: '#6A768E'}}>Other Text that helps the user to uinderstand this</p>
    //                 </div>
    //             </div>
    //         ) },
    //     position: { x: 400, y: 200 },
    // },
    // { id: 'e1-2', type: 'smoothstep', animated: true, source: '1', target: '2' },
    // { id: 'e1-3', type: 'smoothstep', animated: true, source: '1', target: '3' },
];

const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();

function EditBot(props) {

    const [elements, setElements] = useState(initialElements);
    const [hide, setHide] = useState(false);
    const [node, setNode] = useState(false);

    useEffect(() => {
        var newItems = [];
        let nodeId =  initialElements.length + 1;
        if(props.Node){
            newItems.push(
                {
                    id:nodeId,
                    data: {label: (
                            <div className="d-flex text-left">
                                <img className="mr-3 componentIcon pointer-none" src={CreatedBotIocn} alt="CreatedBotIocn"/>
                                <div>
                                    <p className="theme-text mb-0 componentHead">{props.Node.category}</p>
                                    <p className="componentSub mb-0" style={{color: '#6A768E'}}>{props.Node.description}</p>
                                </div>
                            </div>
                        )},
                    // position: { x: Math.floor(Math.random() * 40), y: Math.floor(Math.random() * 40) },
                    position: { x:  Math.floor(Math.random() * (1000))-500 , y:  (elements.length > 0) ? ( Math.floor(Math.random() * (400)) + 100) : 0    }, 
                },
                { id: `e1-${nodeId}`, type: 'smoothstep', animated: true, source: '1', target: `${nodeId}` },
            );
            initialElements.push(...newItems);
            // setElements((els) => els.concat(...newItems));

            // initialElements = [...initialElements , ...newItems]
            setElements(initialElements)
            // setElements((els) => els.concat(...newItems));
            console.log("elements"  + elements.length)
            console.log("initialElements" + initialElements.length )
            console.log("newItems" + newItems.length)


        }
    }, [props.Node]);

    // gets called after end of edge gets dragged to another source or target
    const onEdgeUpdate = (oldEdge, newConnection) =>
        setElements((els) => updateEdge(oldEdge, newConnection, els));

    // const onConnect = (params) => setElements((els) => addEdge(params, els));

    const onElementClick = (event, element) => {
        setNode(element && element.data && element.data.label.props.children[1].props.children[0].props.children)
        setHide(true)
    }

    return (
        <div className="EditBotSection">
            <ReactFlow
                elements={elements}
                onLoad={onLoad}
                snapToGrid
                onEdgeUpdate={onEdgeUpdate}
                onElementClick={onElementClick}
            >
                <Background
                    variant="dots"
                />
                <Controls />
            </ReactFlow>
            {hide && <BotRightSidebar node={node}/>}
            <BotEditStyle/>
        </div>
    );
}

export default EditBot;