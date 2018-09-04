var mongoose  =require('mongoose')
mongoose.set('debug',true)
mongoose.connect('mongodb://localhost/todo')
mongoose.Promise  = Promise;


var journalSchema   =   new mongoose.Schema({
  name:String,
  completed:{
    type:Boolean,
    default:false
  },
  created_date:{
    type:Date,
    default:Date.now
  }
})


var officeSchema   =   new mongoose.Schema({
  name:String,
  completed:{
    type:Boolean,
    default:false
  },
  created_date:{
    type:Date,
    default:Date.now
  }
})


var homeSchema   =   new mongoose.Schema({
  name:String,
  completed:{
    type:Boolean,
    default:false
  },
  created_date:{
    type:Date,
    default:Date.now
  }
})

var Journal =mongoose.model('Journal',journalSchema)
var Office =mongoose.model('Office',officeSchema)
var Home =mongoose.model('Home',homeSchema)

module.exports ={
  data:{
  Journal_data:Journal,
  Office_data:Office,
  Home_data:Home
}
}
