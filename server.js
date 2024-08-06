const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const path = require('path');

const app = express();

// шлях до папки, в якій містяться статичні файли
app.use(express.static(path.join(__dirname, 'pages')));
app.use(express.static(path.join(__dirname, 'pngs')));
app.use('/src', express.static(path.join(__dirname, 'src')));

// Отримання головної сторінки
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'sign-in-up.html'));
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose.connect('mongodb://localhost:27017/', {
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Перевірка, чи користувач з такою електронною адресою вже існує
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const errorMessageContainer = document.getElementById("registrationError");
      errorMessageContainer.textContent = "User with this email already exists";

      return res.status(400).json({ message: 'User with this email already exists' });
    }

    console.log("Password:", password);

    // Хешування паролю перед збереженням у базі даних
    const hashedPassword = await bcrypt.hash(password, 10);

    // Створення нового користувача з хешованим паролем
    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });
    await newUser.save();

    // Перенаправлення після успішного входу
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
    res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Пошук користувача за електронною адресою
    const user = await User.findOne({ email });
    if (!user) {
      const errorMessageContainer = document.getElementById("loginError");
      errorMessageContainer.textContent = "Invalid email or password";
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Перевірка паролю
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      const errorMessageContainer = document.getElementById("loginError");
      errorMessageContainer.textContent = "Invalid email or password";
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    res.sendFile(path.join(__dirname, 'src', 'index.html'));
    //res.status(200).json({ message: 'Login successful'});
   } catch (error) {
    res.status(500).json({ message: error.message });
   }
});