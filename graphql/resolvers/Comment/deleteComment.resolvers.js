const db = require('../../../models');

const resolvers = {
    Mutation: {
        deleteComment: async(_, { id }) => {
            const comment = await db.Comment.findOne({
                where: {
                    id,
                }
            });

            if(comment){
                await comment.destory();
                return {
                    ok: true,
                    error: null,
                };
            } else {
                return{
                    ok: false,
                    error: "Could not delete comment",
                };
            }
        }
    }
};

module.exports = resolvers;