const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const {spawn} = require('child_process');

router.get('/', (req, res) => {
    res.render('index');
    
    /*
    if(req.session.page_views){
        req.session.page_views++;
        res.send("You visited this page " + req.session.page_views + " times");
     } else {
        req.session.page_views = 1;
        res.send("Welcome to this page for the first time!");
     }
     */
});

router.get('/pytest', (req, res) => {
    var dataToSend;
    // spawn new child process to call the python script
    const python = spawn('python', ['script1.py']);
    // collect data from script
    python.stdout.on('data', function (data) {
     console.log('Pipe data from python script ...');
     dataToSend = data.toString();
    });
    // in close event we are sure that stream from child process is closed
    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        // send data to browser
        res.send(dataToSend);
    });
});
=======
const models = require('../models');

router.get('/', (req, res) => 
    res.render("index"));
>>>>>>> a85d31b7f99b3b4fd153a307f764cb5e7dfee95d

module.exports = router;