/* @flow */

import { BUTTON_COLOR, CLASS, TEXT_COLOR } from '../../../constants';

export const buttonColorStyle = `


    .${ CLASS.BUTTON }.${ CLASS.TEXT_COLOR }-${ TEXT_COLOR.BLACK } {
        color: #2C2E2F;
    }

    .${ CLASS.BUTTON }.${ CLASS.TEXT_COLOR }-${ TEXT_COLOR.WHITE } {
        color: #fff;
    }


    .${ CLASS.BUTTON }.${ CLASS.COLOR }-${ BUTTON_COLOR.GOLD } {
        background: #ffc439;
    }

    .${ CLASS.BUTTON }.${ CLASS.COLOR }-${ BUTTON_COLOR.GOLD }:hover {
        filter: brightness(0.95);
    }

    .${ CLASS.BUTTON }.${ CLASS.COLOR }-${ BUTTON_COLOR.GOLD }:focus {
        outline: none;
    }
    .${ CLASS.BUTTON }.${ CLASS.COLOR }-${ BUTTON_COLOR.GOLD }:focus::after {
        content: '';
        position: absolute;
        top: 5px;
        right: 5px;
        bottom: 5px;
        left: 5px;
        border: 0.125rem solid #009cde;
        border-radius: inherit;
        box-shadow: 0 0 0 0.5rem #0000a6;
    }


    .${ CLASS.BUTTON }.${ CLASS.COLOR }-${ BUTTON_COLOR.BLUE } {
        background: #009cde;
    }

    .${ CLASS.BUTTON }.${ CLASS.COLOR }-${ BUTTON_COLOR.BLUE }:hover {
        filter: brightness(0.95);
    }

    .${ CLASS.BUTTON }.${ CLASS.COLOR }-${ BUTTON_COLOR.BLUE }:focus {
        outline: none;
    }
    .${ CLASS.BUTTON }.${ CLASS.COLOR }-${ BUTTON_COLOR.BLUE }:focus::after {
        content: '';
        position: absolute;
        top: 5px;
        right: 5px;
        bottom: 5px;
        left: 5px;
        border: 0.125rem solid #0000a6;
        border-radius: inherit;
        box-shadow: 0 0 0 0.5rem #009cde;
    }

    .${ CLASS.BUTTON }.${ CLASS.COLOR }-${ BUTTON_COLOR.SILVER } {
        background: #eee;
    }

    .${ CLASS.BUTTON }.${ CLASS.COLOR }-${ BUTTON_COLOR.SILVER }:hover {
        filter: brightness(0.95);
    }

    .${ CLASS.BUTTON }.${ CLASS.COLOR }-${ BUTTON_COLOR.SILVER }:focus {
        outline: none;
    }
    .${ CLASS.BUTTON }.${ CLASS.COLOR }-${ BUTTON_COLOR.SILVER }:focus::after {
        content: '';
        position: absolute;
        top: 5px;
        right: 5px;
        bottom: 5px;
        left: 5px;
        border: 0.125rem solid #009cde;
        border-radius: inherit;
        box-shadow: 0 0 0 0.5rem #0000a6;
    }

    .${ CLASS.BUTTON }.${ CLASS.COLOR }-${ BUTTON_COLOR.DARKBLUE } {
        background: #003087;
    }

    .${ CLASS.BUTTON }.${ CLASS.COLOR }-${ BUTTON_COLOR.DARKBLUE }:hover {
        filter: brightness(1.2);
    }

    .${ CLASS.BUTTON }.${ CLASS.COLOR }-${ BUTTON_COLOR.DARKBLUE }:focus {
        outline: none;
    }
    .${ CLASS.BUTTON }.${ CLASS.COLOR }-${ BUTTON_COLOR.DARKBLUE }:focus::after {
        content: '';
        position: absolute;
        top: 5px;
        right: 5px;
        bottom: 5px;
        left: 5px;
        border: 0.125rem solid #009cde;
        border-radius: inherit;
        box-shadow: 0 0 0 0.5rem #0000a6;
    }



    .${ CLASS.BUTTON }.${ CLASS.COLOR }-${ BUTTON_COLOR.BLACK } {
        background: #2C2E2F;
    }

    .${ CLASS.BUTTON }.${ CLASS.COLOR }-${ BUTTON_COLOR.BLACK }:hover {
        filter: brightness(1.2);
    }

    .${ CLASS.BUTTON }.${ CLASS.COLOR }-${ BUTTON_COLOR.BLACK }:focus {
        outline: none;
    }
    .${ CLASS.BUTTON }.${ CLASS.COLOR }-${ BUTTON_COLOR.BLACK }:focus::after {
        content: '';
        position: absolute;
        top: 5px;
        right: 5px;
        bottom: 5px;
        left: 5px;
        border: 0.125rem solid #009cde;
        border-radius: inherit;
        box-shadow: 0 0 0 0.5rem #0000a6;
    }

    .${ CLASS.BUTTON }.${ CLASS.COLOR }-${ BUTTON_COLOR.WHITE } {
        background: #fff;
        border: 1px solid #2C2E2F;
    }

    .${ CLASS.BUTTON }.${ CLASS.COLOR }-${ BUTTON_COLOR.WHITE }:hover {
        filter: brightness(0.95);
    }

    .${ CLASS.BUTTON }.${ CLASS.COLOR }-${ BUTTON_COLOR.WHITE }:focus {
        outline: none;
    }
    .${ CLASS.BUTTON }.${ CLASS.COLOR }-${ BUTTON_COLOR.WHITE }:focus::after {
        content: '';
        position: absolute;
        top: 5px;
        right: 5px;
        bottom: 5px;
        left: 5px;
        border: 0.125rem solid #009cde;
        border-radius: inherit;
        box-shadow: 0 0 0 0.5rem #0000a6;
    }


    .${ CLASS.BUTTON } .${ CLASS.CARD } {
        position: relative;
    }

    .${ CLASS.BUTTON } .${ CLASS.CARD }::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    .${ CLASS.BUTTON } .${ CLASS.CARD }:hover {
        filter: brightness(1.2);
    }

    .${ CLASS.BUTTON } .${ CLASS.CARD }:focus {
        outline: none;
    }

    .${ CLASS.BUTTON } .${ CLASS.CARD }:focus::after {
        box-shadow: 0px 0px 1px 3px #0c67ff inset;
    }
`;
