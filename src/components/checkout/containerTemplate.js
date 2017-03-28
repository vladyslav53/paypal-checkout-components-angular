
export let containerTemplate = (ctx = {}) => `
    
    <div class="paypal-checkout-overlay ${ctx.CLASS.FOCUS}">
        <a href="#${ctx.CLASS.CLOSE}" class="${ctx.CLASS.CLOSE}"></a>
        <div class="paypal-checkout-modal">
            <div class="paypal-checkout-logo"></div>
            <div class="paypal-checkout-message">
                ${ctx.content.windowMessage}
            </div>
            <div class="paypal-checkout-continue">
                <a href="#${ctx.CLASS.FOCUS}" class="${ctx.CLASS.FOCUS}">${ctx.content.continue}</a>
            </div>
            <div class="paypal-checkout-loading">
                <div class="paypal-spinner"></div>
            </div>
        </div>
    
        <div class="${ctx.CLASS.ELEMENT} paypal-checkout-iframe-element"></div>
    </div>
    
    <style>
    
        #${ctx.id}.${ctx.CLASS.POPUP}, #${ctx.id}.${ctx.CLASS.IFRAME} {
            position: fixed;
            z-index: 2147483647;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
    
            -webkit-animation-duration: 1s;
            animation-duration: 1s;
    
            animation-fill-mode:forwards;
            animation-iteration-count: 1;
    
            -webkit-animation-fill-mode:forwards;
            -webkit-animation-iteration-count: 1;
        }
    
        #${ctx.id} .paypal-checkout-overlay {
    
            position: absolute;
    
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
    
            background-color: black;
    
            background-color: rgba(0, 0, 0, 0.8);
    
            background: -webkit-radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.6) 1%, rgba(0,0,0,0.8) 100%);
            background: -moz-radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.6) 1%, rgba(0,0,0,0.8) 100%);
            background: -ms-radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.6) 1%, rgba(0,0,0,0.8) 100%);
            background: radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.6) 1%, rgba(0,0,0,0.8) 100%);
    
            -webkit-transform: translate3d(0, 0, 0);
            -moz-transform: translate3d(0, 0, 0);
            -ms-transform: translate3d(0, 0, 0);
            -o-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    
        #${ctx.id}.${ctx.CLASS.POPUP} .paypal-checkout-overlay {
            cursor: pointer;
        }
    
        #${ctx.id}.${ctx.CLASS.POPUP} .paypal-checkout-overlay {
            cursor: pointer;
        }
    
        #${ctx.id} .paypal-checkout-overlay .paypal-checkout-modal {
            font-family: "HelveticaNeue", "HelveticaNeue-Light", "Helvetica Neue Light", helvetica, arial, sans-serif;
            font-size: 14px;
            text-align: center;
            color: #fff;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            -ms-box-sizing: border-box;
            box-sizing: border-box;
            width: 350px;
            top: 50%;
            left: 50%;
            position: fixed;
            margin-left: -165px;
            margin-top: -80px;
            cursor: pointer;
            text-align: center;
        }
    
        #${ctx.id}.${ctx.CLASS.LOADING} .paypal-checkout-message, #${ctx.id}.${ctx.CLASS.LOADING} .paypal-checkout-continue {
            display: none;
        }
    
        .paypal-checkout-loading {
            display: none;
        }
    
        #${ctx.id}.${ctx.CLASS.LOADING} .paypal-checkout-loading {
            display: block;
        }
    
        #${ctx.id} .paypal-checkout-overlay .paypal-checkout-modal .paypal-checkout-logo {
            background: url("https://www.paypalobjects.com/images/checkout/incontext/incontext_mask_sprite.png") no-repeat -18px -16px;
            width: 132px;
            height: 36px;
            cursor: pointer;
            margin-bottom: 30px;
            display: inline-block;
        }
    
        @media only screen and (-webkit-min-device-pixel-ratio: 2), not all, not all, only screen and (min-resolution: 2dppx), only screen and (min-resolution: 192dpi) {
            #${ctx.id} .paypal-checkout-overlay .paypal-checkout-modal .paypal-checkout-logo {
                background-image: url("https://www.paypalobjects.com/images/checkout/incontext/incontext_mask_sprite_2x.png");
                background-size: 200px 200px;
            }
        }
    
        #${ctx.id} .paypal-checkout-overlay .paypal-checkout-modal .paypal-checkout-message {
            font-size: 15px;
            line-height: 1.5;
            padding: 10px 0;
        }
    
        #${ctx.id}.${ctx.CLASS.IFRAME} .paypal-checkout-message, #${ctx.id}.${ctx.CLASS.IFRAME} .paypal-checkout-continue {
            display: none;
        }
    
        #${ctx.id} .paypal-checkout-overlay .paypal-checkout-modal .paypal-checkout-continue {
            font-size: 15px;
            line-height: 1.35;
            padding: 10px 0;
            text-decoration: underline;
            font-weight: bold;
        }
    
        #${ctx.id} .${ctx.CLASS.CLOSE} {
            position: absolute;
            right: 16px;
            top: 16px;
            width: 16px;
            height: 16px;
            opacity: 0.6;
        }
    
        #${ctx.id}.${ctx.CLASS.LOADING} .${ctx.CLASS.CLOSE} {
            display: none;
        }
    
        #${ctx.id} .${ctx.CLASS.CLOSE}:hover {
            opacity: 1;
        }
    
        #${ctx.id} .${ctx.CLASS.CLOSE}:before, .${ctx.CLASS.CLOSE}:after {
            position: absolute;
            left: 8px;
            content: ' ';
            height: 16px;
            width: 2px;
            background-color: white;
        }
    
        #${ctx.id} .${ctx.CLASS.CLOSE}:before {
            transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
        }
    
        #${ctx.id} .${ctx.CLASS.CLOSE}:after {
            transform: rotate(-45deg);
            -webkit-transform: rotate(-45deg);
            -moz-transform: rotate(-45deg);
            -o-transform: rotate(-45deg);
            -ms-transform: rotate(-45deg);
        }
    
        #${ctx.id} a {
            color: white;
        }
    
        #${ctx.id} .paypal-checkout-iframe-element {
            display: none;
        }
    
        #${ctx.id}.${ctx.CLASS.IFRAME} .paypal-checkout-iframe-element {
    
            display: block;
    
            -webkit-transition: all 0.6s ease;
            -moz-transition: all 0.6s ease;
            -ms-transition: all 0.6s ease;
            -o-transition: all 0.6 ease;
            transition: all 0.6s ease;
    
            -webkit-animation-duration: 1s;
            animation-duration: 1s;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
    
            position: fixed;
    
            top: 50%;
            left: 50%;
    
            transform: translate3d(-50%, -50%, 0);
            -webkit-transform: translate3d(-50%, -50%, 0);
            -moz-transform: translate3d(-50%, -50%, 0);
            -o-transform: translate3d(-50%, -50%, 0);
            -ms-transform: translate3d(-50%, -50%, 0);
    
            max-height: calc(100% - 20px);
            max-height: -webkit-calc(100% - 20px);
            max-height: -moz-calc(100% - 20px);
            max-height: -o-calc(100% - 20px);
            max-height: -ms-calc(100% - 20px);
    
            max-width: calc(100% - 20px);
            max-width: -webkit-calc(100% - 20px);
            max-width: -moz-calc(100% - 20px);
            max-width: -o-calc(100% - 20px);
            max-width: -ms-calc(100% - 20px);
    
            width: 450px;
            height: 535px;
    
            min-width: 450px;
    
            background-color: white;
            border-radius: 10px;
    
            overflow: auto;
            -webkit-overflow-scrolling:touch;
    
        }
    
        @media screen and (max-width: 450px) {
    
            #${ctx.id}.${ctx.CLASS.IFRAME} .paypal-checkout-iframe-element {
                min-width: calc(100% - 20px);
                min-width: -webkit-calc(100% - 20px);
                min-width: -moz-calc(100% - 20px);
                min-width: -o-calc(100% - 20px);
                min-width: -ms-calc(100% - 20px);
            }
        }
    
        @media screen and (min-width: 490px) {
    
            #${ctx.id}.${ctx.CLASS.IFRAME} .paypal-checkout-iframe-element {
                max-width: 450px;
                max-width: 450px;
                max-width: 450px;
                max-width: 450px;
    
                max-width: 450px;
            }
        }
    
        #${ctx.id}.${ctx.CLASS.IFRAME} .paypal-checkout-iframe-element iframe {
    
            width: 100%;
            height: 100%;
        }
    
    
        /*!
         * animate.css -http://daneden.me/animate
         * Version - 3.5.1
         * Licensed under the MIT license - http://opensource.org/licenses/MIT
         *
         * Copyright (c) 2016 Daniel Eden
         */
    
        @-webkit-keyframes ${ctx.ANIMATION.SHOW_COMPONENT} {
            from, 60%, 75%, 90%, to {
                -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
                animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
            }
    
            from {
                opacity: 0;
                -webkit-transform: translate3d(0, 3000px, 0) translate3d(-50%, -50%, 0);
                transform: translate3d(0, 3000px, 0) translate3d(-50%, -50%, 0);
            }
    
            60% {
                opacity: 1;
                -webkit-transform: translate3d(0, -20px, 0) translate3d(-50%, -50%, 0);
                transform: translate3d(0, -20px, 0) translate3d(-50%, -50%, 0);
            }
    
            75% {
                -webkit-transform: translate3d(0, 10px, 0) translate3d(-50%, -50%, 0);
                transform: translate3d(0, 10px, 0) translate3d(-50%, -50%, 0);
            }
    
            90% {
                -webkit-transform: translate3d(0, -5px, 0) translate3d(-50%, -50%, 0);
                transform: translate3d(0, -5px, 0) translate3d(-50%, -50%, 0);
            }
    
            to {
                -webkit-transform: translate3d(0, 0, 0) translate3d(-50%, -50%, 0);
                transform: translate3d(0, 0, 0) translate3d(-50%, -50%, 0);
            }
        }
    
        @keyframes ${ctx.ANIMATION.SHOW_COMPONENT} {
            from, 60%, 75%, 90%, to {
                -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
                animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
            }
    
            from {
                display: block;
                opacity: 0;
                -webkit-transform: translate3d(0, 3000px, 0) translate3d(-50%, -50%, 0);
                transform: translate3d(0, 3000px, 0) translate3d(-50%, -50%, 0);
            }
    
            60% {
                opacity: 1;
                -webkit-transform: translate3d(0, -20px, 0) translate3d(-50%, -50%, 0);
                transform: translate3d(0, -20px, 0) translate3d(-50%, -50%, 0);
            }
    
            75% {
                -webkit-transform: translate3d(0, 10px, 0) translate3d(-50%, -50%, 0);
                transform: translate3d(0, 10px, 0) translate3d(-50%, -50%, 0);
            }
    
            90% {
                -webkit-transform: translate3d(0, -5px, 0) translate3d(-50%, -50%, 0);
                transform: translate3d(0, -5px, 0) translate3d(-50%, -50%, 0);
            }
    
            to {
                -webkit-transform: translate3d(0, 0, 0) translate3d(-50%, -50%, 0);
                transform: translate3d(0, 0, 0) translate3d(-50%, -50%, 0);
            }
        }
    
        @-webkit-keyframes ${ctx.ANIMATION.HIDE_COMPONENT} {
            20% {
                -webkit-transform: translate3d(0, 10px, 0) translate3d(-50%, -50%, 0);
                transform: translate3d(0, 10px, 0) translate3d(-50%, -50%, 0);
            }
    
            40%, 45% {
                opacity: 1;
                -webkit-transform: translate3d(0, -20px, 0) translate3d(-50%, -50%, 0);
                transform: translate3d(0, -20px, 0) translate3d(-50%, -50%, 0);
            }
    
            to {
                opacity: 0;
                -webkit-transform: translate3d(0, 2000px, 0) translate3d(-50%, -50%, 0);
                transform: translate3d(0, 2000px, 0) translate3d(-50%, -50%, 0);
            }
        }
    
        @keyframes ${ctx.ANIMATION.HIDE_COMPONENT} {
            20% {
                -webkit-transform: translate3d(0, 10px, 0) translate3d(-50%, -50%, 0);
                transform: translate3d(0, 10px, 0) translate3d(-50%, -50%, 0);
            }
    
            40%, 45% {
                opacity: 1;
                -webkit-transform: translate3d(0, -20px, 0) translate3d(-50%, -50%, 0);
                transform: translate3d(0, -20px, 0) translate3d(-50%, -50%, 0);
            }
    
            to {
                opacity: 0;
                -webkit-transform: translate3d(0, 2000px, 0) translate3d(-50%, -50%, 0);
                transform: translate3d(0, 2000px, 0) translate3d(-50%, -50%, 0);
            }
        }
    
        @-webkit-keyframes ${ctx.ANIMATION.SHOW_CONTAINER} {
            from {
                opacity: 0;
            }
    
            to {
                opacity: 1;
            }
        }
    
        @keyframes ${ctx.ANIMATION.SHOW_CONTAINER} {
            from {
                opacity: 0;
            }
    
            to {
                opacity: 1;
            }
        }
    
        @-webkit-keyframes ${ctx.ANIMATION.HIDE_CONTAINER} {
            from {
                opacity: 1;
            }
    
            50% {
                opacity: 1;
            }
    
            to {
                opacity: 0;
            }
        }
    
        @keyframes ${ctx.ANIMATION.HIDE_CONTAINER} {
            from {
                opacity: 1;
            }
    
            50% {
                opacity: 1;
            }
    
            to {
                opacity: 0;
            }
        }
    
    
    
        .paypal-spinner {
            height: 30px;
            width: 30px;
            display: inline-block;
            box-sizing: content-box;
            opacity: 1;
            filter: alpha(opacity=100);
            -webkit-animation: rotation .7s infinite linear;
            -moz-animation: rotation .7s infinite linear;
            -o-animation: rotation .7s infinite linear;
            animation: rotation .7s infinite linear;
            border-left: 8px solid rgba(0, 0, 0, .2);
            border-right: 8px solid rgba(0, 0, 0, .2);
            border-bottom: 8px solid rgba(0, 0, 0, .2);
            border-top: 8px solid #fff;
            border-radius: 100%
        }
    
        @-webkit-keyframes rotation {
            from {
                -webkit-transform: rotate(0deg)
            }
            to {
                -webkit-transform: rotate(359deg)
            }
        }
        @-moz-keyframes rotation {
            from {
                -moz-transform: rotate(0deg)
            }
            to {
                -moz-transform: rotate(359deg)
            }
        }
        @-o-keyframes rotation {
            from {
                -o-transform: rotate(0deg)
            }
            to {
                -o-transform: rotate(359deg)
            }
        }
        @keyframes rotation {
            from {
                transform: rotate(0deg)
            }
            to {
                transform: rotate(359deg)
            }
        }
    </style>
    
    <!--[if IE 9 ]>
        <style>
            #${ctx.id}.${ctx.CLASS.IFRAME} .paypal-checkout-iframe-element {
    
                transform: none;
                -ms-transform: none;
    
                transform: translateX(-50%) translateY(-50%);
                -ms-transform:  translateX(-50%) translateY(-50%);
            }
        </style>
    <![endif]-->

`;
