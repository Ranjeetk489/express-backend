'use strict';
const {faker} = require('@faker-js/faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const dummyData = Array(100).fill(0).map((_, i) => ({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        fullName: `${faker.person.firstName()} ${faker.person.lastName()}`,
        email: faker.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date()

    }))
    await queryInterface.bulkInsert('user', dummyData, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('user', null, {})
  }
};
