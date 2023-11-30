const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');

const UserModel = require('../../database/user/user');

//validation
const { ValidationSignUp, ValidationSignIn } = require('../../Validation/auth');

const Router = express.Router();


Router.post("/signup", async (req, res) => {
    try {

        const formData = req.body;

        // const ValidData = await ValidationSignUp(formData);

        // calling static function using the model
        await UserModel.checkEmail(formData);

        // storing data to the database
        const UserData = await UserModel.create(formData);

        if (UserData) {
            return res.status(200).json({
                message: "Successfully Created",
            });
        } else {
            return res.json({ message: "Invalid Credentials" });
        }

    } catch (error) {

        return res.status(500).json({ error: error.message });
    }
});


Router.post("/signin", async (req, res) => {
    try {

        const ValidData = await ValidationSignIn(req.body);
        // console.log(ValidData);
        const { email, password } = ValidData;

        const UserExist = await UserModel.findOne({ email });
        if (!UserExist) {
            return res.json({ message: "Invalid Credentials" });
        }

        const checkPassword = await bcrypt.compare(password, UserExist.password);

        if (checkPassword) {
            const token = await UserExist.generateJwt();
            // console.log(token);
            return res.status(200).json({
                message: "User Authenticated",
                user: UserExist,
                token: token
            });
        }
        return res.json({ message: "Invalid Credentials" });

    } catch (error) {

        return res.status(500).json({ error: error.message });
    }
});


Router.get("/login/success", passport.authenticate("jwt", { session: false }), (req, res) => {
    try {

        return res.status(200).json({
            message: "User Authenticated",
            user: req.user
        });
    } catch (err) {
        return res.status(500).json({ error: "Internal server Error" });
    }

});

Router.get('/logout', (req, res) => {
    try {

        // req.logOut();
        // res.clearCookie('jwt');
        res.redirect(process.env.BASE_URL);
    } catch (err) {
        return res.status(500).json({ error: "Internal server Error" });
    }
});

Router.get("/google", passport.authenticate('google', {
    scope: ['email', 'profile']
}));


Router.get('/google/callback', passport.authenticate('google', { failureRedirect: process.env.BASE_URL }),
    (req, res) => {

        try {

            if (req.user && req.user.token) {
                res.cookie('jwt', req.user.token, { httpOnly: false, maxAge: 24 * 60 * 60, secure: false });
                res.redirect(process.env.BASE_URL);

            }
        } catch (err) {
            return res.status(500).json({ error: "Internal server Error" });
        }

    }
);

module.exports = Router;