const express = require('express');
const bodyParser = require('body-parser');
const votos = require('./routes/votos-route');
const votacao = require('./routes/votation-route');
const user = require('./routes/user-route');
const cors = require('./config/cors');

let app = express();
let port = process.env.PORT || 3000

app.get('/', (req, res) => {res.send("<H1>Welcome to euDep api</H1>")})

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors);
app.use('/api/user', user);
app.use('/api/votos', votos);
app.use('/api/votacao', votacao);
app.listen(port, () => {
	console.log('Server started up at port', port);
});