const PostComments = ({comments}) => {
    return (
        <div className="mt-5">
            <h1 className="font-bold text-lg">Post Comments</h1>
            <div className="mt-5">
                {
                    comments.map((comment) =>
                        <p className="pb-5" key={comment.id}><span className="font-bold">{comment.name}</span><span className="italic">({comment.email})</span> : {comment.body}</p>)
                }
            </div>
        </div>
    );
};

export default PostComments;