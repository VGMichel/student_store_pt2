const express = require("express")
const Store = require("../models/store")
const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    const store = await Store.listProducts(req.body)
    return res.status(200).json({ store })
  } catch (err) {
    next(err)
  }
})

module.exports = router
