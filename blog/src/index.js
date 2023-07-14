
// scripts trong json để tạo command line
// install st --save-dev : add vào dependency

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require ('express-handlebars');
const route = require('./routes/index');

var app = express();

//image
// cần phải gán như thế này nếu không thì node sẽ hiểu đường dẫn của mình là một router
app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'))
// Sử dựng middleware -> layer điều kiện:
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
//template express handlebar

app.engine('hbs', engine({extname: 'hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

const port = 3000;

route(app);
app.listen(port, () => {
  console.log(`Example app listening on port localhost:${port}`)
})

