const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://jsmaher:jasvant123@cluster0-lmgce.mongodb.net/test?retryWrites=true&w=majority', {  useNewUrlParser: true})
module.exports = mongoose;