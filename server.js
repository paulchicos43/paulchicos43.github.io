const express = require('express');
const app = express();
let path = require('path');

app.use('/', express.static(path.join(__dirname, '/')));

app.listen(8080, () => {

});