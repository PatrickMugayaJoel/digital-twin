const express = require('express');
const path = require('path');
const  morgan = require('morgan');
const fs = require('fs');

const app = express();

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'server.log'), { flags: 'a' })

app.use(express.static('build'));
app.use(morgan('combined', { stream: accessLogStream }));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const PORT = 80;

app.listen(PORT, () => {
  console.log(`App is listening at port: ${PORT}`);
});
