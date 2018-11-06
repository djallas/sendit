const express = require('express');
const router = express.Router();


// handle incoming request to /users
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Users was fetched"
    });
});

router.post('/', (req, res, next) => {
    const user = {
        name: req.body.name,
        email: req.body.email
    }    
    res.status(200).json({
        message: "User created",
        createdUser: user
    });
});

router.get('/:id', (req, res, next) => {
    res.status(200).json({
        message: "User details",
        id:req.params.id
    });
});


router.delete('/:id', (req, res, next) => {
    res.status(200).json({
        message: "User deleted",
        id:req.params.id
    });
});


module.exports = router;