module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define(
        'Message', {
            createdAt: {
                type: DataTypes.DATE,
            },
            message: {
                type: DataTypes.TEXT,
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        }, {
            timestamps: false,
            underscored: false,
            freezeTableName: true,
            tableName: 'Message',
        }
    );

    return Message;
};