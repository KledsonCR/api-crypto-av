'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wallet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      wallet.hasMany(models.coin, {
        foreignKey: 'wallet_id'
      })
      wallet.hasMany(models.transaction,  {
        foreignKey: 'wallet_id'
      })
    }
  }
  wallet.init({
    address: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    
    name: DataTypes.STRING,
    cpf: DataTypes.STRING,
    birthdate: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'wallet',
  });
  return wallet;
};