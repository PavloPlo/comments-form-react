import React from 'react';
import './App.css';
import CommentsCarrousel from "./components/CommentsCarrousel/CommentsCarrousel";
import Form from "./components/Form/Form";

function App(props: any) {
    return (
        <div className="App">

            <Form addCommentItem={props.state.addCommentItem}
                  newCommentText={props.state.newCommentText}
                  newUserName={props.state.newUserName}
                  updateNewCommentText={props.state.updateNewCommentText}
                  updateNewUserName={props.state.updateNewUserName}
            />


            <CommentsCarrousel commentItem={props.state.commentItem} commentsTotal={props.state.commentsTotal}/>

        </div>
    );
}

export default App;
