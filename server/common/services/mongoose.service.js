const mongoose = require('mongoose');
const config = require('../config/env.config');
let count = 0;

const options = {
    autoIndex: false, // Don't build indexes
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    // all other approaches are now deprecated by MongoDB:
    useNewUrlParser: true,
    useUnifiedTopology: true
    
};
const connectWithRetry = () => {
    console.log(`Establishing MongoDB connection to ${config.dbHost}:${config.dbPort}/${config.dbSchema} with retry..`)
    mongoose.connect(`mongodb://${config.dbHost}:${config.dbPort}/${config.dbSchema}`, options).then(()=>{
        console.log(`Successfully connected to MongoDB schema: [${config.dbSchema}] on [${config.dbHost}:${config.dbPort}]`)
    }).catch(err=>{
        console.log('MongoDB connection failed, retry after 5 seconds. ', ++count);
        setTimeout(connectWithRetry, 5000)
    })
};

connectWithRetry();

exports.mongoose = mongoose;