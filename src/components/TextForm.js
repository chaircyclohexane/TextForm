import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        //console.log(newText);
        document.getElementById("myBox").value = newText;
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        //console.log(newText);
        document.getElementById("myBox").value = newText;
    }

    const handleonChange = (event) => {
       // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter Text here");
  return (
<div>
    <div className="container">
        <div className="mb-3">
            <h1> {props.heading}</h1>
            <textarea className="form-control" id="myBox" rows="8" placeholder={text} onChange={handleonChange}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to Upper Case</button>
        <button className="btn btn-primary" onClick={handleLowClick}> Convert to Lower Case</button>
    </div>
    <div className="container my-3">
        <h1> Text Summary </h1>
        <p> {text.trim().split(/\s+/).length} Words {text.length} Characters</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
</div>
  )
}
