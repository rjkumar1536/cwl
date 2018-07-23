'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var http = require('http');
var server = http.createServer(app);

//const port = process.env.PORT || 8080;
var port = 8080;

// Commenting consoles in production
console.log = function () {};

var assets = _express2.default.static(_path2.default.join(__dirname, '../'));

app.use((0, _cors2.default)());
app.use(assets);

app.get('*', _router2.default);

//app.listen(port);
//console.log(`Listening at http://localhost:${port}`);

server.listen(port, function (err) {
  if (!err) {
    console.log('server is listening on ' + port);
  }
});