// const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:");

// Create Schema
// const user = sequelize.define('User', {
//   // Model attributes are defined here
//   email: {
//       type: DataTypes.STRING,
//       required: true
//   },
//   password: {
//       type: DataTypes.STRING,
//       required: true
//   }
// });
// module.exports = user.sequelize.model('User', user);


module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User', {
      
      email: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      }
    },
  );
  return User;
};