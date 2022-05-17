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

    name: {
      type: DataTypes.STRING,
      validate: {
         funcaoValidar: function(dado) {
           if (dado.length < 7) throw new Error('Nome deve ter pelo menos 7 caracteres')
         }
       }
    },
    cpf: { 
    type:DataTypes.STRING,
    unique: true,
    validate: {
      is: {
        args: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
        msg: 'O cpf não possui um formato válido'
          },
       }
    },
    birthdate: {
      type: DataTypes.DATEONLY,
      validate: {
            isBefore: {
              args: '2004-01-01',
              msg: 'Deve ter pelo menos 18 anos'
            }
          }
        }
      }, {
        sequelize,
        modelName: 'wallet',
      });
      return wallet;
    };