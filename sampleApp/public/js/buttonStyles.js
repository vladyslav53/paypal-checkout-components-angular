$(document).ready(function () {
    var editor = ace.edit('editor');
    editor.setTheme('ace/theme/monokai');
    editor.getSession().setMode('ace/mode/javascript');
    editor.setShowPrintMargin(false);

    var token = window.getJwtCSRFToken && window.getJwtCSRFToken();
    jwtCsrf.setToken(token);
    jwtCsrf.patchXhr();

    var fn = renderPaypalButton.toString();
    fn = fn.replace('function renderPaypalButton() {', '');
    fn = fn.slice(0, -1);

    editor.setValue(fn, -1);
    window.aceEditor = editor;


    $('#eval').click(function () {

        $('#myContainerElement').empty();
        eval('(function () {' + editor.getValue() + '})()');
    });

    renderPaypalButton();
});

function onSelect() {
    var editor = window.aceEditor;
    var size = $('input[name=size]:checked').val();
    var color = $('input[name=color]:checked').val();
    var shape = $('input[name=shape]:checked').val();

    var fn = renderPaypalButton.toString();

    fn = fn.replace(/size: '[a-zA-Z]+',/g, 'size: \'' + size + '\',');
    fn = fn.replace(/color: '[a-zA-Z]+',/g, 'color: \'' + color + '\',');
    fn = fn.replace(/shape: '[a-zA-Z]+',/g, 'shape: \'' + shape + '\',');
    fn = fn.replace('function renderPaypalButton() {', '');
    fn = fn.slice(0, -1);

    editor.setValue(fn, -1);
    
    $('#myContainerElement').empty();
    eval('(function () {' + fn + '})()');
}

function renderPaypalButton() {
paypal.Button.render({
    env: 'sandbox',
    client: {
        sandbox: 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R'
    },
    payment: function() {
        return paypal.rest.payment.create(this.props.env, this.props.client, {
            transactions: [
                {
                    amount: {
                        total:    '1.00',
                        currency: 'USD'
                    }
                }
            ]
        });
    },

    style : {
        size: 'small',
        color: 'gold',
        shape: 'pill',
        label: 'checkout'
    },

    onAuthorize: function(data, actions) {

        return actions.payment.execute().then(function() {

            console.log('The payment was completed!');
        });
    },
    onCancel: function(data) {
        console.log('The payment was cancelled!');
    }

}, '#myContainerElement');
}