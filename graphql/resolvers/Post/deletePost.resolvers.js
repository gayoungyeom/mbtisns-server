const db = require('../../../models');

const resolvers = {
    Mutation: {
        deletePost: async(_, args) => {
            const post = await db.Post.findOne({
                where: {
                    id: args.id
                }
            });

            if(post) {
                await post.destroy();
                return {
                    ok: true,
                    error: null,
                };
            } else {
                return {
                    ok: false,
                    error: "Could not delete post",
                };
            }
        }
    }
};

module.exports = resolvers;