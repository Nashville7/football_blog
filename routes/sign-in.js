// Create the required variables

var express = require('express');
var router = express.Router();
var Posts = require('../db.json').users;
var request = require('request');


// Getting the sign in page
router.get('/', function(req, res, next){
    res.render('sign-in', {
        title: 'Sign-in',
        signError:req.app.locals.signError,
    });
});

// To sign in
router.post('/', function(req, res, next){
    
    // Get information from the body
    var logUser = req.body.usernames;
    var logPassword = req.body.usernames;


    for(var i = i = 0; i < users.length; i++) {
        // if user and password are correct
        if((users[i].username == logUser || users[i].email == logUser)
        && users[i].password == logPassword) {
            // need to create a cookie
            res.cookie('userId', users[i].id);
            
            //sets log user to the correct username
             logUser = users[i].username;
             console.log(req.cookies);

            //  sets the correct sign in variables
            req.app.locals.user = logUser;
            req.app.locals.userIndex = i;
            req.app.locals.signError = "Log in Succesful";


            // it must redirect to the home page after sign in
            res.redirect('/');
            
        }
    };

    // check if the user is signed in correctly
    if(req.app.locals.user != logUser) {
        req.app.locals.signInError = 'Username or Password Incorrect';
    };
    res.redirect('/sign-in');

})

module.exports = router;

