const { urlencoded } = require('body-parser');
const express = require('express');
const { session } = require('../middleware/session');
const cookieParser = require('cookie-parser');


function configExpress(app) {
    app.use(cookieParser())
    app.use(session());
    app.use('/static', express.static('static'));
    app.use(urlencoded({ extended: true }));
};

module.exports = {
    configExpress
}