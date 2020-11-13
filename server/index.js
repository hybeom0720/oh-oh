const bodyParser = require('body-parser');
const cookingParser = require('cookie-parser');
const express = require('express');

//const config = require('./config/key');
//const { auth } = require('./middleware/auth');
const { Report } = require('./models/Report');
const { Restaurant} = require('./models/Restaurant');
const { User } = require('./models/User');
const app = express()

//for testing
app.get('/test',(req,res)=>res.send('Hello Test'))

//Organizing Routing
var report = require('./router/reports.js')(app);
app.use('/report', report);

var restaurant = require('./router/restaurants.js')(app);
app.use('/restaurant',restaurant);

var user = require('./router/users.js')(app);
app.use('/user', user);

const port = 5001

app.listen(port, () => console.log(`listening port ${port}!`));
