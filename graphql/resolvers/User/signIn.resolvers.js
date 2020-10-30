const db = require('../../../models');
// import { createJWT } from "../../../utils/createJWT";

const resolvers = {
    Mutation: {
        signin: async(_, {
            email,
            password
        }) => {
            const user = await db.User.findOne({
                where: {
                    email,
                }
            });

            //존재하지 않는 유저
            if(!user){
                return{
                    ok: false,
                    token: null,
                    error: "Could not find a user with this email",
                    user: null
                };
            }

            //pw 검증
            const validPassword = await db.User.comparePassword(
                password,
                user.password
            );
            if(!validPassword){
                return{
                    ok: false,
                    token: null,
                    error: "That password is wrong",
                    user: null
                };
            }

            // const token = createJWT(user.id);
            return {
                ok: true,
                token: "token",
                error: null,
                user,
            };
        }
    }
}

module.exports = resolvers;
