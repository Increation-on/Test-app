const User = require('./models/User');
const Role = require('./models/Role');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const {secret} = require('./config');


generateAccessToken = (id, roles) => {
    const payLoad = {
        id,
        roles
    }
    return jwt.sign(payLoad, secret, {expiresIn:'24h'})
}

class authController {
    async registartion(req, res) {
        try{
            const errors = validationResult(req);
            if(!errors.isEmpty()) {
                return res.status(400).json({message: "Registration error!", errors})
            }
            const {username, password, name, email} = req.body;
            const candidateUser = await User.findOne({username});
            const candidateEmail = await User.findOne({email});
            const candidateName = await User.findOne({name});
            if(candidateUser){
                return res.status(400).json({message:'User with the same login already exists'})
            }
            if(candidateName){
                return res.status(400).json({message:'User with the same email already exists'})
            }
            if(candidateEmail){
                return res.status(400).json({message:'User with the same email already exists'})
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            const userRole = await Role.findOne({value: "USER"});
            const user = new User({username, password: hashPassword, roles: [userRole.value], name, email});
            await user.save();
            return res.json({message:'Registration completed successfully'});
        }catch(e){
            console.log(e);
            res.status(400).json({message: 'Registration error'})
        }
    }

    async login(req, res) {
        try{
            const {email, password} = req.body;
            const validEmail = await User.findOne({email});
            if(!validEmail) {
                return res.status(400).json({message:`User ${validEmail} not found`});
            }
            const validPassword = bcrypt.compareSync(password, validEmail.password);
            if(!validPassword){
                return res.status(400).json({message:'Password do not match'})
            }
            const token = generateAccessToken(validEmail._id, validEmail.roles);
            return res.json({token});
        }catch(e){
            console.log(e);
            res.status(400).json({message: 'Login error'})
        }
    }
    async getUser(req, res){
        try{
            const users = await User.find();
            res.json('server work')
        }catch(e){

        }
    }
}

module.exports = new authController();