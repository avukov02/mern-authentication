const router = require("express").Router();
const Customer = require("../models/customerModel");
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
  try {
    const { name } = req.body;

    const newCostumer = new Customer({ name });

    const savedCustomer = await newCostumer.save();

    res.json(savedCustomer);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;
