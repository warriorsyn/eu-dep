const mongoose = require('mongoose');
mongoose.connect('naboo.mongodb.umbler.com:50269', {useNewUrlParser: true});
const Schema = mongoose.Schema;

let Votes = new Schema({

	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true
	},
	yes: {
		type: Number,
		default: 0
	},
	not: {
		type: Number,
		default: 0
	},
	createAt: {
		type: Date,
		default: Date.now,
	}

});

module.exports = mongoose.model('votos', Votes, 'votos');

