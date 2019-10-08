/* @flow */
/** @jsx node */

import { type LocaleType } from '@paypal/sdk-constants/src';
import { node, Fragment } from 'jsx-pragmatic/src';
import { LOGO_COLOR, PPLogo, PayPalLogo } from '@paypal/sdk-logos/src';

import { BUTTON_LABEL, BUTTON_COLOR, BUTTON_LAYOUT, CLASS } from '../../constants';
import { DEFAULT_FUNDING_CONFIG, type FundingSourceConfig } from '../common';
import { componentContent } from '../content';
import { Text, Space, LoadingDots } from '../../ui';

const PPPayPalLogo = ({ logoColor }) => <Fragment><PPLogo logoColor={ logoColor } /><Space /><PayPalLogo logoColor={ logoColor } /></Fragment>;

export function getPayPalConfig() : FundingSourceConfig {
    return {
        ...DEFAULT_FUNDING_CONFIG,

        layouts: [
            BUTTON_LAYOUT.HORIZONTAL,
            BUTTON_LAYOUT.VERTICAL
        ],

        colors: [
            BUTTON_COLOR.GOLD,
            BUTTON_COLOR.BLUE,
            BUTTON_COLOR.SILVER,
            BUTTON_COLOR.BLACK,
            BUTTON_COLOR.WHITE
        ],
    
        logoColors: {
            [BUTTON_COLOR.GOLD]:   LOGO_COLOR.BLUE,
            [BUTTON_COLOR.SILVER]: LOGO_COLOR.BLUE,
            [BUTTON_COLOR.BLUE]:   LOGO_COLOR.WHITE,
            [BUTTON_COLOR.BLACK]:  LOGO_COLOR.WHITE,
            [BUTTON_COLOR.WHITE]:  LOGO_COLOR.BLUE
        },

        Logo: ({ label, logoColor }) => {
            if (label === BUTTON_LABEL.PAY) {
                return <PayPalLogo logoColor={ logoColor } />;
            }

            return <PPPayPalLogo logoColor={ logoColor } />;
        },
    
        Tag: ({ multiple, locale: { lang } } : { locale : LocaleType, multiple : boolean }) => {
            if (__WEB__) {
                return <LoadingDots />;
            }
            
            const { DualTag, SaferTag } = componentContent[lang];
    
            return (multiple && DualTag)
                ? <DualTag optional />
                : <SaferTag  optional />;
        },

        VaultLabel: ({ logoColor, label }) => {
            return (
                <Fragment>
                    <PPLogo logoColor={ logoColor } optional /> <Text className={ CLASS.VAULT_LABEL }>{ label }</Text>
                </Fragment>
            );
        },

        Label: ({ logo, label, locale: { lang }, logoColor, period, layout, multiple, clientAccessToken, personalization }) => {
            if (layout === BUTTON_LAYOUT.HORIZONTAL && multiple) {
                return logo;
            }

            if (__WEB__) {
                if (label || clientAccessToken) {
                    return (
                        <Fragment>
                            {logo}
                            <Text> <LoadingDots /></Text>
                        </Fragment>
                    );
                }

                return logo;
            }

            if (personalization && personalization.buttonText && personalization.buttonText.Component) {
                return <personalization.buttonText.Component logoColor={ logoColor } period={ period } />;
            }

            const { Checkout, Pay, BuyNow, Installment } = componentContent[lang];

            if (label === BUTTON_LABEL.CHECKOUT) {
                return <Checkout logo={ logo } />;
            }

            if (label === BUTTON_LABEL.PAY) {
                return <Pay logo={ logo } />;
            }

            if (label === BUTTON_LABEL.BUYNOW) {
                return <BuyNow logo={ logo } />;
            }

            if (label === BUTTON_LABEL.INSTALLMENT && Installment) {
                return <Installment logo={ logo } period={ period } />;
            }

            return logo;
        }
    };
}
