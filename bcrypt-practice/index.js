const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'hunter2';
const someOtherPlaintextPassword = 'not_bacon';
let myhash;

//async way
bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
         // store in database
         console.log('myPlaintextPassword', myPlaintextPassword)
         console.log("hash",hash)
         myhash = hash
         bcrypt.compare(myPlaintextPassword, myhash, function(err, result) {
             // result == true
             console.log(result)
         });
    })
});

// synchronous way
// const salt = bcrypt.genSaltSync(saltRounds);
// const hash = bcrypt.hashSync(myPlaintextPassword, salt);
//
// console.log(bcrypt.compareSync(myPlaintextPassword, hash)); // true
// console.log(bcrypt.compareSync(someOtherPlaintextPassword, hash)); // false