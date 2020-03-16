const express = require("express");
const app = express();
const port = 8000;
const expressLayouts = require("express-ejs-layouts");

//Use layouts before accessing views
app.use(expressLayouts);

//Use express router
app.use("/", require("./routes"));

// Setup the view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, function(err) {
  if (err) {
    console.log(`Error in running in server : ${err}`);
  }
  console.log(`Server is running on : ${port}`);
});
