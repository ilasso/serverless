const express = require('express');

const routes = express.Router({
    mergeParams: true
});


routes.get('/', (req, res) =>{
    res.status(200).json({});
});

routes.get('/user', (req, res) =>{
    res.status(200).json({"message":"soy user"});
});

module.exports = {
    routes,
}
