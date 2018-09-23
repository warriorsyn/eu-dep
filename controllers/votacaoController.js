require('../models/Votos-model');
const mongoose = require('mongoose');
const VoteModel = mongoose.model('votos');

class VotacaoController{

	constructor(request, response){
		this.req = request;
		this.res = response;
	}

	async votarYes(){
			try{			
			const updateResult = await VoteModel.findByIdAndUpdate(this.req.params.id, {$inc: {yes: 1}});
			if(!updateResult)
				return this.res.status(404).send("Erro ao tentar atualizar");
			return this.res.send(updateResult);
		} catch(e) {
			return  this.res.status(400).send("ID invalido");
		}

	}

	async votarNot(){
			try{			
			const updateResult = await VoteModel.findByIdAndUpdate(this.req.params.id, {$inc: {not: 1}});
			if(!updateResult)
				return this.res.status(404).send("Erro ao tentar atualizar");
			return this.res.send(updateResult);
		} catch(e) {
			return  this.res.status(400).send("ID invalido");
		}

	}


}

module.exports = VotacaoController;