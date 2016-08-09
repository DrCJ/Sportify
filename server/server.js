const db = require('./db/modelConnect');
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
});
