// const mongoose = require('mongoose');
// mongoose.promise = Promise;

// let userSeed = [
//   {
//     firstName: {
//       type: String,
//       required: true
//       },
//     lastName: {
//       type: String,
//       required:true
//       },
//     email: {
//       type: String,
//       required: true
//       },
//     password: {
//       type: String,
//       required: true, 
//       minlength: 8
//       }
//   }
// ];

// db.UserInfo.deleteMany({})
//   .then(() => db.UserInfo.collection.insertMany(userSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

// const User = mongoose.model('User', userSeed);

// module.exports = User;
