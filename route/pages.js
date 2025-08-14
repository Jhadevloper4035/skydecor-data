const route = require("express").Router();

route.get("/showroom", (req, res) => {
  res.render("showroom-form", { title: "Home page" });
});


route.get("/event", (req, res) => {
  res.render("event-form", { title: "Home page" });
});


route.get("/login", (req, res) => {
  res.render("login", { title: "Home page" });
});


route.get("/thankyou", (req, res) => {
  res.render("thankyou", { title: "Home page" });
});

module.exports = route;
