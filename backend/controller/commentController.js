const db = require('../db/dbConfig');

exports.addComment = async (req, res) => {
    const { comment } = req.body;
    const userId = req.user.id;
     
    // Validate that the comment is not empty or only whitespace
    if (!comment || comment.trim() === "") {
        return res.status(400).json({ message: 'Comment cannot be empty' });
    }
    try {
        await db.query('INSERT INTO comments (user_id, comment) VALUES (?, ?)', [userId, comment]);
        res.status(201).json({ message: 'Comment added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getComments = async (req, res) => {
    try {
        // Joining the comments table with the users table to get the username
        const [comments] = await db.query(`
            SELECT comments.id, comments.comment, users.username 
            FROM comments 
            JOIN users ON comments.user_id = users.id
        `);

        res.status(200).json(comments);
    } catch (error) {
        console.error('Error fetching comments:', error);
        res.status(500).json({ message: 'Server error' });
    }
};


// exports.getComments = async (req, res) => {
//     try {
//         const [comments] = await db.query('SELECT * FROM comments');
//         res.status(200).json(comments);
//     } catch (error) {
//         res.status(500).json({ message: 'Server error' });
//     }
// };
