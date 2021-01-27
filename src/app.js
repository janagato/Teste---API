const express = require('express');
const cors    = require('cors');
const morgan  = require('morgan');
const dotenv  = require('dotenv').config();
const mongoose = require('mongoose');

require('./database/connect')

const app     = express();

const routes = require('./routes');

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.use(routes)

module.exports = app;