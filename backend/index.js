const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const commentRoutes = require('./routes/commentRoutes');

const app = express();
require('dotenv').config();

// Middleware
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/comments', commentRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});