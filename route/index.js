
const {submitForm} = require("../controller/index.js")
const route = require("express").Router();


route.post("/contact-form-submit" ,  submitForm)




module.exports = route