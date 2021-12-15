'use strict'

const app = require('../src/app');
const mongoose = require('mongoose');

require('dotenv').config({ path: '../.env' });

const PORT = process.env.PORT || 8081;
const DATABASE_URL = `mongodb://localhost:${process.env.DB_PORT}/${process.env.DB_NAME}`;

app.listen(PORT, async () => {

    await mongoose.connect(DATABASE_URL).catch((e) => { console.log(e) })
    console.log(`Server running on port ${PORT}`);

})