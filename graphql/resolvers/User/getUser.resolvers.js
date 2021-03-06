const db = require('../../../models');

const resolvers = {
    Query: {
        getUser: async(_, args) => {
            const user = await db.User.findOne({
                where: {
                    id: args.id,
                }
            });
            
            if(user){
                return{
                    ok: true,
                    user: user,
                    error: null
                };
            } else{
                return{
                    ok: false,
                    user: null,
                    error: 'Could not return the user'
                };
            }
        }
    }
};

module.exports = resolvers;
