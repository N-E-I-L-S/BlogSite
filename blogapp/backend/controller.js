const express = require("express")
const router = express.Router()
const Blogs = require("./models/blogs")

// Get All Blogs
router.get('/', function (req, res, next) {
    Blogs.find({}).then(function (blog) {
        res.send(blog);
    }).catch(next);
});

//Get One Blog
router.get('/:id', function (req, res, next) {
    Blogs.findOne({id: req.params.id}).then(function(blog){
        res.send(blog);
    }).catch(next);
});

// add a new Blog 
router.post('/',function(req,res,next){
    Blogs.create(req.body).then(function(blog){
        res.send(blog);
    }).catch(next);
});

// update a Blog 
router.put('/:id',function(req,res,next){
    Blogs.findOneAndUpdate({id: req.params.id},req.body).then(function(blog){
        Blogs.findOne({id: req.params.id}).then(function(blog){
            res.send(blog);
        });
    });
});

// delete a Blog 
router.delete('/:id',function(req,res,next){
    Blogs.findOneAndDelete({id: req.params.id}).then(function(blog){
        res.send(blog);
    });
});

// delete all Blogs
// router.delete('/',function(req,res,next){
//     Blogs.deleteMany(req.body).then(function(blog){
//         res.send(blog);
//     }).catch(next);
// });

module.exports = router