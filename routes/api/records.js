const express = require("express");
const router = express.Router();
const { Record, sequelize } = require("../../startup/db");
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
  const record = await Record.findAll();
  res.json(record);
});

router.get("/limit10", async (req, res) => {
  const record = await Record.findAll({
    attributes: {
      include: [
        [
          sequelize.fn("date_format", sequelize.col("date"), "%m-%d-%Y"),
          "date",
        ],
      ],
    },
    limit: 10,
    order: [["id", "DESC"]],
  });
  res.json(record);
});

router.get("/incometype", async (req, res) => {
  const record = await Record.findAll({
    attributes: {
      include: [
        [
          sequelize.fn("date_format", sequelize.col("date"), "%m-%d-%Y"),
          "date",
        ],
      ],
    },
    where: {
      type: "income",
    },
  });
  res.json(record);
});

router.get("/outcometype", async (req, res) => {
  const record = await Record.findAll({
    attributes: {
      include: [
        [
          sequelize.fn("date_format", sequelize.col("date"), "%m-%d-%Y"),
          "date",
        ],
      ],
    },

    where: {
      type: "outcome",
    },
  });
  res.json(record);
});

router.get("/outcome", async (req, res) => {
  const record = await Record.sum("amount", {
    where: { type: { [Op.like]: "outcome%" } },
  });
  res.json(record);
});

router.get("/income", async (req, res) => {
  const record = await Record.sum("amount", {
    where: {
      type: { [Op.like]: "income%" },
    },
  });
  res.json(record);
});

router.post("/", async (req, res) => {
  const record = await Record.create(req.body);
  res.json(record);
});

router.put("/:recordId", async (req, res) => {
  await Record.update(req.body, {
    where: { id: req.params.recordId },
  });
  res.json({ success: "update" });
});

router.delete("/:recordId", async (req, res) => {
  await Record.destroy({
    where: { id: req.params.recordId },
  });
  res.json({ success: "record deleted" });
});

module.exports = router;
