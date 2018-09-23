const router = require('express').Router();
const Votos = require('../controllers/VotosController');
const auth = require('../middleware/auth');


router.use(auth);

router.get('/', async (req, res) => {
	await new Votos(req, res).show();
});



router.post('/', async (req, res) => {
	await new Votos(req, res).save();
});

router.put('/:id', async (req, res) => {
	await new Votos(req, res).update();
})

router.delete('/:id', async (req, res) => {
	await new Votos(req, res).delete();
});

module.exports = router;