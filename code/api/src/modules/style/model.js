module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    name: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    },
    gender: {
      type: DataTypes.INTEGER
    },
    style: {
      type: DataTypes.STRING
    }
  })
}