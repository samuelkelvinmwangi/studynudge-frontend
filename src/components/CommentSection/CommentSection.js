import './CommentSection.css';

function CommentSection({ comments }) {
    return (
        <>
            {
                comments.map((comment) => (
                    <div key={comment.id} className="comments-container">
                        <h5 className='username'>{ comment.user.username }</h5>
                        <p className='comment-text'>{ comment.comment }</p>
                    </div>
                ))
            }
        </>
    );
}

export default CommentSection;