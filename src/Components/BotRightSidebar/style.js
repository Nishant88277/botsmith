import { createGlobalStyle } from "styled-components";

const BotRightStyle = createGlobalStyle`
    .BotRightSidebar{
        background: #FFFFFF;
        box-shadow: -1px 0px 4px rgba(37,61,89,0.16);
        top: 0;
        width: 342px;
        height: 100%;
        right: 0;
        z-index: 9;
        transition: all 0.25s linear 0s;
        .header{
            font-weight: bold;
            font-size: 14px;
            border-bottom: 1px solid #CCD7E8;
        }
    }
`;

export default BotRightStyle;