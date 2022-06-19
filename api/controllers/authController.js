import User from "../models/User.js";
import {createError} from "../middleware/errorHandler.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

class AuthController {
    async register(req, res, next) {
        try {
            var salt = await bcrypt.genSaltSync(10);
            var hash = await bcrypt.hashSync(req.body.password, salt);
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: hash,
            });

            await newUser.save();
            res.status(200).send("New user has been created.");
        } catch (error) {
            next(error);
        }
    }
    async login(req, res, next) {
        try {
            const user = await User.findOne({
                username: req.body.username
            });
            if (!user) {
                return next(createError(404, "User not found."));
            }
            const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
            if (!isPasswordCorrect) {
                return next(createError(400, "Wrong password or username!"));
            }
            const token = jwt.sign({id:user._id, isAdmin:user.isAdmin}, process.env.STATIC_KEY);
            const {password, isAdmin, ...restParams} = user._doc;
            res.cookie("access_token", token, {
               httpOnly: true, 
            }).status(200).json({...restParams});
        } catch (error) {
            next(error);
        }
    }
}

export default new AuthController();