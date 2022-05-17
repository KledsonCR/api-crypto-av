'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('coins', 
    [
      {			
            wallet_id: 1,	
            coin: 'BTC',
            fullname: 'Bitcoin',
            amount: 0.10003,
            createdAt: new Date(),
            updatedAt: new Date()
            },
            {
            wallet_id: 2,	
            coin: 'ETH',
            fullname: 'Etherium',
            amount: 5.52223,
            createdAt: new Date(),
            updatedAt: new Date()
            },
            {
            wallet_id: 3,	
            coin: 'BRL',
            fullname: 'Real',
            amount: 112.0,
            createdAt: new Date(),
            updatedAt: new Date()
            },
            {
            wallet_id: 4,	
            coin: 'ETH',
            fullname: 'Etherium',
            amount: 5.53,
            createdAt: new Date(),
            updatedAt: new Date()
            },
            {
            wallet_id: 4,	
            coin: 'BTC',
            fullname: 'Bitcoin',
            amount: 0.122221333,
            createdAt: new Date(),
            updatedAt: new Date()
            
			   
      }
    ],     
 {});
},

  async down (queryInterface, Sequelize) {   
    await queryInterface.bulkDelete('coins', null, {});
     
  }
};
