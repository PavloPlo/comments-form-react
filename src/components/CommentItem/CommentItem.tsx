import React from "react";

const CommentItem =(props:any)=>{
    return <div className="comm-item">
        <h2 className="name">{props.username}</h2>
        <div className="comm-text">
            <p>{props.message}</p>
            <p>{props.id}</p>
        </div>
    </div>
}
export default CommentItem;