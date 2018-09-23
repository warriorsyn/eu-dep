require('../models/user-model');
const mongoose = require('mongoose');
const userModel = mongoose.model('user');
const jwt = require('jsonwebtoken');
class userController{

	constructor(request, response){
		this.req = request;
		this.res = response;
	}

	async register(){
		try{
	
		const {email} = this.req.body;

		if(await userModel.findOne({email}))
			return this.res.status(401).send("Email ja cadastrado");

		const register = await userModel.create(this.req.body);

		if(!register)
			return this.res.status(404).send('Erro ao registrar');

		return this.res.send(register);
	} catch(e) {
		return this.res.status(400).send(e);
	}

	}

	async logar(){

		const {email, password} = this.req.body;

		const user = await userModel.findOne({email, password}).select('+password');

		if(!user)
			return this.res.status(400).send("Usuario nao encontrado");

		let token = jwt.sign({id: user.id, titulo: user.titulo, permissions: user.permissions}, 'abcd', {
			expiresIn: "1 day"
		});


		return this.res.send({user, token});
	}
	
}

module.exports = userController;