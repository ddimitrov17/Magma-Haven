const express = require('express');
const { configDatabase } = require('./src/config/database');
const { router } = require('./src/config/routes');
const { configExpress } = require('./src/config/express');
const { configHandlebars } = require('./src/config/handlebars');

const app = express();
const PORT = 3000;

async function start() {
    await configDatabase();
    configExpress(app);
    configHandlebars(app);
    app.use(router);

    app.listen(PORT, () => {
        console.log('Server is listening on port 3000...');
    });
};

start();
