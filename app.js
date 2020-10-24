const path = require('path');

const express = require('express');
const mongoose = require('mongoose')
const projectControls = require('./controllers/projectControls');
const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.ufyip.mongodb.net/website?retryWrites=true&w=majority`

const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

const routes = require('./routes/router');

app.use(express.static(path.join(__dirname, '/public')));


app.use(routes);

mongoose.connect(MONGODB_URI)
.then(result => {
  console.log('Connected');
  app.listen(process.env.PORT || 3000);
}).catch(err => {
  console.log(err);
})
