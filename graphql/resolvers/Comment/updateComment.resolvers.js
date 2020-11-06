const db = require('../../../models');

const resolvers = {
    Mutation: {
      updateComment: async(_, { text }) => {
          const comment = await db.Comment.findOne({
              where: {
                  id: comment.id,
              }
          });

          if(comment){
              const updated = comment.update({
                  text,
              })
              .then(result => {
                  res.json(result);
                  return{
                      ok: true,
                      error: null,
                  };
              })
              .catch(err => {
                  console.log(err);
                  return{
                    ok: false,
                    error: "Could not update comment",
                  };
              })
          } else{
              return{
                  ok: false,
                  error: "Could not update comment",
              };
          }
      }
    }
};

module.exports = resolvers;