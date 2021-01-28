import { createGlobalStyle } from "styled-components";

const HeaderStyle = createGlobalStyle`
.header-wrap{
    box-shadow: 0px 1px 4px rgba(37, 61, 89, 0.16);
    z-index: 99;
    top: 0;
    .notification-icon{
        padding: 10px;
        width: 40px;
        transition: all 0.25s linear 0s;
        :hover{
            background: rgba(0, 0, 0, 0.05);
            border-radius: 8px;
            transition: all 0.25s linear 0s;
        }
    }
    .open{
        background: rgba(0, 0, 0, 0.05);
        border-radius: 8px; 
    }
    .notification-head{
        padding: 16px 32px;
        font-weight: 700;
        margin-left: 72px;
    }
    .notify-icon{
        width: 9px;
        height: 9px;
        background: #EB5757;
        border: 2px solid #FFFFFF;
        border-radius: 50%;
        top: 14px;
        right: 18px;
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
    .editBot{
        border: 1px solid #CCD7E8;
        box-sizing: border-box;
        border-radius: 8px;
        padding: 9px 12px;
        max-width: 110px;
        outline: none;
        color: #203359;
        font-size: 14px;
    }
    .BotRunBtn{
        background: #007AF5;
        border-radius: 6px;
        color: #fff;
        border: unset;
        padding: 8px 32px;
        outline: none;
        font-weight: 700;
    }
}
`;

export default HeaderStyle;
