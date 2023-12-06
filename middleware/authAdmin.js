const jwt = require('jsonwebtoken');
 
module.exports = (req, res, next) => {
   try {
       const token = req.headers.authorization.split(' ')[1];
       const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
       const userId = decodedToken.userId;
       const role = decodedToken.role;
       if (role === 'admin') {
        req.auth = {
            userId: userId,
            role: role
        };
        next();
    } else {
        // Si le rôle n'est pas 'admin', renvoyez une réponse non autorisée
        res.status(403).json({ message: 'Vous n\'avez pas les autorisations nécessaires pour accéder à cette ressource.' });
    }
} catch(error) {
    res.status(401).json({ error });
}
};