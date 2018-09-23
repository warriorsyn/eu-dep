const router = require('express').Router();
const Votation = require('../controllers/VotacaoController');

const auth = require('../middleware/auth');

router.use(auth);

 router.put('/:id/sim', async (req, res) => {
 	await new Votation(req, res).votarYes();
 });

 router.put('/:id/nao', async (req, res) => {
 	await new Votation(req, res).votarNot();
 });

module.exports = router;