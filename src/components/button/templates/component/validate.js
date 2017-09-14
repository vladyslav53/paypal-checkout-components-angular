/* @flow */

import { componentContent } from './content';
import { BUTTON_CONFIG, getButtonConfig } from './config';

export function validateButtonLocale(locale : string) {

    if (!locale) {
        throw new Error(`Expected props.locale to be set`);
    }

    if (!locale.match(/^[a-z]{2}[_][A-Z][A-Z0-9]$/)) {
        throw new Error(`Expected props.locale to be valid, got ${ locale }`);
    }

    let [ lang, country ] = locale.split('_');

    if (!componentContent[country] || !componentContent[country][lang]) {
        throw new Error(`Expected props.locale to be valid`);
    }
}

export function validateButtonStyle(style : Object = {}) {

    if (!style) {
        throw new Error(`Expected props.style to be set`);
    }

    let label = style.label || getButtonConfig('default', 'defaultLabel');

    if (!BUTTON_CONFIG[label]) {
        throw new Error(`Invalid button label: ${ label }`);
    }

    if (!getButtonConfig(label, 'allowPrimary')) {
        throw new Error(`${ label } can not be used as primary button label`);
    }

    let { color, shape, size, branding, fundingicons, tagline } = style;

    if (color && getButtonConfig(label, 'colors').indexOf(color) === -1) {
        throw new Error(`Unexpected color for ${ label } button: ${ color }`);
    }

    if (shape && getButtonConfig(label, 'shapes').indexOf(shape) === -1) {
        throw new Error(`Unexpected shape for ${ label } button: ${ shape }`);
    }

    if (size && getButtonConfig(label, 'sizes').indexOf(size) === -1) {
        throw new Error(`Unexpected size for ${ label } button: ${ size }`);
    }

    if (branding === false) {
        throw new Error(`Unexpected branding=false for ${ label } button`);
    }

    if (fundingicons && !getButtonConfig(label, 'allowFundingIcons')) {
        throw new Error(`Unexpected fundingicons=true for ${ label } button`);
    }

    if (tagline === true) {
        throw new Error(`Unexpected tagline=true for ${ label } button`);
    }
}

export function validateButtonProps(props : Object) {

    if (!props) {
        throw new Error(`Expected props`);
    }

    let { locale, style } = props;

    validateButtonLocale(locale);
    validateButtonStyle(style);
}
