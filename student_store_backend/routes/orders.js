const express = require("express")
const Order = require("../models/order")
const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    const listOrdersForUser = await Order.listOrdersForUser(req.body)
    return res.status(200).json({ listOrdersForUser })
  } catch (err) {
    next(err)
  }
})

router.post("/", async (req, res, next) => {
  try {
    const createOrder = await Order.login(req.body)
    return res.status(200).json({ createOrder })
  } catch (err) {
    next(err)
  }
})

module.exports = router