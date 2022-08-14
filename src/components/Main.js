import React from "react";
import { useState } from "react"; 

export default function Main(props) {

    const[text,setText] = useState("");
    



    const toUpper=()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","primary")

    }

    const toLower=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","primary")

    }

    const remove = () =>{
        setText(text.replace(/\s+/g, ' ').trim());
        props.showAlert("Removed extra spaces","primary")
    }

    const handleOnChange=(event)=>{
        
        setText(event.target.value);

    }

    let text2 = text.trim();

  return (
    <>
    
      <div className="form-group container my-4">
        <label htmlFor="exampleFormControlTextarea1"><h1>Enter your text</h1></label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          onChange={handleOnChange} 
          value={text}
          style={
            {color: props.mode==='light'?'black':'white',
             backgroundColor: props.mode==='light'?'white':'gray'
            
            }
            
        
          }
        ></textarea>
      

      <button className="btn btn-primary my-2 mx-1" onClick={toUpper}>Convert To Upper Case</button>
      <button className="btn btn-primary my-2 mx-1" onClick={toLower}>Convert To Lower Case</button>
      <button className="btn btn-primary my-2 mx-1" onClick={remove}>Remove Extra Spaces</button>
      </div>

    <div className="container">
        <h3>Preview</h3>
        <p>{text}</p>
        <div>
            Number of words = {text2.split(" ").filter((element)=>{return element.length!==0}).length}
        </div>
        <div>
            Number of characters = {text.length}
        </div>
        <div>
            Average time to read = {text2.split(" ").length*0.005} minutes
        </div>
    </div>

    </>
  );
}
