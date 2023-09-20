
const express = require("express")
const router = express.Router();


router.get("/",function(req,res){

    res.send("Hello user...")
})

router.get("/home",function(req,res){
    res.send("I am home")
})

router.get("/work",function(req,res){
    res.send("I am at work...")
})

module.exports = router