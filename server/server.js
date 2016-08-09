<<<<<<< HEAD
// const db = require('./db/db_config');
const express = require('express');
const middleware = require('./middleware/middleware');
const auth = require('./middleware/auth');
const routes = require('./middleware/authroutes');

const app = express();
const passport = auth(app, express);
middleware(app);
routes(app, express, passport);

app.listen(80, () => {
  console.log('currently listening to port 80');
=======
const db = require('./db/modelConnect');



let port = process.env.PORT || 3000,
    http = require('http'),
    fs = require('fs'),
    html = fs.readFileSync(__dirname + '/../public/index.html');

const log = function(entry) {
    fs.appendFileSync('/tmp/sample-app.log', new Date().toISOString() + ' - ' + entry + '\n');
};

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        const body = '';

        req.on('data', function(chunk) {
            body += chunk;
        });

        req.on('end', function() {
            if (req.url === '/') {
                log('Received message: ' + body);
            } else if (req.url = '/scheduled') {
                log('Received task ' + req.headers['x-aws-sqsd-taskname'] + ' scheduled at ' + req.headers['x-aws-sqsd-scheduled-at']);
            }

            res.writeHead(200, 'OK', {'Content-Type': 'text/plain'});
            res.end();
        });
    } else {
        res.writeHead(200);
        res.write(html);
        res.end();
    }
>>>>>>> specs2
});
