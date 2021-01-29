module.exports = (sequelize, type) => {
  return sequelize.define("record", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    concept: type.STRING,
    amount: type.INTEGER,
    date: type.DATEONLY,
    type: type.STRING,
  });
};
