const router = require("express").Router();

const apiRecordsRouter = require("./api/records");

router.use("/records", apiRecordsRouter);

module.exports = router;
