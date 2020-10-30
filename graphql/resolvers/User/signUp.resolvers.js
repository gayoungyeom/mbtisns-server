const db = require('../../../models');

const resolvers = {
    Mutation: {
        signup: async(_, {
            firstName,
            lastName,
            email,
            password,
            phoneNumber,
            mbtiType,
            isVerified,
            nickName,
            gender,
        }) => {
            const existingUser = await db.User.findOne({
                where: {
                    email: signup.email
                }
            });
            if(existingUser) {
                return {
                    ok: false,
                    token: null,
                    error: "User already exists, try to sign in."
                };
            }

            const newUser = await db.User.create({
                firstName,
                lastName,
                email,
                password,
                phoneNumber,
                mbtiType,
                isVerified,
                nickName,
                gender,
            }).save();
            return{
                ok: true,
                token: "jwttoken",
                error: null
            };
        }
    }
};

module.exports = resolvers;