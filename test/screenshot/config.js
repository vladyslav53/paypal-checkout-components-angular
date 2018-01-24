/* @flow */

import { getButtonConfig } from '../../src/button/config';
import { BUTTON_LABEL, BUTTON_SIZE, FUNDING, CARD } from '../../src/constants';

/*

const LOCALES = [
    'en_US', 'en_GB', 'fr_FR', 'de_DE', 'zh_C2', 'es_MX', 'es_ES', 'pt_BR'
];

*/

const RESPONSIVE_WIDTHS = [ 92, 144, 212, /* 345, */ 460, 670 ];

export let buttonConfigs = [];

buttonConfigs.push({
    button: {}
});

for (let label of Object.keys(BUTTON_LABEL)) {
    label = BUTTON_LABEL[label];

    if (getButtonConfig(label, 'allowPrimary')) {
        buttonConfigs.push({
            button: {
                style: {
                    label
                }
            }
        });

        for (let size of getButtonConfig(label, 'sizes')) {

            if (size === BUTTON_SIZE.RESPONSIVE) {
                for (let width of RESPONSIVE_WIDTHS) {
                    buttonConfigs.push({
                        container: {
                            width
                        },
                        button: {
                            style: {
                                label,
                                size
                            }
                        }
                    });
                }
            } else {
                buttonConfigs.push({
                    button: {
                        style: {
                            label,
                            size
                        }
                    }
                });
            }
        }

        for (let color of getButtonConfig(label, 'colors')) {
            buttonConfigs.push({
                button: {
                    style: {
                        label,
                        color
                    }
                }
            });
        }

        for (let shape of getButtonConfig(label, 'shapes')) {
            buttonConfigs.push({
                button: {
                    style: {
                        label,
                        shape
                    }
                }
            });
        }

        /*

        for (let locale of LOCALES) {
            buttonConfigs.push({
                button: {
                    style: {
                        label,
                        locale
                    }
                }
            });
        }

        */

        if (getButtonConfig(label, 'allowFundingIcons')) {
            buttonConfigs.push({
                button: {
                    style: {
                        label,
                        fundingicons: true
                    }
                }
            });

            buttonConfigs.push({
                button: {
                    locale: 'pt_BR',
                    style:  {
                        label,
                        fundingicons: true
                    }
                }
            });

            buttonConfigs.push({
                button: {
                    style: {
                        label,
                        fundingicons: true
                    },
                    funding: {
                        disallowed: [ CARD.AMEX ]
                    }
                }
            });
        }

        if (getButtonConfig(label, 'allowUnbranded')) {
            buttonConfigs.push({
                button: {
                    style: {
                        label,
                        branding: true
                    }
                }
            });
        }

        buttonConfigs.push({
            button: {
                style: {
                    label,
                    tagline: false
                }
            }
        });

        buttonConfigs.push({
            button: {
                style: {
                    label,
                    maxbuttons: 1
                }
            }
        });

        for (let shape of getButtonConfig(label, 'shapes')) {

            buttonConfigs.push({
                button: {
                    style: {
                        label,
                        shape,
                        height: 45,
                        size:   BUTTON_SIZE.SMALL
                    }
                }
            });
        }

        buttonConfigs.push({
            button: {
                style: {
                    label,
                    height: 45,
                    size:   BUTTON_SIZE.SMALL
                },
                funding: {
                    allowed: [ FUNDING.CREDIT ]
                }
            }
        });

        buttonConfigs.push({
            container: {
                width: 340
            },
            button: {
                style: {
                    label,
                    height: 44,
                    size:   BUTTON_SIZE.RESPONSIVE
                }
            }
        });

        buttonConfigs.push({
            container: {
                width: 340
            },
            button: {
                style: {
                    label,
                    height: 44,
                    size:   BUTTON_SIZE.RESPONSIVE
                },
                funding: {
                    allowed: [ FUNDING.VENMO ]
                }
            }
        });
    }
}

for (let color of getButtonConfig('paypal', 'colors')) {

    buttonConfigs.push({
        button: {
            style: {
                color,
                layout: 'horizontal'
            },
            funding: {
                allowed: [ FUNDING.CREDIT ]
            }
        }
    });

    buttonConfigs.push({
        button: {
            style: {
                color,
                layout: 'horizontal'
            },
            funding: {
                allowed: [ FUNDING.VENMO ]
            }
        }
    });

    buttonConfigs.push({
        userAgent: 'iphone6',
        button:    {
            style: {
                color,
                layout: 'horizontal'
            },
            funding: {
                allowed: [ FUNDING.VENMO ]
            }
        }
    });

    buttonConfigs.push({
        button: {
            style: {
                color,
                layout:     'vertical',
                maxbuttons: 4
            },
            funding: {
                allowed: [ FUNDING.CREDIT, FUNDING.VENMO, FUNDING.CARD ]
            }
        }
    });

    buttonConfigs.push({
        userAgent: 'iphone6',
        button:    {
            style: {
                color,
                layout:     'vertical',
                maxbuttons: 4
            },
            funding: {
                allowed: [ FUNDING.CREDIT, FUNDING.VENMO, FUNDING.CARD ]
            }
        }
    });

    buttonConfigs.push({
        button: {
            locale: 'pt_BR',
            style:  {
                color,
                layout:     'vertical',
                maxbuttons: 4
            },
            funding: {
                allowed: [ FUNDING.CREDIT, FUNDING.CARD ]
            }
        }
    });

    buttonConfigs.push({
        button: {
            locale: 'de_DE',
            style:  {
                color,
                layout:     'vertical',
                maxbuttons: 4
            },
            funding: {
                allowed: [ FUNDING.CREDIT, FUNDING.ELV, FUNDING.CARD ]
            }
        }
    });

    buttonConfigs.push({
        button: {
            locale: 'nl_NL',
            style:  {
                color,
                layout:     'vertical',
                maxbuttons: 4
            },
            funding: {
                allowed: [ FUNDING.CREDIT, FUNDING.IDEAL, FUNDING.CARD ]
            }
        }
    });
}
