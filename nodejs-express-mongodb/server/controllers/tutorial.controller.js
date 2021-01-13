const db = require("../models")
// grabs the Tutorial model from index where everything is brought together
const Tutorial = db.tutorials

//Create a controller that will create and save a new tutorial
exports.create = (req, res) => {
    //Validate request
    if(!req.body.title){
        res.status(400).send({message: "Title cannot be empty!"})
        return
    }
    //create a Tutorial
    const tutorial = new Tutorial({
        title: req.body.title,
        description: req.body.description,
        // ? means if true! 
        // : means else and then you apply a setting 
        published: req.body.published ? req.body.published : false
    })
    //Save Tutorial in the database
    tutorial
        .save(tutorial)
        .then((data)=>{
            res.send(data)
        })
        .catch((err)=>{
            res.status(500).send({
                message:
                    err.message || "Some error occured while created the Tutorial"
            })
        })
}

//Retrieves all the tutorials in the database
exports.findAll = (req, res) => {
    //Find all the tutorials in the database
    Tutorial.find()
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).send({
            message:
            err.message || "Some error occured while retrieving tutorials."
        })
    })
}

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id
    Tutorial.findById(id)
    .then((data)=>{
        if(!data){
            return res.status(400).send({
                message: "Not found Tutorial with id: " + id
            })
        }else{
            res.send(data)
        }
    })
    .catch((err)=>{
        res.status(500).send({
            message:
            err.message || `Some error occured while retrieving tutorial with this id ${id}.`
        })
    })
}

//Update a Tutorial with id
exports.update = (req, res) => {
    const id = req.params.id
    Tutorial.findByIdAndUpdate(
        {_id: id}, 
        {title: req.body.title}
    )
    .then((data)=>{
        if(!data){
            return res.status(400).send({
                message: "Not found Tutorial with id: " + id
            })
        }else{
            res.send(data)
        }
    })
    .catch((err)=>{
        res.status(500).send({
            message:
            err.message || `Some error occured while updating tutorial with this id ${id}.`
        })
    })
}

//Delete a Tutorial with id
exports.delete = (req, res) => {
    const id = req.params.id
    Tutorial.findByIdAndDelete(
        {_id: id}    
    )
    .then((data)=>{
        if(!data){
            return res.status(400).send({
                message: "Not found Tutorial with id: " + id
            })
        }else{
            res.send("Tutorial was deleted.")
        }
    })
    .catch((err)=>{
        res.status(500).send({
            message:
            err.message || `Some error occured while deleting tutorial with this id ${id}.`
        })
    })
}

//Retrieve all published Tutorials
exports.findAllPublished = (req, res) => {
    Tutorial.find(
        {published: true}    
    )
    .then((data)=>{
        if(!data){
            return res.status(400).send({
                message: "Not found published Tutorial"
            })
        }else{
            res.send(data)
        }
    })
    .catch((err)=>{
        res.status(500).send({
            message:
            err.message || `Some error occured while finding published tutorials.`
        })
    })
}