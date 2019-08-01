/* @flow */

import { ZalgoPromise } from 'zalgo-promise/src';
import { values, uniqueID } from 'belter/src';
import { type OrderCreateRequest,
    type OrderGetResponse, type OrderCaptureResponse, type OrderAuthorizeResponse } from '@paypal/sdk-client/src';
import { FUNDING, PLATFORM, INTENT, COMMIT, VAULT,
    ENV, COUNTRY, LANG, COUNTRY_LANGS, type LocaleType, CARD, COMPONENTS } from '@paypal/sdk-constants/src';
import { type CrossDomainWindowType } from 'cross-domain-utils/src';

import { BUTTON_LABEL, BUTTON_COLOR, BUTTON_LAYOUT, BUTTON_SHAPE, BUTTON_SIZE } from '../../constants';
import { getFundingConfig } from '../../funding';
import type { FundingEligibilityType } from '../../types';
import { BUTTON_SIZE_STYLE } from '../../ui/buttons/config';

export type CreateOrderData = {|

|} | {};

export type CreateOrderActions = {|
    order : {
        create : (OrderCreateRequest) => ZalgoPromise<string>
    }
|};

export type CreateOrder = (CreateOrderData, CreateOrderActions) => ZalgoPromise<string> | string;

export type OnApproveData = {|
    orderID : string,
    payerID : string,
    paymentID? : string
|};

export type CreateBillingAgreement = () => ZalgoPromise<string> | string;

export type CreateSubscriptionRequest = {||};
export type SubscriptionResponse = {||} | {};
export type CreateSubscriptionData = {|
|} | {};

export type CreateSubscriptionActions = {|
    subscription : {
        create : (CreateSubscriptionRequest) => ZalgoPromise<string>,
        revise : (CreateSubscriptionRequest) => ZalgoPromise<string>
    }
|};

export type CreateSubscription = (CreateSubscriptionData, CreateSubscriptionActions) => ZalgoPromise<string> | string;

export type OnApproveActions = {|
    redirect : (string, CrossDomainWindowType) => ZalgoPromise<void>,
    order : {
        capture : () => ZalgoPromise<OrderCaptureResponse>,
        get : () => ZalgoPromise<OrderGetResponse>,
        authorize : () => ZalgoPromise<OrderAuthorizeResponse>
    },
    subscription : {
        get : () => ZalgoPromise<SubscriptionResponse>,
        activate : () => ZalgoPromise<SubscriptionResponse>
    }
|};

export type OnApprove = (data : OnApproveData, actions : OnApproveActions) => ZalgoPromise<void> | void;

type OnShippingChangeAddress = {|
    city : string,
    state : string,
    country_code : string,
    postal_code : string
|};

type OnShippingChangeMethod = {|
    label : string,
    type : string,
    amount : {
        currency_code : string,
        value : string
    }
|};

export type OnShippingChangeData = {|
    orderID : string,
    payerID : string,
    paymentID? : string,
    shipping_address : OnShippingChangeAddress,
    selected_shipping_method : OnShippingChangeMethod
|};

export type OnShippingChangeActions = {|
    order : {
        patch : () => ZalgoPromise<OrderGetResponse>
    }
|};

export type OnShippingChange = (data : OnShippingChangeData, actions : OnShippingChangeActions) => ZalgoPromise<void> | void;

export type OnCancelData = {|
    orderID : string,
    paymentID? : string
|};

export type OnCancelActions = {|
    redirect : (string, CrossDomainWindowType) => ZalgoPromise<void>
|};

export type OnCancel = (OnCancelData, OnCancelActions) => ZalgoPromise<void> | void;

export type OnClickData = {|
    fundingSource : $Values<typeof FUNDING>,
    card? : $Values<typeof CARD>
|};

export type OnClickActions = {|
    resolve : () => ZalgoPromise<void>,
    reject : () => ZalgoPromise<void>
|};

export type OnClick = (OnClickData, OnClickActions) => void;

export type ButtonStyle = {|
    label : ?$Values<typeof BUTTON_LABEL>,
    color : $Values<typeof BUTTON_COLOR>,
    shape : $Values<typeof BUTTON_SHAPE>,
    tagline : boolean,
    layout : $Values<typeof BUTTON_LAYOUT>,
    period? : number,
    height? : number
|};

export type ButtonStyleInputs = {|
    label? : $PropertyType<ButtonStyle, 'label'> | void,
    color? : $PropertyType<ButtonStyle, 'color'> | void,
    shape? : $PropertyType<ButtonStyle, 'shape'> | void,
    tagline? : $PropertyType<ButtonStyle, 'tagline'> | void,
    layout? : $PropertyType<ButtonStyle, 'layout'> | void,
    period? : $PropertyType<ButtonStyle, 'period'> | void,
    height? : $PropertyType<ButtonStyle, 'height'> | void
|};

export type Personalization = {|
    tagline? : {|
        text : string,
        tracking : {
            impression : ?string
        }
    |}
|};

export type RenderButtonProps = {|
    style : ButtonStyle,
    locale : LocaleType,
    commit : boolean,
    env : $Values<typeof ENV>,
    stage? : string,
    stageUrl? : string,
    platform : $Values<typeof PLATFORM>,
    fundingEligibility : FundingEligibilityType,
    remembered : $ReadOnlyArray<$Values<typeof FUNDING>>,
    clientID : string,
    sessionID : string,
    buttonSessionID : string,
    nonce : string,
    components : $ReadOnlyArray<$Values<typeof COMPONENTS>>,
    onShippingChange : ?OnShippingChange,
    personalization : ?Personalization,
    clientAccessToken : ?string
|};

export type PrerenderDetails = {|
    win : ?CrossDomainWindowType,
    fundingSource : $Values<typeof FUNDING>,
    card : ?$Values<typeof CARD>
|};

export type GetPrerenderDetails = () => PrerenderDetails | void;

export type ButtonProps = {|
    intent : $Values<typeof INTENT>,
    createOrder : CreateOrder,
    createBillingAgreement : CreateBillingAgreement,
    createSubscription : CreateSubscription,
    oncancel : OnCancel,
    onApprove : OnApprove,
    onClick : OnClick,
    getPrerenderDetails : GetPrerenderDetails,
    style : ButtonStyle,
    locale : LocaleType,
    commit : boolean,
    env : $Values<typeof ENV>,
    stage? : string,
    stageUrl? : string,
    platform : $Values<typeof PLATFORM>,
    fundingEligibility : FundingEligibilityType,
    remembered : $ReadOnlyArray<$Values<typeof FUNDING>>,
    remember : ($ReadOnlyArray<$Values<typeof FUNDING>>) => void,
    clientID : string,
    sessionID : string,
    buttonSessionID : string,
    onShippingChange : ?OnShippingChange,
    clientAccessToken : ?string,
    nonce : string
|};

export type ButtonPropsInputs = {|
    clientID : string,
    style? : ButtonStyleInputs | void,
    locale? : $PropertyType<ButtonProps, 'locale'> | void,
    commit? : $PropertyType<ButtonProps, 'commit'> | void,
    env? : $PropertyType<ButtonProps, 'env'> | void,
    meta? : $PropertyType<ButtonProps, 'meta'> | void,
    stage? : $PropertyType<ButtonProps, 'stage'> | void,
    stageUrl? : $PropertyType<ButtonProps, 'stageUrl'> | void,
    platform? : $PropertyType<ButtonProps, 'platform'> | void,
    fundingEligibility? : $PropertyType<ButtonProps, 'fundingEligibility'> | void,
    remembered? : $PropertyType<ButtonProps, 'remembered'> | void,
    remember? : $PropertyType<ButtonProps, 'remember'> | void,
    sessionID? : $PropertyType<ButtonProps, 'sessionID'> | void,
    buttonSessionID? : $PropertyType<ButtonProps, 'buttonSessionID'> | void,
    nonce? : string,
    components : $ReadOnlyArray<$Values<typeof COMPONENTS>>,
    onShippingChange : ?Function,
    personalization? : Personalization,
    clientAccessToken? : string,
    csp? : {
        nonce? : string
    }
|};

export const DEFAULT_STYLE = {
    LAYOUT: BUTTON_LAYOUT.VERTICAL,
    COLOR:  BUTTON_COLOR.GOLD,
    SHAPE:  BUTTON_SHAPE.RECT
};

export const DEFAULT_PROPS = {
    LOCALE:   {
        country: COUNTRY.US,
        lang:    LANG.EN
    },
    COMMIT:   COMMIT.TRUE,
    VAULT:    VAULT.FALSE,
    INTENT:   INTENT.CAPTURE,
    ENV:      ENV.PRODUCTION,
    PLATFORM: PLATFORM.DESKTOP
};

// $FlowFixMe
export function normalizeButtonStyle(style : ButtonStyleInputs) : ButtonStyle {

    if (!style) {
        throw new Error(`Expected props.style to be set`);
    }

    const {
        label,
        layout = DEFAULT_STYLE.LAYOUT,
        color = DEFAULT_STYLE.COLOR,
        shape = DEFAULT_STYLE.SHAPE,
        tagline = (layout === BUTTON_LAYOUT.HORIZONTAL),
        height,
        period
    } = style;

    if (values(BUTTON_LAYOUT).indexOf(layout) === -1) {
        throw new Error(`Invalid layout: ${ layout }`);
    }

    if (label && values(BUTTON_LABEL).indexOf(label) === -1) {
        throw new Error(`Invalid label: ${ label }`);
    }

    const FUNDING_CONFIG = getFundingConfig();
    const fundingConfig = FUNDING_CONFIG[FUNDING.PAYPAL];

    if (!fundingConfig) {
        throw new Error(`Expected ${ FUNDING.PAYPAL } to be eligible`);
    }

    if (color && fundingConfig.colors.indexOf(color) === -1) {
        throw new Error(`Unexpected style.color for ${ FUNDING.PAYPAL } button: ${ color }, expected ${ fundingConfig.colors.join(', ') }`);
    }

    if (shape && fundingConfig.shapes.indexOf(shape) === -1) {
        throw new Error(`Unexpected style.shape for ${ FUNDING.PAYPAL } button: ${ shape }, expected ${ fundingConfig.shapes.join(', ') }`);
    }

    if (height !== undefined) {
        if (typeof height !== 'number') {
            throw new TypeError(`Expected style.height to be a number, got: ${ height }`);
        }
        
        const [ minHeight, maxHeight ] = [ BUTTON_SIZE_STYLE[BUTTON_SIZE.SMALL].minHeight, BUTTON_SIZE_STYLE[BUTTON_SIZE.HUGE].maxHeight ];

        if (height < minHeight || height > maxHeight) {
            throw new Error(`Expected style.height to be between ${ minHeight }px and ${ maxHeight }px - got ${ height }px`);
        }
    }

    if (layout === BUTTON_LAYOUT.VERTICAL) {
        if (tagline) {
            throw new Error(`style.tagline is not allowed for ${ BUTTON_LAYOUT.VERTICAL } layout`);
        }
    }

    return { label, layout, color, shape, tagline, height, period };
}

const COUNTRIES = values(COUNTRY);
const FUNDING_SOURCES = values(FUNDING);
const ENVS = values(ENV);
const PLATFORMS = values(PLATFORM);

export function normalizeButtonProps(props : ?ButtonPropsInputs) : RenderButtonProps {

    if (!props) {
        throw new Error(`Expected props`);
    }

    let {
        clientID,
        // $FlowFixMe
        style = {},
        remembered = [],
        locale = DEFAULT_PROPS.LOCALE,
        env = DEFAULT_PROPS.ENV,
        platform = DEFAULT_PROPS.PLATFORM,
        commit = DEFAULT_PROPS.COMMIT,
        fundingEligibility,
        sessionID = uniqueID(),
        buttonSessionID = uniqueID(),
        csp = {},
        components = [ COMPONENTS.BUTTONS ],
        nonce = '',
        onShippingChange,
        personalization,
        clientAccessToken
    } = props;

    const { country, lang } = locale;

    if (!country || COUNTRIES.indexOf(country) === -1) {
        throw new Error(`Expected valid country, got ${ country || 'undefined' }`);
    }

    if (!lang || COUNTRY_LANGS[country].indexOf(lang) === -1) {
        throw new Error(`Expected valid lang, got ${ lang || 'undefined' }`);
    }

    if (remembered.some(source => FUNDING_SOURCES.indexOf(source) === -1)) {
        throw new Error(`Expected valid funding sources, got ${ JSON.stringify(remembered) }`);
    }

    if (ENVS.indexOf(env) === -1) {
        throw new Error(`Expected valid env, got ${ env || 'undefined' }`);
    }

    if (!fundingEligibility) {
        throw new Error(`Expected fundingEligibility`);
    }

    if (PLATFORMS.indexOf(platform) === -1) {
        throw new Error(`Expected valid platform, got ${ platform || 'undefined' }`);
    }

    if (csp && csp.nonce) {
        nonce = csp.nonce;
    }

    style = normalizeButtonStyle(style);

    return { clientID, style, locale, remembered, env, fundingEligibility, platform, clientAccessToken,
        buttonSessionID, commit, sessionID, nonce, components, onShippingChange, personalization };
}
