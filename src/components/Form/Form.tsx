import React from "react";


const Form = (props: any) => {
    let newName: any = React.useRef();
    let newMessage: any = React.useRef();

    let onChangeText = () => {
        let text: string = newMessage.current.value
        props.updateNewCommentText(text)
    }
    let onChangeName = () => {
        let userN: any = newName.current.value;
        props.updateNewUserName(userN)
    }

    return (<div className="form">

        <input className={'username'}
               value={props.newUserName}
               ref={newName}
               onChange={onChangeName}/>

        <textarea className={'message'}
                  value={props.newCommentText}
                  ref={newMessage}
                  onChange={onChangeText}
        />

        <button disabled={!props.newUserName||!props.newCommentText} onClick={props.addCommentItem}>Apply</button>
    </div>)
}
export default Form;