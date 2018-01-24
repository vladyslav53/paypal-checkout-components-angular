/* @flow */

import { CARD } from '../../constants';

import visa         from './visa.svg';
import amex         from './amex.svg';
import mastercard   from './mastercard.svg';
import discover     from './discover.svg';
import hiper        from './hiper.svg';
import elo          from './elo.svg';
import jcb          from './jcb.svg';

export let cardLogos = {
    [ CARD.VISA ]:       visa,
    [ CARD.AMEX ]:       amex,
    [ CARD.MASTERCARD ]: mastercard,
    [ CARD.DISCOVER ]:   discover,
    [ CARD.HIPER ]:      hiper,
    [ CARD.ELO ]:        elo,
    [ CARD.JCB ]:        jcb
};
