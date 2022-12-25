import React from 'react';
import CommentItem from "../CommentItem/CommentItem";


const CommentsCarrousel = (props: any) => {
    let carosselElements = props.commentItem.filter((p:any)=>(p.isShown))
    debugger
        carosselElements = carosselElements.map(
        (el: any) => <CommentItem username={el.username} id={Date()} message={el.message}/>)
    return (
        <div className='comm-carousel'>
            {carosselElements}
        </div>
    );

}

export default CommentsCarrousel;