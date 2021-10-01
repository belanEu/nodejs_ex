const express = require('express');
const app = express();

const config = require('./src/config/config');
const routes = require('./src/routes/routes');

app.use(express.static(config.imagesDir));
app.use('/', routes);

// todo: handle not found route

app.listen(config.PORT, () => console.log(`server is listening you on port ${config.PORT}`));