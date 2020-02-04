const
    express             = require('express'),
    cors                = require('cors'),
    bodyParser          = require('body-parser'),
    mongoose            = require('mongoose'),
    passport            = require('passport'),
    path                = require('path'),
    config              = require('./config/db'),
    account             = require('./routes/account'),
    app                 = express(),
    port                = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); //статичаеская папка + папка паблик
mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => console.log('MongoDB => OK'));
mongoose.connection.on('error', () => console.log('MongoDB => NO'));

app.listen(port, () => console.log(`Port ${port} => OK`));
app.get('/', (req, res) => res.send('Main page'));
app.use('/account', account);

