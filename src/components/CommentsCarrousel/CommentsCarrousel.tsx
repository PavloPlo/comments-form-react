import React from 'react';
import CommentItem from "../CommentItem/CommentItem";


const CommentsCarrousel = (props: any) => {
    let carosselElements = props.commentItem.filter((p:any)=>(p.isShown))
        carosselElements = carosselElements.map(
        (el: any) => <CommentItem username={el.username} id={Date()} message={el.message}/>)
    return (
        <div className='comm-carousel'>
            {carosselElements}
            <div className="total"><h3>{props.commentsTotal}</h3></div>
        </div>

    );

}

export default CommentsCarrousel;