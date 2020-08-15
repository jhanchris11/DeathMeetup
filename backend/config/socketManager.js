//**UPDATE */
module.exports = (socket) => {
  console.log('CONNECTION');

  socket.on('join', ({ event }) => {
    console.log(event);
  });
};
