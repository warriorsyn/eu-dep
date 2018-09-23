const router = require('express').Router();
const Users = require('../controllers/userController');

router.post('/register', async (req, res) => {
	 new Users(req, res).register();
});

router.post('/login', async (req, res) => {
	 new Users(req, res).logar();
});

module.exports = router;