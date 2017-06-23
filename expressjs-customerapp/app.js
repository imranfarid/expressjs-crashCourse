var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

/*
var logger = function(req, res, next){
    console.log('Logging...')
    next();
}

app.use(logger);
*/

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

var people = [
    {
        name: 'Jeff',
        age: 30
    },
    {
        name: 'Sara',
        age: 22
    },
    {
        name: 'Bill',
        age: 40
    }
]

app.get('/', function(req, res){
    //res.send('Hello World!');
    res.json(people);
});

app.listen(3000, function(){
    console.log('Server started on port 3000...');
})