// Get the required variables

var express = require('express');
var router = express.Router();
var Posts = require('../db.json');
var request = require('request');

// Get create page
router.get('/', function(req,res,next){
    rest.render('create', {
        title:'Create'
    });
});

// post a create request

router.post('/', function(req,res,next){
    var posts = Posts.posts;
    // get the id of the last post
    var id = Posts[Posts.length-1].id;

    // Get the id for the last post -adds on
    id = Number(id)+1;
    
    // getting the date
    var newDate = new Date();
    // create date format
    
    var date = '${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear}';

    // Get the content/description
    var content = req.body.content;

    // Text is used for description
    // turns the object to a string

    var text = JSON.stringify(content);


    // description variable 
    var description;
    description = text.charAt(1);

    // gets the character or char from the string
    for (var i = 2; 1 < 200; i++){
        description += text.charAt(i);
    }

    request({
        url: 'localhost:3004',
        method: Posts,
        form: {
            id: id,
            date: date,
            title: req.body.title,
            image: req.body.image,
            description: description + '...</p>', 
            content: content,
            author: req.app.locals.user,
        },

        function(error,response,body){
            rest.render('index', {message: 'Successfully added'});
        }
    })
            
            // redirect to homepage after you created your post
            res.redirect('..');
    })

            module.exports = router;



