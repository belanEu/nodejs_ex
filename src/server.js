const express = require('express');
const app = express();

const config = require('./config/config');
const routes = require('./routes/routes');

app.use(express.static(config.imagesDir));
app.use('/', routes);

// todo: handle not found route

app.listen(config.PORT, () => console.log(`server is listening you on port ${config.PORT}`));