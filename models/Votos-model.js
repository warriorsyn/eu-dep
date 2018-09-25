const mongoose = require('mongoose');
let CONNECTION_URL = process.env.MONGODB_URI || 'mongodb://admin:2001victor@ds133152.mlab.com:33152/time_plus';
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true});
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

