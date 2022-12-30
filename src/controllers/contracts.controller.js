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

  router.patch('/:id', async (req, res) => {
    try {
      const user = await Contracts.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
  
      return res.send(user)
    } catch (err) {
      return res.status(500).send(err.message)
    }
  })
  
  router.delete('/:id', async (req, res) => {
    try {
      const user = await Contracts.findByIdAndDelete(req.params.id).lean().exec()
  
      return res.send(user)
    } catch (err) {
      return res.status(500).send(err.message)
    }
  })
  
  module.exports = router;
  