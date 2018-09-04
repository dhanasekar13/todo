var express = require('express')
var router  = express.Router()

var db = require('../models/todo')
router.get('/',function(req,resp){
  var arr={}
  db.data.Journal_data.find()
  .then(function(val){
   arr.journal = val
  })
  db.data.Office_data.find()
  .then(function(val){
    arr.office = val
  })
  db.data.Home_data.find()
  .then(function(val){
    arr.home =val
  })
  resp.json(arr)
})


module.exports = router
