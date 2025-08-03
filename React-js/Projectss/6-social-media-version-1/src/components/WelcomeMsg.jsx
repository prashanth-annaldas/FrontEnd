function WelcomeMsg({ onGetPostsClicked }){
    return <center className="welcomeMsg">
                <h1>There are no posts</h1>
                <button type="button" className="btn btn-primary" onClick={onGetPostsClicked}>Fetch posts from server</button>
            </center>;
}

export default WelcomeMsg;