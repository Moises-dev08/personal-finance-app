const Sequelize = require("sequelize");
const recordsModel = require("../models/records");

const sequelize = new Sequelize("P9C0718e7d", "P9C0718e7d", "IUWOnRajo6", {
  host: "remotemysql.com",
  dialect: "mysql",
  port: 3306,
  dialectOptions: {
    multipleStatements: true,
  },
});

const Record = recordsModel(sequelize, Sequelize);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("all set");
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = {
  Record,
  sequelize,
};
