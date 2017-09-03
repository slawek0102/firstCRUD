const express = require('express');
const fs = require('fs');
const os = require('os');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/', function (req, res) {
    fs.readFile('json.json', 'utf8', (err, data) => {

        res.send(data);
    });
});


app.post('/add', function (req, res, next) {

    fs.readFile('json.json', 'utf8', (err, data) => {
        let existingFileBody = data.substr(1,data.length-2);
        // let existingFileBodyLenght = data.length;

        // console.log('Dlugosc existingFileBody', existingFileBody);
        // console.log('Body', data);

        let newFileBody = '['+existingFileBody +','+ JSON.stringify(req.body)+']';

        fs.writeFile('json.json', newFileBody, function (er) {
        });
    });

    res.redirect('back')
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});


