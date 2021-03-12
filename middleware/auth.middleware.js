const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization;

        if (token) {
            res.locals.userId = jwt.decode(token).userId;
        }
        
        next();
    } catch (error) {
        res.status(401).send({message: error.message})
    }
}