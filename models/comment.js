module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define(
        'Comment', {
            createdAt: {
                type: DataTypes.DATE,
            },
            updatedAt: {
                type: DataTypes.DATE,
            },
            text: {
                type: DataTypes.TEXT,
                allowNull: false
            },
        }, {
            timestamps: false,
            underscored: false,
            freezeTableName: true,
            tableName: 'Comment',
        }
    );

    return Comment;
};