const express = require('express');
const fs = require('fs');
// const os = require('os');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());

app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/allData', function (req, res) {
    fs.readFile('data.json', 'utf8', (err, data) => {
        res.send(data);
    });
});


app.post('/add', function (req, res) {
    fs.readFile('data.json', 'utf8', (err, data) => {
        let existingFileBody = data.substr(1, data.length - 2);
        let newFileBody = '[' + existingFileBody + ',' + JSON.stringify(req.body) + ']';
        fs.writeFile('data.json', newFileBody, function (er) {

            res.redirect('back');
            console.log(JSON.stringify(req.body));
            res.json(req.body)

        });
    });

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});


