import React, { useState } from 'react';
import ReactFlow, { Controls, updateEdge } from 'react-flow-renderer';

// components
import BotRightSidebar from "../../Components/BotRightSidebar"

// style
import BotEditStyle from "./style"

const initialElements = [
    {
        id: '1',
        type: 'input',
        data: { label: 'Node A' },
        position: { x: 250, y: 0 },
    },
    {
        id: '2',
        data: { label: 'Node B' },
        position: { x: 100, y: 200 },
    },
    {
        id: '3',
        data: { label: 'Node C' },
        position: { x: 400, y: 200 },
    },
    { id: 'e1-2', source: '1', target: '2', label: 'updatable edge' },
];
const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();

function EditBot() {

    const [elements, setElements] = useState(initialElements);
    const [hide, setHide] = useState(false);
    const [node, setNode] = useState(false);

    // gets called after end of edge gets dragged to another source or target
    const onEdgeUpdate = (oldEdge, newConnection) =>
        setElements((els) => updateEdge(oldEdge, newConnection, els));

    // const onConnect = (params) => setElements((els) => addEdge(params, els));

    const onElementClick = (event, element) => {
        setNode(element)
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
            <Controls />
            </ReactFlow>
            {hide && <BotRightSidebar node={node}/>}
            <BotEditStyle/>
        </div>
    );
}

export default EditBot;