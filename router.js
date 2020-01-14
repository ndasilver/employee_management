const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("welcome to the home route")
});

//create employee post
router.post("/employees", (req, res) => {});