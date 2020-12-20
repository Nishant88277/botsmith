import { createGlobalStyle } from "styled-components";

const ModuleCardStyle = createGlobalStyle`
.module-card-wrap{
    border: 2px solid #CCD7E8;
    box-sizing: border-box;
    border-radius: 8px;
    transition: all 0.25s linear 0s;
    padding: 56px 24px 62px;
    min-height: 332px;
    cursor: pointer;
    :hover{
        transition: all 0.25s linear 0s;
        filter: drop-shadow(0px 8px 20px rgba(37, 61, 89, 0.12));
    }
    .card-img-wrap{
        width: 100px;
        height: 100px;
        background: #F5F5F7;
        border-radius: 50%;
    }
    h5{
        font-size: 18px;
    }
    p{
        color: #6A768E;
        font-size: 14px;
    }
}
`;

export default ModuleCardStyle;
