// server/index.js
const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

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

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
