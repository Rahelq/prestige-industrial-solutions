// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';

// const CommentSection = () => {
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchComments();
//   }, []);

//   const fetchComments = async () => {
//     try {
//       const response = await axios.get('http://localhost:5500/api/comments/get-comments');  // Adjust the endpoint accordingly
//       setComments(response.data);
//     } catch (error) {
//       console.error('Error fetching comments:', error);
//     }
//   };

//   const submitComment = async () => {
//     const token = localStorage.getItem('token');  // Check for login token
//     if (!token) {
//       navigate('/login', { state: { from: '/comments' } });
//       return;
//     }

//     try {
//       await axios.post(
//         'http://localhost:5500/api/comments/add-comment',
//         { comment: newComment },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setNewComment('');  // Clear the comment input
//       fetchComments();  // Refresh comments after submission
//     } catch (error) {
//       console.error('Error submitting comment:', error);
//     }
//   };

//   return (
//     <CommentSectionContainer>
//       <h2>Leave a Comment</h2>
//       <CommentForm>
//         <textarea
//           placeholder="Write your comment..."
//           value={newComment}
//           onChange={(e) => setNewComment(e.target.value)}
//         />
//         <button onClick={submitComment}>Submit</button>
//       </CommentForm>
//       <CommentList>
//   {comments.map((comment) => (
//     <CommentItem key={comment.id}>
//       <p><strong>{comment.username}</strong>: {comment.comment}</p>  {/* Displaying both username and comment */}
//     </CommentItem>
//   ))}
// </CommentList>
//       {comments.length > 3 && (
//         <MoreCommentsContainer>
//           <h4>More Comments</h4>
//           <MoreCommentList>
//             {comments.slice(3).map((comment) => (
//               <CommentItem key={comment.id}>
//                 <p><strong>{comment.username}</strong>: {comment.text}</p>
//               </CommentItem>
//             ))}
//           </MoreCommentList>
//         </MoreCommentsContainer>
//       )}
//     </CommentSectionContainer>
//   );
// };

// // Styled Components
// const CommentSectionContainer = styled.div`
//   padding: 20px;
//   max-width: 800px;
//   margin: 0 auto;
//   background: #f7f7f7;
// `;

// const CommentForm = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 20px;

//   textarea {
//     padding: 10px;
//     width: 100%;
//     min-height: 100px;
//     border-radius: 5px;
//     border: 1px solid #ccc;
//     margin-bottom: 10px;
//   }

//   button {
//     padding: 10px;
//     background-color: #4caf50;
//     color: white;
//     border: none;
//     cursor: pointer;
//     border-radius: 5px;
//   }
// `;

// const CommentList = styled.ul`
//   list-style-type: none;
//   padding: 0;
// `;

// const CommentItem = styled.li`
//   background: #fff;
//   padding: 10px;
//   border-radius: 5px;
//   margin-bottom: 10px;
//   border: 1px solid #ccc;
// `;

// // More Comments Section
// const MoreCommentsContainer = styled.div`
//   margin-top: 20px;
// `;

// const MoreCommentList = styled.div`
//   max-height: 150px;  // Limit height for scrolling
//   overflow-y: auto;   // Enable vertical scrolling for extra comments
// `;










import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [visibleComments, setVisibleComments] = useState(3);
  const [message, setMessage] = useState('');  // For success/error messages
  const [isError, setIsError] = useState(false); // Track if the message is an error
  const navigate = useNavigate();
  const moreCommentsRef = useRef(null);  // Ref to track where new comments are shown

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get('http://localhost:5500/api/comments/get-comments');
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const submitComment = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      // navigate('/login', { state: { from: '/comments' } });
      navigate('/login', { state: { from: '/#comment', message: 'Please log in to post a comment.' } });
      return;
    }

    // Prevent submitting empty comment
    if (newComment.trim() === '') {
      setMessage('Comment cannot be empty.');
      setIsError(true);
      return;
    }

    try {
      await axios.post(
        'http://localhost:5500/api/comments/add-comment',
        { comment: newComment },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setNewComment('');
      setMessage('Comment submitted successfully!');
      setIsError(false);  // Success, not an error
      fetchComments();  // Refresh comments after submission
    } catch (error) {
      console.error('Error submitting comment:', error);
      setMessage('Failed to submit the comment.');
      setIsError(true);  // It's an error
    }
  };

  const handleShowMoreComments = () => {
    setVisibleComments((prevCount) => prevCount + 3);

    // Scroll to the new comments section after showing more
    setTimeout(() => {
      if (moreCommentsRef.current) {
        moreCommentsRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <CommentSectionContainer id='comment-section'>
      <h2>Leave a Comment</h2>
      <CommentForm>
        <textarea
          placeholder="Write your comment..."
          value={newComment}
          onChange={(e) => {
            setNewComment(e.target.value);
            setMessage('');  // Clear message when typing
          }}
        />
        <button onClick={submitComment}>Submit</button>
        {message && <Message isError={isError}>{message}</Message>}  {/* Display success or error message */}
      </CommentForm>

      <CommentList>
        {comments.slice(0, visibleComments).map((comment, index) => (
          <CommentItem key={comment.id}>
            <p><strong>{comment.username}</strong>: {comment.comment}</p>
          </CommentItem>
        ))}
        {/* Reference point for scrolling to new comments */}
        <div ref={moreCommentsRef} />
      </CommentList>

      {visibleComments < comments.length && (
        <ShowMoreButton onClick={handleShowMoreComments}>Show More Comments</ShowMoreButton>
      )}
    </CommentSectionContainer>
  );
};

// Styled Components
const CommentSectionContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background: #f7f7f7;
`;

const CommentForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  textarea {
    padding: 10px;
    width: 100%;
    min-height: 100px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
  }

  button {
    padding: 10px;
    background-color: #C19153;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
`;

const CommentList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CommentItem = styled.li`
  background: #fff;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
`;

// Show More Button
const ShowMoreButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  background-color: #C19153;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  display: block;
  width: 100%;
`;

// Message Component for Success/Error feedback
const Message = styled.p`
  margin-top: 10px;
  color: ${props => (props.isError ? 'red' : 'green')};  // Green for success, Red for error
`;

export default CommentSection;
