const express = require("express");
const PostSchema = require("../../models/PostSchema");
const router = express.Router();
const faker = require("faker");

router.all("/*", (req, res, next) => {
  req.app.locals.layout = "admin";
  next();
});

router.get("/", (req, res) => {
  res.render("admin/index");
});

router.get("/dashboard", (req, res) => {
  res.render("admin/dashboard");
});

router.post("/generate-fake-posts", (req, res) => {
  let date = new Date().setHours(0, 0, 0, 0) / 1000;
  let time = Math.floor(new Date().getTime() / 1000);
  console.log(date, time);

  for (i = 0; i < req.body.amount; i++) {
    let post = new PostSchema();
    post.title = faker.name.title();
    post.status = "public";
    post.date = date;
    post.time = time;
    post.allowComments = faker.datatype.boolean();
    post.body = faker.lorem.sentence();

    post.save(function (err) {
      if (err) throw err;
    });
  }
  res.redirect("/admin/posts");
});

module.exports = router;
