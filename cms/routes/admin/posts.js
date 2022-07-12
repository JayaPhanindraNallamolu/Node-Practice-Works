const express = require("express");
const router = express.Router();
const post = require("../../models/PostSchema");
const { isEmpty } = require("../../helpers/upload-helper");

router.all("/*", (req, res, next) => {
  req.app.locals.layout = "admin";
  next();
});

router.get("/", (req, res) => {
  // res.render('admin/index');
  post.find({}).then((posts) => {
    res.render("admin/posts", { posts: posts });
  });
});

router.get("/create", (req, res) => {
  res.render("admin/posts/create");
});

router.post("/create", (req, res) => {
  let filename;
  if (!isEmpty(req.files)) {
    let file = req.files.file;
    filename = file.name;
    let dirUploads = "./public/uploads/";

    file.mv(dirUploads + filename, (err) => {
      if (err) throw err;
    });
  }

  let date = new Date().setHours(0, 0, 0, 0) / 1000;
  let time = Math.floor(new Date().getTime() / 1000);
  console.log(date, time);

  let allowcomments = true;
  if (req.body.allowcomments) {
    allowcomments = true;
  } else {
    allowcomments = false;
  }

  let postData = {
    title: req.body.title,
    status: req.body.status,
    date: date,
    time: time,
    allowComments: allowcomments,
    body: req.body.body,
    file: filename,
  };

  console.log(postData);

  const newPost = post(postData);

  newPost
    .save()
    .then((savedPost) => {
      res.redirect("/admin/posts");
    })
    .catch((err) => {
      console.log("could not saved");
    });
  console.log(allowcomments);
});

router.get("/edit/:id", (req, res) => {
  post.findOne({ _id: req.params.id }).then((post) => {
    res.render("admin/posts/edit", { post: post });
  });

  // res.render('admin/posts/edit');
});

router.put("/edit/:id", (req, res) => {
  post.findOne({ _id: req.params.id }).then((post) => {
    if (req.body.allowcomments) {
      allowcomments = true;
    } else {
      allowcomments = false;
    }
    let date = new Date().setHours(0, 0, 0, 0) / 1000;
    let time = Math.floor(new Date().getTime() / 1000);
    console.log(date, time);

    post.title = req.body.title;
    post.status = req.body.status;
    post.date = date;
    post.time = time;
    post.allowComments = allowcomments;
    post.body = req.body.body;

    post.save().then((updatedPost) => {
      console.log(updatedPost);
      res.redirect("/admin/posts");
    });
  });
});

router.delete("/:id", (req, res) => {
  post.deleteOne({ _id: req.params.id }).then((result) => {
    res.redirect("/admin/posts");
  });
});

module.exports = router;
