function App(){
    const title = 'Blog Post';
    const body = 'This is my blog post';
    const comments = [
        {id: 1, text: 'Comment 1'},
        {id: 2, text: 'Comment 2'}
    ];

    const loading = false;
    const showComments = true;

    const commentBlock = (<div className = 'comments'>            
    <h3>Comments ({comments.length})</h3>
    <ul>
        {comments.map((comment,index) => (
            <li key={index}>{comment.text}</li>
        ))}
    </ul>
</div>)

    if (loading) return <h1>Loading...</h1>


    //return (<h1>Hello from the app component</h1>)
    return (
        <div className='container'>
            <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>
            {showComments ? commentBlock : null}
            {showComments && commentBlock}         
        </div>
    );
}

export default App  //so we can import this into index.js