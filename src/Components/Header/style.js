import { createGlobalStyle } from "styled-components";

const HeaderStyle = createGlobalStyle`
.header-wrap{
    background: #FFFFFF;
    box-shadow: 0px 1px 4px rgba(37, 61, 89, 0.16);
    .notification-head{
        padding: 16px 32px;
        font-weight: 700;
    }
    .notify-icon{
        width: 9px;
        height: 9px;
        background: #EB5757;
        border: 2px solid #FFFFFF;
        border-radius: 50%;
        top: 20px;
        right: 31px;
    }
    .notification-drawer{
        background: #FFFFFF;
        border: 1px solid #DDDDDD;
        box-sizing: border-box;
        border-radius: 8px;
        width: 590px;
        right: 29px;
        padding-bottom: 21px;
        h6{
            border-bottom: 1px solid #CCD7E8;
            padding-bottom: 24px;
            margin: 24px 32px;
        }
        .notify-wrap{
            p.notify-day{
                color: #6A768E;
                margin: 24px 32px 8px 32px;
            }
            .notification{
                padding: 16px 31px;
                transition: all 0.25s linear 0s;
                :hover{
                    background: #F5F5F7;
                    transition: all 0.25s linear 0s;
                }
                img{
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                }
                p{
                    width: 80%;
                    padding-left: 16px;
                    margin: 0;
                }
                span.notify-time{
                    width: 20%;
                }
            } 
        }
    }
}
`;

export default HeaderStyle;
