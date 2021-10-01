const express = require('express');
const app = express();

const config = require('./src/config/config');
const routes = require('./src/routes/routes');

app.use('/', routes);

app.listen(config.PORT, () => console.log(`server is listening you on port ${config.PORT}`));