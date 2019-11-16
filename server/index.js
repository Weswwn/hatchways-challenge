const express = require('express')
const app = express();
const port = 3000;
const morgan = require('morgan');
const axios = require('axios');
var bodyParser = require('body-parser')

app.use(express.json());
app.use(morgan('dev'));
app.use('/', express.static('public'));
app.use(bodyParser.urlencoded({extended: true}))

app.get('/students' , (req, res) => {
  axios.get('https://www.hatchways.io/api/assessment/students')
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send(error);
    })
})

app.listen(port, () => console.log(`Connection is working ${port}!`))