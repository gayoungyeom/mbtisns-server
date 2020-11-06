const db = require('../../../models');

const resolvers = {
    Query: {
        getComment: async(_, { id }) => {
            const comment = await db.Comment.findOne({
                where: {
                    id,
                }
            });

            if(comment){
                return{
                    ok: true,
                    comment,
                    error: null,
                };
            } else{
                return{

                };
            }
        }
    }
};

module.exports = resolvers;