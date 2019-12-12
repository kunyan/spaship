#!/usr/bin/env node

const https = require("https");
const express = require("express");

const config = require("./config");
const routes = require("./routes/routes");
const Autosync = require("./lib/background/autosync");
const npmPackage = require("./package.json");

const app = express();
const autosync = new Autosync();
const credentials = { key: process.env.HTTPS_KEY, cert: process.env.HTTPS_CERT };

routes.register(app);

const httpsServer = https.createServer(credentials, app);
httpsServer.listen(config.get("port"), () => {
  console.log(`
███████╗██████╗  █████╗ ███████╗██╗  ██╗██╗██████╗  ██╗
██╔════╝██╔══██╗██╔══██╗██╔════╝██║  ██║██║██╔══██╗ ╚██╗
███████╗██████╔╝███████║███████╗███████║██║██████╔╝  ╚██╗
╚════██║██╔═══╝ ██╔══██║╚════██║██╔══██║██║██╔═══╝   ██╔╝
███████║██║     ██║  ██║███████║██║  ██║██║██║      ██╔╝
╚══════╝╚═╝     ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝╚═╝      ╚═╝ `);
  console.log(`Starting SPAship version ${npmPackage.version} with configuration:\n`);
  console.log(config.toString());
  console.log();
  console.log(`Listening on http://${config.get("host")}:${config.get("port")}`);
});

if (config.get("autosync:enabled")) {
  autosync.start();
  if (config.get("autosync:onstartup")) {
    autosync.forceSyncAll();
  }
}

module.exports = { app, autosync, config, routes };
