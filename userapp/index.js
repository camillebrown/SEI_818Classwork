const db = require('./models')
const pet = require('./models/pet')

// db.user.create({
//     firstName: 'Fatima',
//     lastName: 'Gomez',
//     age: 1
// })
// .then(createdUser=>{
//     //the create promise returns the new row
//     // of data that has been created
//     // (otherwise it throws an error)
//     console.log('Created User: ', createdUser)
// })

// db.user.findAll().then(foundUsers=>{
//     // callback receives array of users from table
//     console.log('Found Users: ', foundUsers.data)
// })

// db.user.findOne({
//     where: {firstName: 'Mateen'}
// })
// .then(foundUser=>{
//     console.log('found user: ', foundUser.dataValues.email)
// })

// db.user.findOrCreate({
//     where: {firstName: 'Mateen'},
//     defaults: {
//         email: 'Mateen@isthecoolest.com',
//         age: 345
//     }
// })
// .then(([foundOrCreatedUser, created])=>{
//     console.log('found or created user: ', foundOrCreatedUser)
//     console.log('Already existed in database?', !created)
// })

// db.user.update(
//     {
//         age: 25
//     },
//     {
//         where: {
//             firstName: 'Fatima'
//         }
//     })
//     .then(numRowsChanged=>{
//     console.log(numRowsChanged)
// })

// db.user.destroy({
//     where: {firstName: 'Fatima'}
// })
// .then(numRowsDeleted=>{
//     console.log(numRowsDeleted)
// })

// get the first user in the table
// db.user.findOne({
//     where: {firstName: 'Fatima'}
// })
// .then(foundUser=>{
//     console.log("adding pet to this user: ", foundUser.firstName)
//     foundUser.createPet({
//         name: 'slimy',
//         species: 'giant toad',
//         description: 'he takes anti-anxiety meds'

//     })
//     .then(createdPet=>{
//         console.log('just created: ', createdPet.get())
//     })
// })
// .catch(err=>{
//     console.log(err)
// })

// db.user.findByPk(3)
// .then(foundFatima=>{
//     foundFatima.getPets()
//     .then(fatimasPets=>{
//         console.log("Fatima's farm: ")
//         fatimasPets.forEach(pet=>{
//             console.log(pet.name)
//         })
//     })
// })

// db.pet.findOrCreate({
//     where: {name: 'Simba'},
//     default: {
//         species: 'Ginger cat',
//         description: 'maniac',
//     }
// })
// .then(([pet, created])=>{
//     db.user.findByPk(3)
//     .then(foundFatima=>{
//         foundFatima.addPet(pet)
//         console.log(`${foundFatima.firstName} is now the proud owner of ${pet.name}`)
//     })
// })

// db.user.findAll({
//     include: [db.pet]
// })
// .then(foundUsers=>{
//     // each user will not have a .pets array containing any associated pets
//     foundUsers.forEach(user=>{
//         console.log(`${user.firstName}'s farm: `)
//         user.pets.forEach(pet=>{
//             console.log(pet.name)
//         })
//     })
// })

// first get a reference to a pet
// db.pet.findOrCreate({
//     where: {
//         name: 'Simone',
//         species: 'salt and pepper cat',
//         description: 'evil'
//     }
// })
// .then(([pet, created])=>{
//     // second, get a reference to a toy
//     db.toy.findOrCreate({
//         where: {
//             type: 'chew toy',
//             color: 'light blue'
//         }
//     })
//     .then(([toy, created])=>{
//         // finally associate the toy with the pet
//         pet.addToy(toy)
//         .then(createdRelation=>{
//             console.log('createdRelation: ', createdRelation)
//             console.log(`${toy.type} added to ${pet.name}`)
//         })
//     })
// })

// first find the toy
// db.toy.findByPk(2)
// .then(foundToy=>{
//     // now get all pets associated with this toy
//     foundToy.getPets()
//     .then(foundPets=>{ // gives us an array of pets who use that toy
//         console.log(`${foundPets.length} pets(s) love the ${foundToy.color} ${foundToy.type}`)
//     })
// })
// .catch(err=>{
//     console.log(err)
// })

// db.pet.findOne({
//         where: {id: 1},
//         include: [db.user, db.pet]
// })
// .then(foundPet=>{
//     foundPet.toys.forEach(toy=>{
//         console.log(`${foundPet.user.firstName} \'s pet, ${foundPet.name} loves there ${toy.type}`)
//     })
// })

// first find user
// db.user.findOne({
//     where: {
//         firstName: 'Fatima'
//     }
// })
// .then(foundUser=>{
//     // now find the pet I want to associate with the user
//     db.pet.findByPk(1)
//     .then(foundPet=>{
//         //associate the pet with the user
//         foundUser.addPet(foundPet)
//         .then(newRelation=>{
//             console.log('newRelation: ', newRelation)
//         })
//     })
// })

// db.pet.findByPk(1)
// .then(foundPet=>{
//     db.toy.findOne()
//     .then(foundToy=>{
//         foundPet.addToy(foundToy)
//         .then(petWithNewToy=>{
//             console.log('petWithNewToy: ', petWithNewToy)
//         })
//     })
// })