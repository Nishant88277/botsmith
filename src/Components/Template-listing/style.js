import { createGlobalStyle } from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

const TemplateStyle = createGlobalStyle`
    input[type="text"]{
        border: 1px solid #CCD7E8;
        box-sizing: border-box;
        border-radius: 4px;
        outline: none;
        height: 48px;
        background-repeat: no-repeat;
        background-position: 20px center;
        padding-left: 60px;
    }
    .filter-button{
        border: 1px solid #CCD7E8;
        box-sizing: border-box;
        border-radius: 6px;
        user-select: none;
        p{
            font-weight: 600;
        }
    }
    .filter-drawer{
        background: #FFFFFF;
        border: 1px solid #DDDDDD;
        box-sizing: border-box;
        border-radius: 8px;
        width: 312px;
        padding: 14px 23px 10px 23px;
        right: 0;
        top: 50px;
        user-select: none;
        z-index: 9;
        ul{
            ::after{
                content: '';
                border: 1px solid #CCD7E8;
                position: absolute;
                left: 0;
                bottom: 61px;
                width: 100%;
            }
        }
        input[type="checkbox"]{
            -moz-transform: scale(1.5);
            -webkit-transform: scale(1.5);
            -o-transform: scale(1.5);
        }
        p{
            color: #425579;
        }
        button{
            border-radius: 6px;
        }
    }
`;

export default TemplateStyle;
