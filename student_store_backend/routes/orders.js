const express = require("express")
const Order = require("../models/order")
const router = express.Router()
const { requireAuthenticatedUser } = require("../middleware/security")

router.get("/", requireAuthenticatedUser, async (req, res, next) => {
  try {
    const listOrdersForUser = await Order.listOrdersForUser(req.body)
    return res.status(200).json({ listOrdersForUser })
  } catch (err) {
    next(err)
  }
})

router.post("/", requireAuthenticatedUser, async (req, res, next) => {
  try {
    const createOrder = await Order.create(req.body)
    return res.status(200).json({ createOrder })
  } catch (err) {
    next(err)
  }
})

module.exports = router