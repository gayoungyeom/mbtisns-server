const db = require('../../../models');

const resolvers = {
    Mutation: {
        addPost: async(_, {
            boardType,
            title,
            contentText,
        }) => {
            const newPost = await db.Post.create({
                boardType,
                title,
                contentText,
                like: 0,
            });
            if(newPost){
                return{
                    ok: true,
                    post: newPost,
                    error: null
                };
            } else{
                return{
                    ok: false,
                    post: null,
                    error: "Could not add post",
                };
            }
        }
    }
};

module.exports = resolvers;