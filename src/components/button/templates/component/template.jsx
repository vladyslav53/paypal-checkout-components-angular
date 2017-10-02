/* @flow */
/* @jsx jsxToHTML */

import { btoa } from 'Base64';

import { ENV, ATTRIBUTE } from '../../../../config/constants';
import { BUTTON_BRANDING, BUTTON_NUMBER, BUTTON_LOGO_COLOR } from '../../constants';
import { getButtonConfig, fundingToDefaultLabel } from '../config';
import { determineEligibleCards, type FundingSource, type FundingList, type FundingSelection } from '../funding';
import { normalizeProps } from '../props';

import { componentLogos, cardLogos } from './logos';
import { componentStyle } from './style';
import { getComponentScript } from './script';
import { componentContent } from './content';
import { CLASS } from './style/class';
import { render, jsxToHTML, type JsxHTMLNode } from './util'; // eslint-disable-line no-unused-vars
import { validateButtonProps } from './validate';

function getCommonButtonClasses({ layout, shape, branding, multiple, env }) : string {
    return [
        `${ CLASS.LAYOUT }-${ layout }`,
        `${ CLASS.SHAPE }-${ shape }`,
        `${ CLASS.BRANDING }-${ branding ? BUTTON_BRANDING.BRANDED : BUTTON_BRANDING.UNBRANDED }`,
        `${ CLASS.NUMBER }-${ multiple ? BUTTON_NUMBER.MULTIPLE : BUTTON_NUMBER.SINGLE }`,
        `${ CLASS.ENV }-${ env }`
    ].join(' ');
}

function getButtonClasses({ label, color, logoColor }) : string {
    return [
        `${ CLASS.LABEL }-${ label }`,
        `${ CLASS.COLOR }-${ color }`,
        `${ CLASS.LOGO_COLOR }-${ logoColor }`
    ].join(' ');
}

function getLocaleContent(locale : LocaleType) : Object {
    let { country, lang } = locale;
    return componentContent[country][lang];
}

function determineButtons({ label, color, sources, multiple } : { label : string, color : string, sources : FundingList, multiple : boolean }) :
    Array<{ label : string, color : string, source : FundingSource }> {

    return sources.map((source, i) => {

        let buttonLabel = multiple
            ? fundingToDefaultLabel(source)
            : label;

        let buttonColor = (multiple && i > 0)
            ? getButtonConfig(buttonLabel, 'secondaryColors')[color]
            : color;

        return {
            source,
            label: buttonLabel,
            color: buttonColor
        };
    });
}

function renderCards({ funding, locale } : { funding : FundingSelection, locale : LocaleType }) : Array<JsxHTMLNode> {

    return determineEligibleCards({ funding, count: 4, locale }).map(name => {
        let logo = cardLogos[name];

        return (
            <span class={ `${ CLASS.CARD } ${ CLASS.CARD }-${ name }` }>
                <img
                    src={ `data:image/svg+xml;base64,${ btoa(logo) }` }
                    alt={ name } />
            </span>
        );
    });
}

function renderFundingIcons({ funding, fundingicons, locale } :
    { funding : FundingSelection, fundingicons : boolean, locale : LocaleType }) : ?JsxHTMLNode {

    if (!fundingicons) {
        return;
    }

    return <div class={ `${ CLASS.FUNDINGICONS }` }>{ renderCards({ funding, locale }) }</div>;
}

function renderContent(text : string, { locale, color, branding, logoColor, funding, env } :
    { locale : LocaleType, color : string, branding? : boolean, logoColor? : string, funding? : FundingSelection, env : string }) : JsxHTMLNode {

    let content = getLocaleContent(locale);

    return render(text, {

        text(value : string) : JsxHTMLNode {
            return <span class={ CLASS.TEXT }>{ value }</span>;
        },

        logo(name : string) : ?JsxHTMLNode {

            if (!branding) {
                return;
            }

            if (!logoColor) {
                throw new Error(`Can not determine logo without logo color`);
            }

            let logo = componentLogos[name][logoColor] || componentLogos[name][BUTTON_LOGO_COLOR.ANY];

            return <img
                class={ `${ CLASS.LOGO } ${ CLASS.LOGO }-${ name } ${ CLASS.LOGO }-${ color }` }
                src={ `data:image/svg+xml;base64,${ btoa(logo) }` }
                alt={ name } />;
        },

        content(name : string) : JsxHTMLNode {
            let contentString;

            for (let key of name.split('|')) {
                if (content[key]) {
                    contentString = content[key];
                    break;
                }
            }

            if (!contentString && env === ENV.TEST) {
                throw new Error(`Could not find content ${ name } for ${ locale.lang }_${ locale.country }`);
            }

            return renderContent(contentString || '', { locale, color, branding, logoColor, funding, env });
        },

        cards() : Array<JsxHTMLNode> {
            if (!funding) {
                throw new Error(`Can not determine card types without funding`);
            }

            return renderCards({ funding, locale });
        },

        separator() : JsxHTMLNode {
            return <span class={ CLASS.SEPARATOR }></span>;
        }
    });
}

function renderButton({ label, color, locale, branding, multiple, layout, shape, source, funding, i, env } :
    { label : string, color : string, branding : boolean, locale : Object, multiple : boolean, layout : string, shape : string, funding : FundingSelection, source : FundingSource, i : number, env : string }) : JsxHTMLNode {

    let logoColor = getButtonConfig(label, 'logoColors')[color];

    let contentText = multiple
        ? getButtonConfig(label, 'logoLabel')
        : getButtonConfig(label, 'label');

    contentText = renderContent(contentText, { locale, color, branding, logoColor, funding, env });

    return (
        <div { ...{ [ ATTRIBUTE.FUNDING_SOURCE ]: source } } class={ `${ CLASS.BUTTON } ${ CLASS.NUMBER }-${ i } ${ getCommonButtonClasses({ layout, shape, branding, multiple, env }) } ${ getButtonClasses({ label, color, logoColor }) }` } role='button' tabindex='0'>
            { contentText }
        </div>
    );
}

function renderTagline({ label, tagline, color, locale, multiple, env } : { label : string, color : string, tagline : boolean, locale : LocaleType, multiple : boolean, env : string }) : ?JsxHTMLNode {

    if (!tagline) {
        return;
    }

    let tag = multiple
        ? (getButtonConfig(label, 'dualTag') || getButtonConfig(label, 'tag'))
        : getButtonConfig(label, 'tag');

    let text = renderContent(tag, { locale, color, env });

    if (!text) {
        return;
    }

    let tagColor = getButtonConfig(label, 'tagLineColors')[color];

    return (
        <div class={ `${ CLASS.TAGLINE } ${ CLASS.TAGLINE_COLOR }-${ tagColor }` }>
            { text }
        </div>
    );
}

function renderScript() : JsxHTMLNode {

    let script = getComponentScript().toString();

    script = script.replace(/\{\s*CLASS\.([A-Z0-9_]+)\s*\}/g, (match, name) => {
        return CLASS[name];
    });

    return (
        <script innerHTML={ `(${ script })();` } />
    );
}

function renderStyle() : JsxHTMLNode {
    return (
        <style innerHTML={ componentStyle } />
    );
}

export function componentTemplate({ props } : { props : Object }) : string {
    validateButtonProps(props);

    let { label, locale, color, shape, branding, tagline, funding,
        layout, sources, multiple, fundingicons, env } = normalizeProps(props);

    let buttonNodes = determineButtons({ label, color, sources, multiple })
        .map((button, i) => renderButton({
            label:   button.label,
            color:   button.color,
            source:  button.source,
            env,
            i,
            funding,
            multiple,
            locale,
            branding,
            layout,
            shape
        }));

    let taglineNode     = renderTagline({ label, tagline, color, locale, multiple, env });
    let fundingiconNode = renderFundingIcons({ funding, fundingicons, locale });

    let styleNode  = renderStyle();
    let scriptNode = renderScript();

    return (
        <div class={ `${ CLASS.CONTAINER } ${ getCommonButtonClasses({ layout, shape, branding, multiple, env }) }` }>
            { styleNode }

            { buttonNodes }
            { taglineNode || fundingiconNode }

            { scriptNode }
        </div>
    ).toString();
}
