const http = require('http');
const express = require('express');
const app = express();
const meetupDB = require('./database');
const config = require('./config');
const socketio = require('socket.io');
require('nodemailer');
// require('dotenv').config();
// const server = require('http').Server(app);
// const io = (module.exports.io = require('socket.io')(server));
const server = http.createServer(app);
const io = socketio(server);
const commentService = require('./services/commentService');
const cors = require('cors');

// const socketManager = require('./config/socketManager');
// const whitelist = ['http://localhost:5000', 'http://example2.com'];
// const corsOptions = {
//   credentials: true, // This is important.
//   origin: (origin, callback) => {
//     if (whitelist.includes(origin)) return callback(null, true);

//     callback(new Error('Not allowed by CORS'));
//   },
// };
meetupDB();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/death-meet/user', require('./routes/user'));
app.use('/death-meet/category', require('./routes/category'));
app.use('/death-meet/dynamic', require('./routes/dynamic'));
app.use('/death-meet/event', require('./routes/events'));
app.use('/death-meet/professor', require('./routes/professor'));
app.use('/death-meet/comment', require('./routes/comment'));
app.use('/death-meet/email', require('./routes/email'));
// io.on('connection', socketManager);
io.on('connection', (socket) => {
  console.log('connect');
  socket.on('join', ({ event }) => {
    socket.join(event);
  });
  socket.on('SEND_COMMENTS', async (data) => {
    let lastComment = await commentService.insertComments(data);
    console.log(data);
    io.sockets.to(data['event']).emit('COMMENTS_OF_EVENT', {
      comment: lastComment,
    });
  });
  socket.on('disconnect', () => {
    console.log('user had left ');
  });
});
server.listen(config.port, '0.0.0.0', () => {
  console.log(`API is running in ${config.port}`);
});
