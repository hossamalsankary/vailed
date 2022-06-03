const express = require("express");
const app = express();
const emailValidator = require("deep-email-validator");

var emailCheck = require("email-check");

// Quick version
emailCheck("mail@example.com")
  .then(function (res) {
    // Returns "true" if the email address exists, "false" if it doesn't.
  })
  .catch(function (err) {
    if (err.message === "refuse") {
      // The MX server is refusing requests from your IP address.
    } else {
      // Decide what to do with other errors.
    }
  });

// With custom options
emailCheck("mail@example.com", {
  // from: "address@domain.com",
  // host: "mail.domain.com",
  // timeout: 3000,
})
  .then(function (res) {
    console.log(res);
  })
  .catch(function (err) {
    console.error(err);
  });

//ss
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Example app listening on port port!");
});

//Run app, then load http://localhost:port in a browser to see the output.
