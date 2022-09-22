'use strict';

// use this to set logging, must be set before the require('fabric-network');
// process.env.HFC_LOGGING = '{"debug": "./debug.log"}';
require('dotenv/config');

const https = require('https');
const http = require('http');
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const sessions = require('express-session');
const { router } = require('./router');
const { PORT_APP } = require('./constants');

async function main() {
  console.log(`[INFO] application is starting`);
  const app = express();
  app.use(express.json());
  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );
  app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies
  app.use(cookieParser());
  // creating 24 hours from milliseconds
  const oneDay = 1000 * 60 * 60 * 24;
  //session middleware
  app.use(
    sessions({
      secret: 'thisismysecrctekeyfhrgfgrfrty84fwir767',
      saveUninitialized: true,
      cookie: { maxAge: oneDay },
      resave: true,
    })
  );

  // handlers & routers
  app.get('/', async (req, res) => {
    res.send('<h1>welcome<h1>');
  });
  app.use('/', router);
  let server;
  if (process.env.PROTOCOL === 'http') {
    server = http.createServer(app);
  } else {
    const options = {
      key: fs.readFileSync(
        `/etc/letsencrypt/live/blockchainlc.in${process.env.OPTIONS}/privkey.pem`
      ),
      cert: fs.readFileSync(
        `/etc/letsencrypt/live/blockchainlc.in${process.env.OPTIONS}/fullchain.pem`
      ),
    };
    server = https.createServer(options, app);
  }
  server.listen(PORT_APP, async function () {
    console.log(`[INFO] application listening on port ${PORT_APP}`);
  });
}

main();
