"use strict";

var express = require('express');

var app = express();

var path = require('path');

var server = require('http').createServer(app);

var io = require('socket.io')(server);

var port = process.env.PORT || 5000;