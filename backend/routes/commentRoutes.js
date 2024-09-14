const express = require('express');
const { addComment, getComments } = require('../controller/commentController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/add-comment', authMiddleware, addComment);
router.get('/get-comments', getComments);

module.exports = router;
