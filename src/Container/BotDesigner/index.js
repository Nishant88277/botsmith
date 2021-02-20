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
  node: [
    // {
    //   id: "1",
    //   data: {
    //     label: (
    //       <div className="d-flex text-left">
    //         <img
    //           className="mr-3 componentIcon"
    //           src={CreatedBotIocn}
    //           alt="CreatedBotIocn"
    //         />
    //         <div>
    //           <p className="theme-text mb-0 componentHead">Component A</p>
    //           <p className="componentSub mb-0" style={{ color: "#6A768E" }}>
    //             Other Text that helps the user to uinderstand this
    //           </p>
    //         </div>
    //       </div>
    //     ),
    //   },
    //   position: { x: 250, y: 0 },
    // },
    // {
    //   id: "2",
    //   data: {
    //     label: (
    //       <div className="d-flex text-left">
    //         <img
    //           className="mr-3 componentIcon"
    //           src={CreatedBotIocn}
    //           alt="CreatedBotIocn"
    //         />
    //         <div>
    //           <p className="theme-text mb-0 componentHead">Component B</p>
    //           <p className="componentSub mb-0" style={{ color: "#6A768E" }}>
    //             Other Text that helps the user to uinderstand this
    //           </p>
    //         </div>
    //       </div>
    //     ),
    //   },
    //   position: { x: 100, y: 200 },
    // },
    // {
    //   id: "3",
    //   data: {
    //     label: (
    //       <div className="d-flex text-left">
    //         <img
    //           className="mr-3 componentIcon"
    //           src={CreatedBotIocn}
    //           alt="CreatedBotIocn"
    //         />
    //         <div>
    //           <p className="theme-text mb-0 componentHead">Component C</p>
    //           <p className="componentSub mb-0" style={{ color: "#6A768E" }}>
    //             Other Text that helps the user to uinderstand this
    //           </p>
    //         </div>
    //       </div>
    //     ),
    //   },
    //   position: { x: 400, y: 200 },
    // },
  ],
  edges: [
    // {
    //   id: "e1-2",
    //   type: "smoothstep",
    //   animated: true,
    //   source: "1",
    //   target: "2",
    // },
    // {
    //   id: "e1-3",
    //   type: "smoothstep",
    //   animated: true,
    //   source: "1",
    //   target: "3",
    // },
  ],
};

const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();

function EditBot(props) {
  // const [elements, setElements] = useState(initialElements);

  const [elements, setElements] = useState([
    ...initialElements.node,
    ...initialElements.edges,
  ]);
  const [hide, setHide] = useState(false);
  const [node, setNode] = useState(false);

  // const store = useStore();
  // const { zoomIn, zoomOut, setCenter } = useZoomPanHelper();

  // function focusNode () {
  //   const { nodes } = store.getState();
  //   if (nodes.length) {
  //     const node = nodes[0];
  //     const x = node.__rf.position.x + node.__rf.width / 2;
  //     const y = node.__rf.position.y + node.__rf.height / 2;
  //     const zoom = 1.85;
  //     setCenter(x, y, zoom);
  //   }
  // };

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
                  {props.Node.category}
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
              : 0, 
          y:
            initialElements.node.length > 0
              ? initialElements.node[initialElements.node.length - 1].position
                  .y + 200
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
      (initialElements.node.length > 1) ? (initialElements.edges.push(newEdge)) : console.log("First element")
      console.log(initialElements);
      
      setElements([...initialElements.node, ...initialElements.edges]);
      console.log(elements)
  
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
        onLoad={onLoad}
        snapToGrid
        onEdgeUpdate={onEdgeUpdate}
        onElementClick={onElementClick}
        
      >
        <Background variant="dots" />
        <Controls />
      </ReactFlow>
      </ReactFlowProvider>
      {hide && <BotRightSidebar node={node} />}
      <BotEditStyle />
    </div>
  );
}

export default EditBot;
