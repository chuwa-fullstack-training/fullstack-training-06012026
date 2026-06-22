const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/:dirname/:extname', (req, res) => {
    const result = [];
    let dirname = req.params.dirname;
    let extname = req.params.extname;
    fs.readdir(dirname, (err, files) => {
        for(let file of files){
            if(path.extname(file).slice(1) === extname) result.push(file);
        }
        res.json(result);
    })
    


})

module.exports = router;