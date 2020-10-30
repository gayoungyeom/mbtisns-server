module.exports = (sequelize, DataTypes) => {
    const Chatting = sequelize.define(
        'Chatting', {
            createdAt: {
                type: DataTypes.DATE,
            },
            updatedAt: {
                type: DataTypes.DATE,
            },
        }, {
            timestamps: false,
            underscored: false,
            freezeTableName: true,
            tableName: 'Chatting',
        }
    );

    return Chatting;
};