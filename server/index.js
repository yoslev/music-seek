// server/index.js
const config = require('./common/config/env.config.js');

const express = require("express");
const bodyParser = require('body-parser');

const app = express();

const UsersRouter = require('./users/routes.config');
const path = require('path');

const middlewares = [
    bodyParser.urlencoded({ extended: true }),
];
app.use(middlewares);

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    } else {
        return next();
    }
});

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(express.json());
UsersRouter.routesConfig(app);

/*
app.get("/api", (req, res) => {
    res.json({message: "Hello from server!"});
});

app.get("/api/user", (req, res) => {
    console.log('replying users..')
    res.json([
        {
            "id": "111",
            "firstName": "Yosi",
            "lastName": "lev",
            "mainPayingInstrumentId": 0,
            "mainPayingInstrumentLevel": 1,
            "secondPayingInstrumentId": 3,
            "secondPayingInstrumentLevel": 1,
            "musicFlavours": [1,3],
            "region": 1,
            "ageClass": 2,
        },
        {
            "id": "222",
            "firstName": "Tiki",
            "lastName": "lev",
            "mainPayingInstrumentId": 2,
            "mainPayingInstrumentLevel": 1,
            "secondPayingInstrumentId": 4,
            "secondPayingInstrumentLevel": 1,
            "musicFlavours": [1,4,6],
            "region": 1,
            "ageClass": 3,
        }]);
});
*/

// All other GET requests not handled before will return our React app
/*
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
*/

app.listen(config.port, () => {
    console.log(`Server listening on ${config.port}`);
});
