const express = require("express");
const connectdb = require("./config/connectdb");
require("dotenv").config();
const cors = require("cors");

const app = express();
connectdb();
app.use(cors());
app.use(express.json());
app.use("/user", require("./routes/user"));
app.use("/product", require("./routes/Product"));
app.use("/restaurant", require("./routes/restaurant"));
app.use("/commande", require("./routes/commande"));

app.listen(process.env.PORT, (err) =>
  err
    ? console.log(err)
    : console.log(`server is running on port ${process.env.PORT}`)
);
