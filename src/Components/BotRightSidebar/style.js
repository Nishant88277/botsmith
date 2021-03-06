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
        .sideInput{
            background: #FFFFFF;
            height: 40px;
            border: 1px solid hsl(0, 0%, 80%);
            box-sizing: border-box;
            border-radius: 4px;
            outline: none;
            font-size: 14px;
        }
        hr{
            border-top: 1px solid #CCD7E8;
        }
        .sidebarButton{
            background: #007AF5;
            border-radius: 6px;
        }
        .charColor{
            color: #6A768E;
        }
        
        .OutputStyle{
            background: #FFFFFF;
            border-radius: 8px;
            filter: drop-shadow(0px 4px 8px rgba(37, 61, 89, 0.25));
            position: absolute;
            left: -100%;
            width: 100%;
            top: 0;
            z-index : 999;
            padding: 20px;
            img{
                position: absolute;
                top: 8px;
                right: 10px;
                width: 13px;
            }
        }
    }
`;

export default BotRightStyle;