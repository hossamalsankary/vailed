const express = require("express");
const app = express();
const emailValidator = require("deep-email-validator");

async function isEmailValid(email) {
  console.log(email);

  console.log(await emailValidator.validate(email));
}
//ss
app.get("/", (req, res) => {
  res.send("Hello World!");
});
isEmailValid("barnes_judy@icloud.com");
isEmailValid("omarkaser@icloud.com");

app.listen(3000, () => {
  console.log("Example app listening on port port!");
});

//Run app, then load http://localhost:port in a browser to see the output.
