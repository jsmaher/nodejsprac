const mongoose  = require('mongoose');


const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone: Number,
    school:String,
});

const Users = mongoose.model("Users",userSchema);

module.exports = Users






//  fetch('http://localhost:2001/user/post', {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({name: "ghous",age: 20,school: "Saylani"})
//   })