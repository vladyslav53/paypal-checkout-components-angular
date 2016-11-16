#!/bin/bash

cp -r ~/nfra/sync-browser-mocks/src/* node_modules/sync-browser-mocks/src/ &&
cp -r ~/nfra/post-robot/src/* node_modules/post-robot/src/ &&
cp -r ~/nfra/xcomponent/src/* node_modules/xcomponent/src/ &&
cp -r ~/nfra/beaver-logger/client/* node_modules/beaver-logger/client/ &&
gulp webpack-major && 
scp -r dist/checkout.js root@bluesuncorp.co.uk:/var/www/html/icv4/dist &&
scp -r dist/checkout.js root@bluesuncorp.co.uk:/var/www/html/icv4/dist/paypal.checkout.v4.js &&
git checkout dist

