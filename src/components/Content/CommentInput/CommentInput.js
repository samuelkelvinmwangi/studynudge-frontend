import './CommentInput.css';

function CommentInput() {
    return (
        <div className="comment-input-container">
            <input className="comment-input" type="text" placeholder="Add a comment..." />
            <button className="comment-button">Comment</button>
        </div>
    );
}

export default CommentInput;