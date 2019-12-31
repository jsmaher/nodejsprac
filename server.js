const express = require('express');
const app = express();
const mongoose = require('./Config/db')

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('were connected!')
});
app.use(express.json())
app.listen(3000,()=>{
    console.log('localhost connected')
})
app.use('/',require('./Routes'))

