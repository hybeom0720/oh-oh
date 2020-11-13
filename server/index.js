const bodyParser = require('body-parser');
const cookingParser = require('cookie-parser');
const express = require('express');

const app = express()

app.get('/test',(req,res)=>res.send('Hello Test'))
