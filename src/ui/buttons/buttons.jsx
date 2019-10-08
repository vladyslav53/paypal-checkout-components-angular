/* @flow */
/** @jsx node */

import { node, type ElementNode } from 'jsx-pragmatic/src';
import { FUNDING } from '@paypal/sdk-constants/src';

import { CLASS, BUTTON_NUMBER, BUTTON_LAYOUT } from '../../constants';
import { determineEligibleFunding, determineVaultedFunding, isVaultedFundingEligible } from '../../funding';
import { normalizeButtonProps, type ButtonPropsInputs } from '../../zoid/buttons/props';

import { Style } from './style';
import { BasicButton, VaultedButton } from './button';
import { TagLine } from './tagline';
import { Script } from './script';
import { buttonContent } from './content';
import { PoweredByPayPal } from './poweredByPayPal';

type ButtonsProps = ButtonPropsInputs & {|
    onClick? : Function
|};

export function Buttons(props : ButtonsProps) : ElementNode {
    const { onClick } = props;
    const { style, locale, remembered, env, fundingEligibility, platform,
        nonce, components, onShippingChange, personalization, clientAccessToken } = normalizeButtonProps(props);
    const { layout, shape, tagline } = style;
    const { lang } = locale;

    const fundingSources = determineEligibleFunding({ layout, remembered, platform, fundingEligibility, components, onShippingChange });
    const multiple = fundingSources.length > 1;

    if (!fundingSources.length) {
        throw new Error(`No eligible funding fundingSources found to render buttons:\n\n${ JSON.stringify(fundingEligibility, null, 4) }`);
    }
    
    const vaultedFunding = isVaultedFundingEligible({ layout, onShippingChange })
        ? determineVaultedFunding({ fundingEligibility })
        : [];
        
    const { PayInstantly } = buttonContent[lang];

    return (
        <div class={ [
            CLASS.CONTAINER,
            `${ CLASS.LAYOUT }-${ layout }`,
            `${ CLASS.SHAPE }-${ shape }`,
            `${ CLASS.NUMBER }-${ multiple ? BUTTON_NUMBER.MULTIPLE : BUTTON_NUMBER.SINGLE }`,
            `${ CLASS.ENV }-${ env }`
        ].join(' ') }>

            <Style
                nonce={ nonce }
                style={ style }
                locale={ locale }
            />

            {
                fundingSources.map((fundingSource, i) => (
                    <BasicButton
                        i={ i }
                        style={ style }
                        fundingSource={ fundingSource }
                        multiple={ multiple }
                        env={ env }
                        locale={ locale }
                        nonce={ nonce }
                        fundingEligibility={ fundingEligibility }
                        onClick={ onClick }
                        clientAccessToken={ clientAccessToken }
                        personalization={ personalization }
                    />
                ))
            }

            {
                (tagline && layout === BUTTON_LAYOUT.HORIZONTAL)
                    ? <TagLine
                        fundingSource={ fundingSources[0] }
                        style={ style }
                        locale={ locale }
                        multiple={ multiple }
                        nonce={ nonce }
                        personalization={ personalization }
                    /> : null
            }

            {
                (layout === BUTTON_LAYOUT.VERTICAL && fundingSources.indexOf(FUNDING.CARD) !== -1)
                    ? <PoweredByPayPal
                        locale={ locale }
                    /> : null
            }

            {
                vaultedFunding.length
                    ? <p class={ `${ CLASS.VAULT_HEADER } ${ CLASS.TEXT }` }><PayInstantly /></p>
                    : null
            }

            {
                vaultedFunding.map(({ fundingSource, paymentMethodID, vendor, label }) => (
                    <VaultedButton
                        style={ style }
                        fundingSource={ fundingSource }
                        multiple={ multiple }
                        env={ env }
                        nonce={ nonce }
                        onClick={ onClick }
                        vendor={ vendor }
                        label={ label }
                        paymentMethodID={ paymentMethodID }
                    />
                ))
            }

            <Script
                nonce={ nonce }
            />
        </div>
    );
}

export { DEFAULT_PROPS } from '../../zoid/buttons/props';
