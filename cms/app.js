const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
const exphbr = require("express-handlebars");
const bodyParser = require("body-parser");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const Handlebars = require("handlebars");
const methodOverride = require("method-override");
const upload = require("express-fileupload");

const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://127.0.0.1:27017/cms")
  .then((db) => {
    console.log("MONGO connected");
  })
  .catch((err) => console.log(err));

//set view engines
const { select } = require("./helpers/handlebars-helpers");
app.engine(
  "handlebars",
  exphbr.engine({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    defaultLayout: "home",
    helpers: { select: select },
  })
);
app.set("view engine", "handlebars");

// Upload Middleware
app.use(upload());

//body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Method Override
app.use(methodOverride("_method"));

//load routes
const home = require("./routes/home/main");
const admin = require("./routes/admin/admin");
const posts = require("./routes/admin/posts");

//use routes
app.use("/", home);
app.use("/admin", admin);
app.use("/admin/posts", posts);

app.listen(4500, () => {
  console.log(`listening on 4500`);
});
