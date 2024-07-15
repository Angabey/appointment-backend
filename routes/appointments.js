const express = require('express')
const router = express.Router();
const {appointments} = require("../models")

 router.get("/", async(req,res) =>{
  const listofappointment =await appointments.findAll();
  res.json(listofappointment);
 });

 router.post("/" , async(req,res) => {
   const post = req.body;
   await appointments.create(post);
   res.json(post);
   });




module.exports = router