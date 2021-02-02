import { createGlobalStyle } from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

const BotEditStyle = createGlobalStyle`
    .EditBotSection{
        margin-left: 150px;
        height: 90vh;
    }
    .react-flow__node-default {
        border: 2px solid #CCD7E8;
    }
    .react-flow__node-default .react-flow__handle {
        background: #CCD7E8;
    }
    .react-flow__node-default.selected, .react-flow__node-default.selected:hover{
        box-shadow: unset;
        border: 2px solid #007af5
    }
    .react-flow__edge {
        pointer-events: none;
    }
    .componentIcon{
        width: 20px;
    }
    .componentHead{
        font-size: 10px;
        font-weight: 700;
    }
    .componentSub{
        font-size: 7px;
    }
    .react-flow__node-default{
        width: 180px;
    }
`;

export default BotEditStyle;