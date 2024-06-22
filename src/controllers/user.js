const { createToken } = require("../services/tokenService");
const { register, login } = require("../services/userService");

module.exports = {
    registerGET: (req, res) => {
        res.render('register');
    },
    loginGET: (req, res) => {
        res.render('login');
    },
    registerPOST: async (req, res) => {
        const { username, email, password, repassword } = req.body;
        if (!username || !email || !password || !repassword) {
            //TODO Error Handling
        };
        if (password != repassword) {
            //TODO Error Handling
        }
        const user = await register(username, email, password);
        const token = createToken(user);
        res.cookie('token', token, { httpOnly: true });
        res.redirect('/');
    },
    loginPOST: async (req, res) => {
        const { email, password } = req.body;
        if (!email || !password) {
            //TODO Error Handling
        };
        const user = await login(email,password);
        const token = createToken(user);
        res.cookie('token', token, { httpOnly: true });
        res.redirect('/');
    },
    logout: (req,res) => {
        res.clearCookie('token');
        res.redirect('/');
    }
}