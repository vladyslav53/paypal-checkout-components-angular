/* @flow */

import { BUTTON_LAYOUT, PLATFORM, FUNDING } from '../constants';
import type { FundingEligibilityType } from '../types';

import { FUNDING_PRIORITY, FUNDING_CONFIG } from './config';

export function isFundingEligible(source : $Values<typeof FUNDING>, { layout, platform, remembered, fundingEligibility } :
    { layout : $Values<typeof BUTTON_LAYOUT>, platform : $Values<typeof PLATFORM>, remembered : Array<$Values<typeof FUNDING>>, fundingEligibility : FundingEligibilityType }) : boolean {

    if (!fundingEligibility[source].eligible) {
        return false;
    }

    let fundingConfig = FUNDING_CONFIG[source];

    if (fundingConfig.layouts && fundingConfig.layouts.indexOf(layout) === -1) {
        return false;
    }

    if (fundingConfig.platforms && fundingConfig.platforms.indexOf(platform) === -1) {
        return false;
    }

    if (fundingConfig.rememberedOnly && remembered && remembered.indexOf(source) === -1) {
        return false;
    }

    return true;
}

export function determineEligibleFunding({ style, platform, remembered, fundingEligibility } :
    {| remembered : Array<$Values<typeof FUNDING>>, style : { layout : $Values<typeof BUTTON_LAYOUT> }, platform : $Values<typeof PLATFORM>, fundingEligibility : FundingEligibilityType |}) : Array<$Values<typeof FUNDING>> {

    let { layout } = style;

    let eligibleFunding = FUNDING_PRIORITY.filter(source =>
        isFundingEligible(source, { layout, platform, remembered, fundingEligibility })
    );

    if (layout === BUTTON_LAYOUT.HORIZONTAL) {
        eligibleFunding = eligibleFunding.slice(0, 2);
    }

    return eligibleFunding;
}
