const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
	const authHeader = req.headers.authorization;

	if(!authHeader)
		return res.status(401).send("No token provided");

	const parts = authHeader.split(' ');

	if(!parts.length === 2)
		return res.status(401).send("Token error");

	const [scheme, token] = parts;

	if(!/^Bearer$/i.test(scheme))
		return res.status(401).send("Token malformated");

	jwt.verify(token, 'abcd', (err, decoded) => {
		if(err) return res.status(401).send("Token invalido");

		req.userID = decoded.id;
		req.userTitulo = decoded.titulo;
		req.userPermission = decoded.permissions;
		next();
	}) 

}