import React from "react";

const Form = (props:any) => {
    return (<div className="form">
        <input type="text" className={'username'}/>
        <textarea className={'message'}/>
        <button onClick={() => props.addItem}>Apply</button>
    </div>)
}
export default Form;