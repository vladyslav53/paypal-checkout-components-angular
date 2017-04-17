/* @flow */

export let componentStyle = `

    html, body {
        padding: 0;
        margin: 0;
        width: 100%;
        overflow: hidden;
        text-align: center;
    }

    * {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    

    /* Base Button */

    .paypal-button {
        white-space: nowrap;
        margin: 0;
        padding: 2px;
        background: 0;
        border: 0;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        text-transform: none;
        font-weight: 500;
        -webkit-font-smoothing: antialiased;
        font-smoothing: antialiased;
        cursor: pointer;
        z-index: 0;

        width: 100%;

        min-width: 80px;
        min-height: 22px;

        box-sizing: border-box;
        outline: none;
    }

    .paypal-button .paypal-button-content {
        padding: 4px 8px 4px;
        border: 1px solid transparent;
        border-radius: 0 3px 3px 0;
        position: relative;

        width: 100%;

        box-sizing: border-box;
        border: none;
    }
    
    .paypal-button .paypal-button-content svg {
        padding: 0;
        display: inline-block;
        background: none;
        border: none;
        width: auto;
        vertical-align: top;
        
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
    
    .paypal-button .paypal-button-content svg.logo-pp {
        height: 115%;
        margin-right: 2px;
    }
    
    .paypal-button .paypal-button-content svg.logo-paypal {
        height: 110%;
    }
    
    .paypal-button .paypal-button-content svg.logo-credit {
        height: 100%;
    }

    .paypal-button .paypal-button-content .text {
        display: inline-block;
        white-space: pre;
        
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }

    .paypal-button .paypal-button-content::before {
        content: "";
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
    }

    .paypal-button .paypal-button-tag-content {
        max-width: 100%;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-weight: normal;
        color: #003366;
        display: block;
        text-align: center;
        width: auto;
        font-size: 9px;
        margin-top: 1px;
    }


    @media only screen and (max-width : 79px) {
        .paypal-button {
            display: none;
        }
    }

    @media only screen and (max-height : 21px) {
        .paypal-button {
            display: none;
        }
    }


    /* Tiny */

    @media only screen and (min-width : 80px) and (min-height: 22px) and (max-width: 99px) {

        .paypal-button {
            max-width: 100px;
        }

        .paypal-button .paypal-button-content {
            height: 18px;
            max-height: 18px;
            border-radius: 9px;
            font-size: 10px;
        }
        
        .paypal-button .paypal-button-content svg.logo-pp {
            height: 160%;
        }
        
        .paypal-button .paypal-button-content svg.logo-paypal {
            height: 150%;
        }

        .paypal-button .paypal-button-content::before {
            padding: 1px;
            top: -1px;
            left: -1px;
            z-index: -1;
            border-radius: 10px;
        }

        .paypal-button.paypal-shape-rect .paypal-button-content,
        .paypal-button.paypal-shape-rect .paypal-button-content::before {
            border-radius: 3px;
        }
    }

    /* Small */

    @media only screen and (min-width : 100px) and (min-height: 22px) {

        .paypal-button {
            max-width: 200px;
        }

        .paypal-button .paypal-button-content {
            height: 24px;
            max-height: 24px;
            border-radius: 12px;
            font-size: 10px;
        }
        
        .paypal-button .paypal-button-content::before {
            padding: 1px;
            top: -1px;
            left: -1px;
            border-radius: 14px;
        }

        .paypal-button.paypal-shape-rect .paypal-button-content,
        .paypal-button.paypal-shape-rect .paypal-button-content::before {
            border-radius: 4px;
        }
    }


    /* Medium */
    
    @media only screen and (min-width : 200px) and (min-height: 48px) {

        .paypal-button {
            max-width: 300px;
        }

        .paypal-button .paypal-button-content {
            height: 30px;
            max-height: 30px;
            border-radius: 15px;
            font-size: 12px;
        }

        .paypal-button .paypal-button-content::before {
            padding: 2px;
            top: -2px;
            left: -2px;
            border-radius: 17px;
        }

        .paypal-button .paypal-button-tag-content {
            font-size: 10px;
        }

        .paypal-button.paypal-shape-rect .paypal-button-content,
        .paypal-button.paypal-shape-rect .paypal-button-content::before {
            border-radius: 6px;
        }
    }


    /* Large */

    @media only screen and (min-width : 300px) and (min-height: 60px) {

        .paypal-button {
            max-width: 500px;
        }

        .paypal-button .paypal-button-content {
            height: 40px;
            max-height: 40px;
            border-radius: 20px;
            font-size: 14px;
        }
        
        .paypal-button .paypal-button-content svg.logo-pp {
            height: 95%;
        }
        
        .paypal-button .paypal-button-content svg.logo-paypal {
            height: 85%;
        }
        
        .paypal-button .paypal-button-content::before {
            padding: 2px;
            top: -2px;
            left: -2px;
            border-radius: 22px;
        }

        .paypal-button.paypal-shape-rect .paypal-button-content,
        .paypal-button.paypal-shape-rect .paypal-button-content::before {
            border-radius: 6px;
        }
    }




    /* Gold */

    .paypal-button.paypal-color-gold .paypal-button-content {
        background: #ffc439;
        color: #000;
        text-shadow: 0px 1px 0 #ffdc88;
    }

    .paypal-button.paypal-color-gold .paypal-button-content::before {
        background: -webkit-gradient(linear, 0 0, 0 100%, from(#ffdc88), to(#d9a630)) 0 100%;
        background: -webkit-linear-gradient(#ffdc88, #d9a630) 0 100%;
        background: -moz-linear-gradient(#ffdc88, #d9a630) 0 100%;
        background: -o-linear-gradient(#ffdc88, #d9a630) 0 100%;
        background: linear-gradient(to bottom, #ffdc88, #d9a630) 0 100%;
    }


    /* Blue */

    .paypal-button.paypal-color-blue .paypal-button-content {
        background: #009cde;
        color: #fff;
        text-shadow: 0px -1px 0 #0d86bb;
    }
    .paypal-button.paypal-color-blue .paypal-button-content::before {
        background: -webkit-gradient(linear, 0 0, 0 100%, from(#4dbae8), to(#0d86bb)) 0 100%;
        background: -webkit-linear-gradient(#4dbae8, #0d86bb) 0 100%;
        background: -moz-linear-gradient(#4dbae8, #0d86bb) 0 100%;
        background: -o-linear-gradient(#4dbae8, #0d86bb) 0 100%;
        background: linear-gradient(to bottom, #4dbae8, #0d86bb) 0 100%;
    }


    /* Silver */

    .paypal-button.paypal-color-silver .paypal-button-content {
        background: #eee;
        color: #000;
        text-shadow: 0px -1px 0 #ccc;
    }

    .paypal-button.paypal-color-silver .paypal-button-content::before {
        background: -webkit-gradient(linear, 0 0, 0 100%, from(#f5f5f5), to(#cccccc)) 0 100%;
        background: -webkit-linear-gradient(#f5f5f5, #cccccc) 0 100%;
        background: -moz-linear-gradient(#f5f5f5, #cccccc) 0 100%;
        background: -o-linear-gradient(#f5f5f5, #cccccc) 0 100%;
        background: linear-gradient(to bottom, #f5f5f5, #cccccc) 0 100%;
    }


    /* Credit Blue */

    .paypal-button.paypal-style-credit .paypal-button-content {
        background: #003087;
        color: #fff;
        text-shadow: 0px -1px 0 #0d86bb;
    }

    .paypal-button.paypal-style-credit .paypal-button-content::before {
        background: -webkit-gradient(linear, 0 0, 0 100%, from(#f5f5f5), to(#cccccc)) 0 100% !important;
        background: -webkit-linear-gradient(#f5f5f5, #cccccc) 0 100%;
        background: -moz-linear-gradient(#f5f5f5, #cccccc) 0 100%;
        background: -o-linear-gradient(#f5f5f5, #cccccc) 0 100%;
        background: linear-gradient(to bottom, #f5f5f5, #cccccc) 0 100% !important;
    }





    /* Credit Button */

    @media only screen and (max-width : 147px) {
        .paypal-button.paypal-style-credit {
            display: none;
        }
    }

    .paypal-button.paypal-style-credit {
        min-width: 148px;
        min-height: 42px;
    }

    .paypal-button.paypal-style-credit .paypal-button-content .text {
        display: none !important;
    }
    
    
    /* Pay Button */

    @media only screen and (max-width : 147px) {
        .paypal-button.paypal-style-pay {
            display: none;
        }
    }

    .paypal-button.paypal-style-pay {
        min-width: 148px;
        min-height: 42px;
    }
`;
