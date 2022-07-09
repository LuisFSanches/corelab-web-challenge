import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --dark-green:#88e1cd;
        --light-green:#cdf2eb;
        --text-body:#0e221d;
        --gray:#ececec;

        --main-background:#f9f9f9;
        --white:#ffffff;

        --light-purple:#bfacf4;
        --dark-purple:#866af2;

    }

    ::-webkit-scrollbar{width:6px;border-left:1px solid #E6ECF8;}
    ::-webkit-scrollbar-thumb{background-color:var(--dark-green);}

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        max-height: 100vh;
    }

    body{
        background: var(--gray);
    }

    html{
         @media(max-width: 1080px){
            font-size: 93.75%; // 15px
        }
        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }

    h1,h2,h3,h4,h5, strong{
        font-family: 'Ubuntu', sans-serif;
        font-weight: 500;
    }
    p,a,label,span{
        font-family: 'Roboto', sans-serif;
    }

    a{
        outline: none;
        text-decoration: none;
    }

    button{
        cursor: pointer;
        outline: none;
        border: none;
        font-size: 1.15rem;
        font-weight: 500;
        background: none;
    }

    input,textarea,select{
        font-size: 1rem;
        font-family: 'Roboto', sans-serif;
        border: none;
        outline: none;
    }

    .react-modal-overlay{
        background: rgba(0,0,0,0.5);
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        border: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
     }
     .react-modal-content{
         width: 100%;
         max-width: 430px;
         background: var(--gray);
         padding:2rem 2.2rem;
         position: relative;
         border-radius: 0.25rem;
     }
     .react-modal-sideMenu{
        height: 100%;
        width: 18rem;
        background: var(--dark-purple);
        position: absolute;
        top: 0;
        right: 0;
     }


`;
