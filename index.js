var express = require('express')
var app   = express()

var todos = require('./routes/todos')

app.get('/',function(req,resp){
  resp.send('hi this express appliation')
})
app.use('/api/todos',todos)

app.get('*',function(req,resp){
  resp.send('THIS IS 404 PAGE')
})


app.listen(2000,function(){
  console.log('your app is running in 2000 port')
})
