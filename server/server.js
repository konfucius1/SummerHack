const express = require('express');
const spotifyWebApi = require('spotify-web-api-node');

const app = express();

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
        access_token: data.body.access_token,
        refresh_token: data.body.refresh_token,
        expires_in: data.body.expires_in,
      });
    })
    .catch(() => {
      res.sendStatus(400);
    });
});
