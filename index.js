import express from 'express';
import http from 'http';
import SocketIO from 'socket.io';

const app = express();
const server = http.Server(app);

app.use(express.static('static'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/static/choice.html');
});

app.get('/noise', function(req, res) {
  res.sendFile(__dirname + '/static/noise.html');
});

app.get('/walker', function(req, res) {
  res.sendFile(__dirname + '/static/client.html');
});

const io = SocketIO.listen(server, { resource: '/5d-experience/socket.io' });

io.on('connection', function(socket) {
  socket.on('chat message', function(msg) {
    io.emit('chat message', msg);
  });
});

server.listen(3000, function() {
  console.log('listening on *:3000');
});
