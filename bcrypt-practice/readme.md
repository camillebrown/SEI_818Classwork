 1. bcrypt is an npm package which implements the bcrypt function to hash passwords so they can be saved in the database
 2. the 'b' stands for Blowfish encryption which is an algorithm used. bcrypt incorporates a unique salt to each password to create a hashed-password/salt combination which can be safely stored in the database.
 3. To use bcrypt in node first create a node app and run 'npm i bsync' 
 4. Require bsync at the top of your application and then specify a number of salt rounds (ie. 10)
 5. The salt rounds when then be used by the bcrypt.genSalt or .hash methods
 6. The documentation recommends to use the async implementation which can also be considered as Promises or can be used with async/await.


Hash vs. Encryption
hash is a one way function - you cannot unhash easily 
encryption is two ways - you can decrypt if you knew how it was originally encrytped

