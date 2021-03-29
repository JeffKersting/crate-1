module.exports = function(sequelize, DataTypes) {
  return sequelize.define('styles', {
    name: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    },
    gender: {
      type: DataTypes.INTEGER
    },
    type: {
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  })
}