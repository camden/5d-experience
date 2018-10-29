import express from 'express';
import http from 'http';
import SocketIO from 'socket.io';

const app = express();
const server = http.Server(app);

app.use(express.static('static'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + 'static/index.html');
});

const io = SocketIO(server);

io.on('connection', function(socket) {
  console.log('a user connected');
});

server.listen(3000, function() {
  console.log('listening on *:3000');
});
