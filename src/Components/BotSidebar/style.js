import { createGlobalStyle } from "styled-components";

const BotSidebarStyle = createGlobalStyle`
    .BotSidebar{
        background: #FFFFFF;
        box-shadow: 1px 0px 4px rgba(37,61,89,0.16);
        top: 0;
        width: 220px;
        height: 100%;
        padding-top: 75px;
        h6{
            color: #6A768E;
            font-weight: 600;
            font-size: 12px;
            text-transform: uppercase;
        }
        .SearchBar{
            background: #FFFFFF;
            border: 1px solid #CCD7E8;
            box-sizing: border-box;
            border-radius: 4px;
            outline: none;
            padding: 10px 10px 10px 35px;
            background-repeat: no-repeat;
            background-position: 10px;
            background-size: 16px;
        }
    }
    .ActionStyle{
        background: #FFFFFF;
        border-radius: 8px;
        filter: drop-shadow(0px 4px 8px rgba(37, 61, 89, 0.25));
        position: absolute;
        left: 200px;
        width: 184px;
        top: -27px;
        img{
            position: absolute;
            top: 8px;
            right: 10px;
            width: 13px;
        }
    }
`;

export default BotSidebarStyle;