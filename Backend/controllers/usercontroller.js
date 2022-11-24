//Importing the user schema
const { User } = require('../models/usermodel');

const getUsers = async(req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (error){
        res.status(500).json({message : error.message});
    }

}

const getUserById = async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    }
    catch (error){
        res.status(404).json({message : error.message});
    }
}

const postUser = async(req, res) => {
    const user = new User({
        name : req.body.name,
        email : req.body.email,
        gender : req.body.gender
    }) 
    try {
        const insertedUser = await user.save();
        res.status(201).json(insertedUser);
    }
    catch (error){
        res.status(400).json({message : error.message});
    }
}

const updateUser = async(req, res) => {
    try {
        const updatedUser = await User.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(201).json(updatedUser);
    }
    catch (error){
        res.status(400).json({message : error.message});
    }
}

const deleteUser = async(req, res) => {
    try {
        const deletedUser = await User.deleteOne({_id:req.params.id});
        res.status(201).json(deletedUser);
    }
    catch (error){
        res.status(400).json({message : error.message});
    }
}

module.exports = { getUsers, getUserById, postUser, updateUser, deleteUser };
