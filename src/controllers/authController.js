const jwt = require('jsonwebtoken');

function login(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: 'Username and password are required.'
    });
  }

  if (
    username !== process.env.AUTH_USERNAME ||
    password !== process.env.AUTH_PASSWORD
  ) {
    return res.status(401).json({
      message: 'Invalid credentials.'
    });
  }

  const token = jwt.sign(
    { username },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  return res.status(200).json({
    message: 'Login successful.',
    token
  });
}

module.exports = {
  login
};