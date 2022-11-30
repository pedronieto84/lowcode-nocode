const functions = require("firebase-functions");

const app = require("./api")


exports.helloWorld = functions.https.onRequest((req, res) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  res.send("Hola soy Pedro");
});


exports.api = functions.https.onRequest(app);
