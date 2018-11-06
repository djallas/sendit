const express = require('express');

const app = express();

const morgan = require('morgan');

const bodyParser = require('body-parser');

const parcelRoutes = require('./v1/routes/parcels')
const userRoutes = require('./v1/routes/users')



app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    req.header('Access-Controll-Allow-Orgin','*');
    req.header(
        'Access-Controll-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});
// Routes which should handle request
app.use('/api/v1/parcels', parcelRoutes);
app.use('/api/v1/users', userRoutes);

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500 );
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;