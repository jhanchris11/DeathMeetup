const express = require('express');
const meetupDB = require('./database');
const config = require('./config');
const cors = require('cors');
meetupDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/death-meet/user', require('./routes/user'));
app.use('/death-meet/category', require('./routes/category'));
app.use('/death-meet/dynamic', require('./routes/dynamic'));
app.use('/death-meet/event', require('./routes/events'));
app.use('/death-meet/professor', require('./routes/professor'));

app.listen(config.port, () => {
  console.log(`API is running in ${config.port}`);
});
