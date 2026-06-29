const jwt = require('jsonwebtoken');


// const requireJwt = (req, res, next) => {
//     const token = 
//         req.header('x-auth-token') ||
//         req.header?.authorization?.match(/^Bearer (.+)/)[1];

//     if(!token){
//         return res.status(401).json({message: 'No token, authoirzation denied (Not logged in)'});
//     }

//     try{
//         //verify token
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);

//         //decode.user to req.user
//         req.user = decoded.user;

//         next();
//     }
//     catch(err) {
//         res.status(401).json({message: 'Token is invalid'});
//     }
// }

const optionalJwt = (req, res, next) => {

        const token = 
        req.header('x-auth-token') || 
        req.headers?.authorization?.match(/^Bearer (.+)/)[1];

        if(!token) return next();

        try{
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded.user;

            next();
        }
        catch(err){
            res.status(401).json({message: 'Invalid token'});
        }
    
}



module.exports = { optionalJwt };