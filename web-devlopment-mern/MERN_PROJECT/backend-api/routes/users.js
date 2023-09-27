var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/create", async function(req,res){

  const {userName,userPass} = JSON.parse(req.body.data);
  const resp = {
    message:"I reached at server",
    user:userName,
    pass:userPass
  }

  res.json(resp)
})
module.exports = router;
