// server/index.js
const express = require('express');
const bodyParser = require('body-parser');
const spotifyWebApi = require('spotify-web-api-node');

const cors = require('cors');
const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.post('/refresh', (req, res) => {
  const refreshToken = req.body.refreshToken;
  const spotifyApi = new spotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: 'f1e7c3672ff745879a343af3876bc441',
    clientSecret: '36c838b0e7cb4dfab0291691864a5845',
    refreshToken,
  });

  spotifyApi
    .refreshAccessToken()
    .then((data) => {
      res.json({
        accessToken: data.body.accessToken,
        expiresIn: data.body.expiresIn,
      });
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

app.post('/login', (req, res) => {
  const code = req.body.code;
  const spotifyApi = new spotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: 'f1e7c3672ff745879a343af3876bc441',
    clientSecret: '36c838b0e7cb4dfab0291691864a5845',
  });

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((err) => {
      // console.log(err);
      // res.sendStatus(400);
    });
});

app.listen(3002);
