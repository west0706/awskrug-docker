'use strict';

var os = require('os');
var hostname = os.hostname();

const express = require('express');

// 상수
const PORT = 8000;
const HOST = '0.0.0.0';

// 앱
const app = express();
app.get('/', (req, res) => {
  res.send(hostname);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
