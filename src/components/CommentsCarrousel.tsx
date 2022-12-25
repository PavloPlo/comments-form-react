import React from 'react';
import CommentItem from "./CommentItem";


const CommentsCarrousel = (props: any) => {
    let carosselMessages = props.commentItem.map((el: any) => <CommentItem username={el.username}
                                                                           message={el.message}/>)
    return (
        <div>
            {
                carosselMessages
            }
        </div>
    );

}

export default CommentsCarrousel;