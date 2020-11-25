import jwt from 'jsonwebtoken';

export const createJWT = (userId) => {
  const token = jwt.sign(
    {
      id: userId
    },
    process.env.JWT_TOKEN || ''
  );
  return token;
};