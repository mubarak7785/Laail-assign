const express=require("express")

const router= express.Router();

const Users=require("../models/users.models")

router.post("", async function (req, res) {
    try {
      const data = await Users.create(req.body);
      return res.status(201).send(data);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  router.get("", async function (req, res) {
    try {
      const data= await Users.find().lean().exec();
      return res.status(201).send(data);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  router.patch('/:id', async (req, res) => {
    try {
      const user = await Users.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
  
      return res.send(user)
    } catch (err) {
      return res.status(500).send(err.message)
    }
  })
  
  router.delete('/:id', async (req, res) => {
    try {
      const user = await Users.findByIdAndDelete(req.params.id).lean().exec()
  
      return res.send(user)
    } catch (err) {
      return res.status(500).send(err.message)
    }
  })
  
  module.exports = router;
  