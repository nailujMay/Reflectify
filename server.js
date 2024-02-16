const express = require("express");
const app = express();
const mongoose = require("mongoose");
const articleRouter = require("./routes/articles");

mongoose.connect("mongodb://localhost/blog");

app.set("view engine", "ejs");

// lets all app know where to access/use all the routes
app.use("/articles", articleRouter);

// main page
app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test article",
      createdAt: Date.now(),
      description: "this is an article description",
    },
    {
      title: "Test article 2",
      createdAt: Date.now(),
      description: "this is article2 description",
    },
  ];

  // need to display all the articles
  res.render("articles\\index", { articles: articles });
});

app.listen(5000);
