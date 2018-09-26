const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Chatkit = require('pusher-chatkit-server');

const app = express();

const chatkit = new Chatkit.default({
  instanceLocator: 'v1:us1:38f14c56-f689-498f-a4f7-0c2c9a4be1d6',
  key: '0a7730c7-d4c0-421a-8f49-c650e001bf89:3Jlwg8ylpN0eJCJCcuqJn83vKfgx++P/ePykn39hLNg=',
});

const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/build'));

app.post('/users', (req, res) => {
  const { username } = req.body;
  chatkit
  .createUser({
  id: username,
  name: username
  })
  .then(() => res.sendStatus(201))
  .catch((error) => {
    if (error.error_type === 'services/chatkit/user_already_exists') {
        res.sendStatus(200);
      } else {
        res.status(error.status).json(error);
      }
  });
});

app.post('/authenticate', (req, res) => {
  const authData = chatkit.authenticate({ userId: req.query.user_id });
  res.status(authData.status).send(authData.body);
});


app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.error(`Running on port ${PORT}`);
  }
});
