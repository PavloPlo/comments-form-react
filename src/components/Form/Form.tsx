import React from "react";

const Form = (props: any) => {
    let newName: any = React.useRef();
    let newMessage: any = React.useRef();

    let onClickChangeText = () => {
        let text: string = newMessage.current.value;
        props.updateNewCommentText(text)
        console.log(text)
    }
    let onClickChangeName = () => {
        let usserN: string = newName.current.value;
        props.updateNewCommentText(usserN)
        console.log(usserN)
    }

    return (<div className="form">
        <input className={'username'} value={props.newUserName} ref={newName} onChange={onClickChangeName}/>
        <textarea className={'message'} value={props.newCommentText} ref={newMessage} onChange={onClickChangeText}/>
        <button onClick={() => props.addCommentItem()}>Apply</button>
    </div>)
}
export default Form;