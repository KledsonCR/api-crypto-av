'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('wallets', 
    [
      {				
			name: 'Sandra Gomes',
			cpf: '058.606.543-56',
			birthdate: '1999-05-06',
			createdAt: new Date(),
			updatedAt: new Date()
			},
			{
			name: 'Paula Morais',
			cpf: '059.607.544-57',
			birthdate: '2003-01-10',
			createdAt: new Date(),
			updatedAt: new Date()
			},
			{
			name: 'Sergio Lopes',
			cpf: '060.608.545-58',
			birthdate: '2000-02-11',
			createdAt: new Date(),
			updatedAt: new Date()
			},
			{
			name: 'Felipe Cardoso',
			cpf: '061.609.546-59',
			birthdate: '2001-05-13',
			createdAt: new Date(),
			updatedAt: new Date()
			   
      }
    ],     
 {});
},

  async down (queryInterface, Sequelize) {   
    await queryInterface.bulkDelete('wallets', null, {});
     
  }
};