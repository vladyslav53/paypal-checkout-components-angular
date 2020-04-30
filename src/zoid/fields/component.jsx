/* @flow */
/** @jsx node */
/* eslint max-lines: 0 */

import { node, dom } from 'jsx-pragmatic/src';
import { getLogger, getPayPalDomainRegex, getSDKMeta, getPayPalDomain, getClientID } from '@paypal/sdk-client/src';
import { create, type ZoidComponent } from 'zoid/src';
import { inlineMemoize } from 'belter/src';

import { type FieldsProps } from './props';
import { FieldsPrerender } from './prerender';
import { FieldsContainer } from './container';

export function getFieldsComponent() : ZoidComponent<FieldsProps> {
    return inlineMemoize(getFieldsComponent, () => {
        return create({
            tag: 'paypal-fields',
            url: () => `${ getPayPalDomain() }${ __PAYPAL_CHECKOUT__.__URI__.__FIELDS__ }`,

            domain: getPayPalDomainRegex(),
            
            autoResize: {
                width:   false,
                height:  true,
                element: '#fields'
            },

            dimensions: {
                width:  '100%',
                height: '300px'
            },

            logger: getLogger(),

            containerTemplate: ({ props, doc, uid, frame, prerenderFrame, event }) => {
                return (
                    <FieldsContainer uid={ uid } frame={ frame } prerenderFrame={ prerenderFrame } event={ event } props={ props } />
                ).render(dom({ doc }));
            },

            prerenderTemplate: ({ props, doc }) => {
                return (
                    <FieldsPrerender nonce={ props.nonce } />
                ).render(dom({ doc }));
            },

            attributes: {
                iframe: {
                    scrolling: 'no'
                }
            },

            props: {
                sdkMeta: {
                    type:        'string',
                    queryParam:  true,
                    sendToChild: false,
                    value:       getSDKMeta
                },
                
                clientID: {
                    type:       'string',
                    queryParam: true,
                    value:      getClientID
                },
                
                fundingSource: {
                    type:       'string',
                    queryParam: true,
                    required:   true
                }
            }
        });
    });
}
