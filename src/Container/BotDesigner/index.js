import React, { useState, useEffect } from "react";
import ReactFlow, {
  Controls,
  updateEdge,
  Background,
  getConnectedEdges,
  useZoomPanHelper,
  useStore,
  ReactFlowProvider,
} from "react-flow-renderer";

// components
import BotRightSidebar from "../../Components/BotRightSidebar";

// Images
import CreatedBotIocn from "../../Assets/images/Created-Bot-icon.svg";

// style
import BotEditStyle from "./style";


let initialElements = {
  node: [],
  edges: [],
};

// const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();

function EditBot(props) {
  // const [elements, setElements] = useState(initialElements);


  const [output, setOutput] = useState(
    // () => JSON.parse(localStorage.getItem("output")) || ["abc","bcd"]
    )

  const SetOutPut = (data) => {
    setOutput(data)
    // localStorage.setItem("output", JSON.stringify(data));
  }

  const [elements, setElements] = useState([
    ...initialElements.node,
    ...initialElements.edges,
  ]);
  const [hide, setHide] = useState(false);
  const [node, setNode] = useState(false);
  

  useEffect(() => {
    let nodeId = initialElements.node.length + 1;
    if (props.Node) {
      let newNode = {
        id: nodeId,
        data: {
          label: (
            <div className="d-flex text-left">
              <img
                className="mr-3 componentIcon pointer-none"
                src={CreatedBotIocn}
                alt="CreatedBotIocn"
              />
              <div>
                <p className="theme-text mb-0 componentHead">
                  {props.Node.action}
                </p>
                <p className="componentSub mb-0" style={{ color: "#6A768E" }}>
                  {props.Node.description}
                </p>
              </div>
            </div>
          ),
        },
        position: {
          x:
            initialElements.node.length > 0
              ? initialElements.node[initialElements.node.length - 1].position.x
              : 500,
          y:
            initialElements.node.length > 0
              ? initialElements.node[initialElements.node.length - 1].position
                  .y + 100
              : 0,
        },
      };

      let newEdge = {
        id: `e${nodeId - 1}-${nodeId}`,
        type: "smoothstep",
        animated: true,
        source: `${nodeId - 1}`,
        target: `${nodeId}`,
      };


      initialElements.node.push(newNode);
      //only push edge when there is already a node present
      (initialElements.node.length > 1) ? (initialElements.edges.push(newEdge)) : <></>

      setElements([...initialElements.node, ...initialElements.edges]);

    }
  }, [props.Node]);

  // gets called after end of edge gets dragged to another source or target
  const onEdgeUpdate = (oldEdge, newConnection) =>
    setElements((els) => updateEdge(oldEdge, newConnection, els));

  // const onConnect = (params) => setElements((els) => addEdge(params, els));

  const onElementClick = (event, element) => {
    setNode(
      element &&
        element.data &&
        element.data.label.props.children[1].props.children[0].props.children
    );
    setHide(true);
  };

  return (
    <div className="EditBotSection">
    <ReactFlowProvider>
      <ReactFlow
        elements={elements}
        // onLoad={onLoad}
        snapToGrid
        onEdgeUpdate={onEdgeUpdate}
        onElementClick={onElementClick}

      >
        <Background variant="dots" />
        <Controls />
      </ReactFlow>
      </ReactFlowProvider>
      {hide && <BotRightSidebar node={node} setOutput={SetOutPut} output={output} />}
      <BotEditStyle />
    </div>
  );
}

export default EditBot;
