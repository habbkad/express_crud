const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/students_routes");

const app = express();

//middle-wares
app.use(bodyParser.json());

//endpoints or paths
app.use("/", routes);

app.listen(5001, () => {
  console.log("server running on port 5001");
});
