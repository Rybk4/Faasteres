const bcrypt = require('bcryptjs');
const User = require('../models/user');

async function register(req, res) {
  const { email, password } = req.body;

  let da = false;

  if (!email || !password) {
    return res.status(400).send('Введите email и пароль');
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res
      .status(400)
      .send('Пользователь с таким email уже зарегестрирован');
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  const user = new User({
    email,
    password: hashedPassword,
  });

  try {
    await user.save();
    req.session.isAuthenticated = true;
    req.session.user = {
      _id: user._id,
      email: user.email,
      role: user.role,
    };
    res.redirect('/dashboard');
  } catch (err) {
    res.status(500);
    console.log('Ошибка при сохранении пользователя в бд');
  }
}

module.exports = {
  register,
};
