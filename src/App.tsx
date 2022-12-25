import React from 'react';
import './App.css';
import CommentsCarrousel from "./components/CommentsCarrousel";
import Form from "./components/Form";

function App(props:any) {
  return (
    <div className="App">
    <Form addItem={props.state.addItem}/>
      <CommentsCarrousel commentItem={props.state.commentItem}/>
    </div>
  );
}

export default App;
