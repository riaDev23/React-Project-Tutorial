const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

/* CUSTOMERS */
const CUSTOMERS = require("./client/src/components/CUSTOMERS");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.json({
    CUSTOMERS,
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));