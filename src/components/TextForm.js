
import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText]=useState("");
    const upper=()=>{
        console.log("Upper Casing Done");
        let newText= text.toUpperCase();
        setText(newText);   
        props.showAlert("Converted to Upper Case","primary")
        
    }
    const lower=()=>{
        console.log("Lower Casing Done");
        let newt= text.toLowerCase();
        setText(newt);
        props.showAlert("Converted to Lower Case","primary")
    }
    const handleOnChange=(event)=>{
        console.log("on Change");
        setText(event.target.value);
    }
    const clr=()=>{
      setText("");
      props.showAlert("The text has been deleted successfully","danger")
    }
  const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}
  const spaces=()=>{
    let newText=text.split(/[  ]+/);
    setText(newText.join(''));
    props.showAlert("Extra Spaces Removed","primary")
  }
     
  return (
    <>
    <div className="form-group">
        <h1 style={{color:"#aa0ec2"}}>{props.head}</h1>
        
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
    </div>
  
  <button className='btn btn-primary 'onClick={upper}> CONVERT TO UPPERCASE</button>
  <button className="btn btn-primary mx-3"onClick={lower}> CONVERT TO LOWERCASE</button>
  <button className="btn btn-primary mx-auto"onClick={clr}> Clear Field</button>
  <button className="btn btn-primary mx-3"onClick={speak}> Pronounce</button>
  <button className="btn btn-primary mx-auto"onClick={spaces}> Remove Extra Spaces</button>
  </div>

    <div className="container my-3" >
    <h1 style={{color:"#aa0ec2"}}>Text Counting</h1>
     <h3 className='my-3 mx-5' style={{color:"red"}}>The text has following attributes:</h3>
    <div className='my-3 mx-5'style={{color:"#8c1818"}}>
      <h5>
    <li>{text.length && text.length -text.split(" ").length+1-text.split(/\r\n|\r|\n/).length+1} characters</li>
    <li>{text.length && text.split(/[   ]+/).length} words</li>
    <li>{text.length && text.split(/\r\n|\r|\n/).length} line(s)</li>
    <li>Vowels: {text.split(/[aeiou]/gi).length-1}</li></h5></div>

    </div>
    <div className="container my-3">
        <h1 style={{color:"#aa0ec2"}}> Preview </h1>
        <p>{text.length>0?text:"Enter something to Preview"}</p>
    </div>




  </>
  
  
  
  )
}
