const mongoose = require('mongoose');
mongoose.connect('naboo.mongodb.umbler.com:50269', {useNewUrlParser: true});
const Schema = mongoose.Schema;

let User = new Schema({

	
	email: {
		type: String,
		required: true
	},
	titulo:{
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true,
		minlength: 5,
		select: false
	},
	permissions: {
		type: Boolean,
		required: true,
		default: false
	},
	createAt: {
		type: Date,
		default: Date.now,
	}

});

module.exports = mongoose.model('user', User, 'user');

