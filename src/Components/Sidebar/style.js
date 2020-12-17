import { createGlobalStyle } from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

const SidebarStyle = createGlobalStyle`
.sidebar-wrap{
    height: 100%;
    background: #203359;
    position: fixed;
    z-index: 999;
    .slider-collapse{
        width: 72px;
        transition: all 0.25s linear 0s;
    }    
    .slider-expand{
        width: 220px;
        transition: all 0.25s linear 0s;
    }
    .logo{
        font-weight: bold;
        text-transform: uppercase;
        padding: 22px 15px;
    }
    .icon-wrap{
        margin: 36px 0;
        .icon{
            margin: 0 14px;
        :hover{
            background: rgba(255, 255, 255, 0.15);
            border-radius: 8px;
            transition: all 0.25s linear 0s;
        }
        }
        img{
            width: 44px;
            padding: 10px;
            border-radius: 8px;
            transition: all 0.25s linear 0s;
        }
    }
    .sidebar-footer{
        .icon-wrap{
            position: absolute;
            bottom: 0;
            width: 100%;
        }
    }
    .slider-arrow-wrap{
        right: 0px;
        top: 50%;
        margin-top: -90px;
        .slider-container{
            position: absolute;
            right: -16px;
            top: calc(100% - 62%);
        }
        .arrow-wrap{
            position: absolute;
            top: 50%;
            transform: translate(3px, 28px);
            .arrow-rotate{
                transform: rotate(180deg);
            }
        }
    }
}
`;

export default SidebarStyle;
