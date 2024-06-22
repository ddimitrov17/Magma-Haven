const { urlencoded } = require('body-parser');
const express = require('express');


function configExpress(app) {
    app.use('/static', express.static('static'));
    app.use(urlencoded({ extended: true }));
};

module.exports = {
    configExpress
}