const express=require("express")

const router= express.Router();

const Contracts=require("../models/contracts.model")

router.post("", async function (req, res) {
    try {
      const data = await Contracts.create(req.body);
      return res.status(201).send(data);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  router.get("", async function (req, res) {
    try {
      const data= await Contracts.find().lean().exec();
      return res.status(201).send(data);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  module.exports = router;
  