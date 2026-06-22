const express = require('express');
const router = express.Router();

router.get('/parsetime', (req, res) => {
    const curdate = new Date(req.query.iso);

    res.json({
        'hour': curdate.getHours(),
        'minute': curdate.getMinutes(),
        'second': curdate.getSeconds()
    })

})

router.get('/unixtime', (req, res) => {
    const curdate = new Date(req.query.iso);
    
    res.json({
        'unixtime': curdate.getTime()
    })
} )