const db = require('../../../models');

const resolvers = {
    Mutation: {
        updateUser: async(_, {
            firstName,
            lastName,
            email,
            password,
            phoneNumber,
            mbtiType,
            nickName,
        }) => {
            const user = await db.User.findOne({
                where: {
                    id: user.id
                }
            });
            if(user) {
                const updatedUser = user.update({
                    firstName,
                    lastName,
                    email,
                    password,
                    phoneNumber,
                    mbtiType,
                    nickName,
                })
                .then(result => {
                    res.json(result);
                    return {
                        ok: true,
                        user: updatedUser,
                        error: null,
                    };
                })
                .catch(err => {
                    console.log(err);
                    return {
                        ok: false,
                        user,
                        error: "Could not update user",
                    };
                })
            } else {
                return{
                    ok: false,
                    user,
                    error: "Could not update user",
                };
            }
        }
    }
};

module.exports = resolvers;