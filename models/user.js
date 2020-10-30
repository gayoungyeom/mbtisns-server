module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User', {
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            phoneNumber: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            mbtiType: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            isVerified: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            profileImg: {
                type: DataTypes.JSON,
            },
            nickName: {
                type: DataTypes.STRING,
            },
            gender: {
                type: DataTypes.BOOLEAN,
            }
        }, {
            timestamps: true,
            underscored: false,
            freezeTableName: true,
            tableName: 'User',
        }
    );

    return User;
};