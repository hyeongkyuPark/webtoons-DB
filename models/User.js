const monent = require('moment');

module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define('User', {
        userNo: {
            field: "user_no",
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            field: "user_no",
            type: DataTypes.STRING,
            unique: true,
        },
        userPw: {
            field: "user_pw",
            type: DataTypes.STRING,
        },
        userName: {
            field: "user_name",
            type: DataTypes.STRING,
        },
        userBirth: {
            field: "user_birth",
            type: DataTypes.DATE,
        },
        userEmail: {
            field: "user_email",
            type: DataTypes.STRING,
        }
    });

    User.prototype.dateFormat = (date) => moment(date).format('YYYY-MM-DD');

    return User;
}