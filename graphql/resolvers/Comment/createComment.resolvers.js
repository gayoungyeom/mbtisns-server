const db = require('../../../models');

const resolvers = {
    Mutation: {
        createComment: async(_, {
            text,
       }) => {
           const newComment = await db.Comment.create({
               text,
           });

           if(newComment){
               return{
                   ok: true,
                   comment,
                   error: null,
               };
           } else{
               return{
                  ok: false,
                  comment,
                  error: "Could not create comment",
               };
           }
       }
    }
};

module.exports = resolvers;