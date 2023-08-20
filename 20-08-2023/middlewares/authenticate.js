const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
    if (req.cookies.user) {
        const user = jwt.verify(req.cookies.user, process.env.JWT_SECRECT_KEY);
        if(user?.data._id){
            req.user = user.data;
            next()
        }else {
            res.render("unauthorized").status(401)   
        }
    } else {
        res.render("unauthorized").status(401)
    }
}
module.exports = authenticate;