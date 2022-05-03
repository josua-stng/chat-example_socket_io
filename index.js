const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index')
});

io.on('connection', (socket) => {
  console.log('Socket Connection');
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});