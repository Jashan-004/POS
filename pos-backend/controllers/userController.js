const createHttpError = require("http-errors");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const register = async(req, res, next) => {
    try{
        const { name, phone, email, password, role } = req.body;

        if(!name || !phone || !email || !password || !role ) {
            const error = createHttpError(400, "All fields are required!");
            return next(error);
        }

        const isUserPresent = await  User.findOne({email});

        if(isUserPresent){
            const error = createHttpError(400, "User alrady exist!");
            return next(error);
        }

        const user = {name, phone, email, password, role};
        const newUser = User(user);

        await newUser.save();

        res.status(201).json({success: true, message: "New user created!", data: newUser});

    } catch (error){
        next(error);
    }
}

const login = async(req, res, next) => {
    try{
        const { email, password} = req.body;

        if( !email || !password) {
            const error = createHttpError(400,"All fields are requried!");
            next(error);
        }

        const isUserPresent = await User.findOne({email});
        if (!isUserPresent){
            const error = createHttpError(401, "Invalid Credentials");
            next(error);

        }

        const isMatch = await bcrypt.compare(password, isUserPresent.password);
        if(!isMatch){
            const error = createHttpError(401, "Invalid Credentials");
            next(error);
        }

        c

 
    } catch(error){
        next(error);
    }
}

module.exports = { register, login}