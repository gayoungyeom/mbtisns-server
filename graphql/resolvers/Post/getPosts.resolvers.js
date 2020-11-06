const db = require('../../../models');

const resolvers = {
    Query: {
        getPosts: async(_, args) => {
            const posts = await db.Post.findAll();
            if(posts){
                return{
                    ok: true,
                    posts,
                    error: null,
                };
            } else{
                return{
                    ok: false,
                    posts: [],
                    error: "Could not find posts",
                };
            }
        }
    }
};

module.exports = resolvers;