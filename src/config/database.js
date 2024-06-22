const mongoose = require('mongoose');
require('../models/User');

const connectionString = 'mongodb://localhost:27017/Magma-Haven';

async function configDatabase() {
    await mongoose.connect(connectionString);
    console.log('Database connected!');
}

module.exports = {
    configDatabase
}