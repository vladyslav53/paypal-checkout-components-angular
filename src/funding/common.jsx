/* @flow */
/* eslint no-template-curly-in-string: off, max-lines: off */
/** @jsx node */

import { PLATFORM, type LocaleType, COUNTRY, CARD, COMPONENTS } from '@paypal/sdk-constants/src';
import { type ChildType } from 'jsx-pragmatic/src';
import { LOGO_COLOR } from '@paypal/sdk-logos/src';

import { BUTTON_COLOR, BUTTON_SHAPE, BUTTON_LAYOUT, DEFAULT, BUTTON_LABEL } from '../constants';
import type { FundingEligibilityType } from '../types';
import type { Personalization } from '../zoid/buttons/props';


export type CardConfig = {|
    Label : () => ChildType
|};

export type FundingSourceConfig = {|
    shippingChange? : boolean,
    platforms : $ReadOnlyArray<$Values<typeof PLATFORM>>,
    layouts : $ReadOnlyArray<$Values<typeof BUTTON_LAYOUT>>,
    maxCards? : { [$Values<typeof COUNTRY>] : number },
    remembered? : boolean,
    vendors? : { [$Values<typeof CARD>] : ?CardConfig },
    eligible? : ({ components : $ReadOnlyArray<$Values<typeof COMPONENTS>>, fundingEligibility : FundingEligibilityType }) => boolean,
    Logo : ({|
        locale : LocaleType,
        label : ?$Values<typeof BUTTON_LABEL>,
        logoColor : $Values<typeof LOGO_COLOR>,
        optional? : boolean,
        fundingEligibility : FundingEligibilityType,
        onClick : (event : Event, ...args: $ReadOnlyArray<mixed>) => void
    |}) => ChildType,
    Label : ({|
        logo : ChildType,
        label : ?$Values<typeof BUTTON_LABEL>,
        locale : LocaleType,
        logoColor : $Values<typeof LOGO_COLOR>,
        multiple : boolean,
        period? : number,
        fundingEligibility : FundingEligibilityType,
        optional? : boolean,
        onClick : (event : Event, ...args: $ReadOnlyArray<mixed>) => void,
        layout : $Values<typeof BUTTON_LAYOUT>,
        clientAccessToken : ?string,
        personalization : Personalization
    |}) => ChildType,
    VaultLabel? : ({|
        logoColor : $Values<typeof LOGO_COLOR>,
        label : string,
        vendor? : $Values<typeof CARD>
    |}) => ChildType,
    Tag? : ({|
        locale : LocaleType,
        multiple : boolean
    |}) => ChildType,
    handleClick : boolean,
    colors : $ReadOnlyArray<$Values<typeof BUTTON_COLOR>>,
    secondaryColors : { [$Values<typeof BUTTON_COLOR>] : $Values<typeof BUTTON_COLOR> },
    secondaryVaultColors : { [$Values<typeof BUTTON_COLOR>] : $Values<typeof BUTTON_COLOR> },
    logoColors : { [$Values<typeof BUTTON_COLOR>] : $Values<typeof LOGO_COLOR> },
    shapes : $ReadOnlyArray<$Values<typeof BUTTON_SHAPE>>
|};

export const DEFAULT_FUNDING_CONFIG : FundingSourceConfig = {

    layouts: [
        BUTTON_LAYOUT.VERTICAL
    ],

    platforms: [
        PLATFORM.DESKTOP,
        PLATFORM.MOBILE
    ],

    handleClick: false,

    colors: [
        BUTTON_COLOR.SILVER,
        BUTTON_COLOR.BLACK,
        BUTTON_COLOR.WHITE
    ],

    logoColors: {
        [ BUTTON_COLOR.BLACK ]: LOGO_COLOR.WHITE
    },

    shapes: [
        BUTTON_SHAPE.PILL,
        BUTTON_SHAPE.RECT
    ],

    secondaryColors: {
        [ DEFAULT ]:            BUTTON_COLOR.SILVER,
        [ BUTTON_COLOR.BLACK ]: BUTTON_COLOR.BLACK,
        [ BUTTON_COLOR.WHITE ]: BUTTON_COLOR.WHITE
    },

    secondaryVaultColors: {
        [ DEFAULT ]:            BUTTON_COLOR.SILVER,
        [ BUTTON_COLOR.BLACK ]: BUTTON_COLOR.BLACK,
        [ BUTTON_COLOR.WHITE ]: BUTTON_COLOR.WHITE
    },

    Logo: () => {
        throw new Error(`Not implemented`);
    },

    Label: ({ logo }) => {
        return logo;
    }
};
