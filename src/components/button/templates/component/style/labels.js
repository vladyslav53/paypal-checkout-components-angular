/* @flow */

import { BUTTON_STYLE } from '../../style';
import { BUTTON_LABEL, BUTTON_LOGO, BUTTON_SIZE } from '../../../constants';

import { CLASS } from './class';

export let labelStyle = `

    .${ CLASS.BUTTON } .${ CLASS.LABEL }-${ BUTTON_LABEL.CREDIT } .${ CLASS.TEXT } {
        display: none !important;
    }

    @media only screen and (max-width : ${ BUTTON_STYLE[BUTTON_SIZE.SMALL].minWidth  }px) {

        .${ CLASS.BUTTON }.${ CLASS.LABEL }-${ BUTTON_LABEL.CREDIT } .${ CLASS.LOGO }.${ CLASS.LOGO }-${ BUTTON_LOGO.PAYPAL } {
            display: none;
        }
    }
`;
