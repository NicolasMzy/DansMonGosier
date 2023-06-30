const jwt = require('jsonwebtoken');

exports.verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).json({error: 'JWT token is missing'});
    return;
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const accountId = decodedToken.id;
    req.headers['X-Forwarded-AccountID'] = accountId;

    res.status(202).json({'message': 'Access granted'});
  } catch (error) {
    console.error('Error verifying JWT token:', error);
    res.status(401).json({error: 'Error verifying JWT token'});
  }
};
