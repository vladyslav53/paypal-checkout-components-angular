/* @flow */
/** @jsx node */

import { node, dom, type ChildType } from 'jsx-pragmatic/src';
import { FUNDING, CARD, FPTI_KEY } from '@paypal/sdk-constants/src';
import { popup, supportsPopups, writeElementToWindow } from 'belter/src';
import { assertSameDomain, type CrossDomainWindowType } from 'cross-domain-utils/src';
import { SpinnerPage } from '@paypal/common-components/src';
import { getLogger } from '@paypal/sdk-client/src';

import { DEFAULT_POPUP_SIZE } from '../checkout';
import { Buttons } from '../../ui';
import { type ButtonProps } from '../../ui/buttons/props';

import { supportsQRPay, showButtonLoading } from './util';

type PrerenderedButtonsProps = {|
    nonce : ?string,
    props : ButtonProps,
    onRenderCheckout : ({|
        win? : CrossDomainWindowType,
        fundingSource : $Values<typeof FUNDING>,
        card : ?$Values<typeof CARD>
    |}) => void
|};

export function PrerenderedButtons({ nonce, onRenderCheckout, props } : PrerenderedButtonsProps) : ChildType {
    let win;
    const handleClick = (
        event : Event,
        { fundingSource, card } : {|
            fundingSource : $Values<typeof FUNDING>,
            card : ?$Values<typeof CARD>
        |}
    ) => {
        getLogger().info('button_prerender_click').track({
            [ FPTI_KEY.BUTTON_SESSION_UID ]: props.buttonSessionID,
            [ FPTI_KEY.CONTEXT_TYPE ]:       'button_session_id',
            [ FPTI_KEY.CONTEXT_ID ]:         props.buttonSessionID,
            [ FPTI_KEY.TRANSITION ]:         'process_button_prerender_click'
        }).flush();

        
        if (supportsQRPay(fundingSource)) {
            showButtonLoading(
                fundingSource,
                // $FlowFixMe[prop-missing]
                // $FlowFixMe[incompatible-call]
                event
            );
            onRenderCheckout({ fundingSource, card });

        } else if (supportsPopups()) {
            // remember the popup window to prevent showing a new popup window on every click in the prerender state
            if (!win || win.closed) {
                win = assertSameDomain(popup('', {
                    width:  DEFAULT_POPUP_SIZE.WIDTH,
                    height: DEFAULT_POPUP_SIZE.HEIGHT
                }));
            }

            const doc = window.document;

            const spinner = (
                <SpinnerPage nonce={ nonce } />
            ).render(dom({ doc }));

            writeElementToWindow(win, spinner);

            onRenderCheckout({ win, fundingSource, card });

        } else {
            onRenderCheckout({ fundingSource, card });
        }
    };

    return (
        <html>
            <body>
                {/* $FlowFixMe */}
                <Buttons { ...props } onClick={ handleClick } />
            </body>
        </html>
    );
}
