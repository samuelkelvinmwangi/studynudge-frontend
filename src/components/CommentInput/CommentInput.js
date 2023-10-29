import './CommentInput.css';
import { apiUrl } from '../../apiUrl';
import { useState } from 'react';

function CommentInput({ id, userId }) {

    const [comment, setComment] = useState('');

    function postComment() {

        const commentData = {
            user_id: userId,
            comment: comment
        };

        fetch(`${apiUrl}/contents/${id}/comment`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(commentData),
        });
    }

    return (
        <div className="comment-input-container">
            <input className="comment-input" type="text" placeholder="Add a comment..." value={comment} onChange={(e) => setComment(e.target.value)}/>
            <button className="comment-button" onClick={postComment}>Comment</button>
        </div>
    );
}

export default CommentInput;