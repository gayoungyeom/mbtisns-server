const db = require('../../../models');

const resolvers = {
    Mutation: {
        editPost: async(_, {
            boardType,
            title,
            contentText,
        }) => {
            const post = await db.Post.findOne({
                where: {
                    id: post.id
                }
            });

            if(post) {
                const edited = post.update({
                    boardType,
                    title,
                    contentText,
                })
                .then(result => {
                    res.json(result);
                    return {
                        ok: true,
                        error: null
                    };
                })
                .catch(err => {
                    console.log(err);
                    return {
                        ok: false,
                        error: "Could not update post",
                    };
                })
            } else {
                return {
                    ok: false,
                    error: "Could not update post",
                };
            }
        }
    }
};

module.exports = resolvers;