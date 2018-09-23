require('../models/Votos-model');
const mongoose = require('mongoose');
const VoteModel = mongoose.model('votos');

class VotosController{

	constructor(request, response){
		this.req = request;
		this.res = response;
	}

	async save(){

		try{
			const {title, description} = this.req.body;

			const saveResult = await VoteModel.create({title, description});

			if(!saveResult)
				return this.res.status(400).res("Erro ao criar o item de votação!");

			return this.res.status(200).send(saveResult);

		} catch(e) {
			return this.res.status(400).send(e);
		}

	}

	async show(){
		
		try{
		
			const showResult = await VoteModel.find();

			if(!showResult)
				return this.res.status(404).send("Não há votações cadastradas!");
			
			return this.res.send(showResult);

		} catch(e) {
			return  this.res.status(400).send(e);
		}
		
	}

	async update(){
		try{

			const updateResult = await VoteModel.findByIdAndUpdate(this.req.params.id, {$set: this.req.body});
			if(!updateResult)
				return this.res.status(404).send("Erro ao tentar atualizar");
			return this.res.send(updateResult);
		} catch(e) {
			return  this.res.status(400).send("ID não encontrado ou invalido");
		}

	}

	async delete(){
		try {

			if(this.req.userPermission !== true)
				return this.res.status(401).send("Você nao tem permissão para deletar uma votação ")

			const resultDelete = await VoteModel.findByIdAndDelete(this.req.params.id);

			if(!resultDelete)
				return this.res.status(400).send('Erro ao tentar deletar um item de votação!');
			
			return this.res.send(resultDelete);

		

		} catch(e) {
			return  this.res.status(400).send(e);
		}
	}


}

module.exports = VotosController;