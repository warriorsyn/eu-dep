const mongoose = require('mongoose');

let CONNECTION_URL = process.env.MONGODB_URI || 'mongodb://admin:2001victor@ds133152.mlab.com:33152/time_plus';

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true});
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

