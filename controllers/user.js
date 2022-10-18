const User = require('../models/user')
const bcrypt = require('bcryptjs')

const register = async (req, res,) => {
    try{
        const {username, password} = req.body
        const user = await User.findOne({username: username})
        if(user) return res.status(400).send('User already exists')
        const hashedPassword = bcrypt.hash(password, 10)
        User.create({username: username, password: hashedPassword})
        res.status(201).json({message: 'User created successfully', user})
    } catch (err) {
        res.status(500).send(err.message)
    }
}

const login = async(req, res) => {
    try{
        const {username, password} = req.body
        const user = await User.findOne({username: username})
        if(!user) return res.status(404).send('User not found')
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) return res.status(401).send('Incorrect password')
        res.status(200).send('User successfully logged in')
    } catch (error){
        res.status(500).send(error.message)
    }
}

module.exports= {register, login}

