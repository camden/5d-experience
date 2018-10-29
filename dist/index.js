"use strict";

var _express = _interopRequireDefault(require("express"));

var _http = _interopRequireDefault(require("http"));

var _socket = _interopRequireDefault(require("socket.io"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();

var server = _http.default.Server(app);

app.use(_express.default.static('static'));
app.get('/', function (req, res) {
  res.sendFile(__dirname + 'static/index.html');
});
var io = (0, _socket.default)(server);
io.on('connection', function (socket) {
  console.log('a user connected');
});
server.listen(3000, function () {
  console.log('listening on *:3000');
});