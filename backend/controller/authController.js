const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db/dbConfig');
require('dotenv').config();

// Register User
exports.register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if user already exists
        const [existingUser] = await db.query('SELECT * FROM users WHERE email = ? OR username = ?', [email, username]);
        if (existingUser.length) return res.status(400).json({ message: 'User with this email or username already exists' });
        
        if(password.length < 8){
            return res.status(400).json({msg:"password must be at least 8 characters"})
        }
        // Hash password and insert user into DB
        const hashedPassword = await bcrypt.hash(password, 10);
        await db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword]);

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
        console.error('Error during registration:', error.message);

    }
};

// Login User
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists
        const [user] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        if (!user.length) return res.status(400).json({ message: 'Invalid email or password' });

        // Check if password matches
        const isMatch = await bcrypt.compare(password, user[0].password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

        // Generate JWT token
        const token = jwt.sign({ id: user[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Set token as a cookie
        res.cookie('token', token, { httpOnly: true, secure: true, maxAge: 3600000 }); // Token expires in 1 hour
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Logout User
exports.logout = (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message: 'Logout successful' });
};
