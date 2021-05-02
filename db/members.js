const Sequelize = require('sequelize');
const db = require('./db');

const Member = db.define('member', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dob: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false,
      }
})

Member.beforeCreate((member) => {
    const nameFirst = Member.firstName;
    const nameLast = Member.lastName;
  
    member.firstName = nameFirst[0].toUpperCase() + nameFirst.slice(1);
    member.lastName = nameLast[0].toUpperCase() + nameLast.slice(1);
  });

module.exports = Member;

