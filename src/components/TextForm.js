//use for import usestate from react and this is use for state.
import React, {useState} from 'react'

export default function  TextForm(props) {

  //Here we are handle event. 
  //Here we also set state.
  const handleUpClick = ()=> {
    console.log("handle Up  Click" + text);
    let newText;
    newText = text.toUpperCase();
    setText(newText);  
    props.showAlert("hii this success message", "success");
    
  }

  const handleUpClickLowerCase = ()=> {
    console.log( text);
    let newText;
    newText = text.toLowerCase();
    setText(newText);
   
  }

  
  const handleOnClick = (event)=> {
    console.log("On Change");
    //Here we also learn how to listen events.
    setText(event.target.value)
    
  }

  const handleUpSpaces = ()=> {   
    let newText;
    newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const handleUpClear = ()=> {
    let newText;
    newText = document.getElementById("mytextbox");
    newText.value = ' ';


     }

  // const handleUpCapitalizedCase = ()=> {
  //   let newText;
  //   newText = text.split.toUpperCase();
  //   setText(newText);

    
  // }
  const textCopy = ()=>{ 
    let newText = document.getElementById("mytextbox");
    newText.select();
    //old way to copy text
    //document.execCommand("copy");
    navigator.clipboard.writeText(newText.value);

  }
 

//This is the way of creating state. Here text is a variable, enter text here is set dafult value of text and we can change this default value by using setText function.   
//Always put usestate inside the component function.otherwise it showing error. 
//You cannot change variable value dirrctly you always need updation function to change the variable value.
//for satate we always use array distructure method to change the value.

const [text, setText] = useState(' ');
      //text= "hii manisha"; // Wrong way to chnage the satete.
      //setText("Change text here");  // Correct way to chnage the satete.
  return (
    <div className="container">
        <h1>{props.heading}</h1>
    <div className="mb-3 float-start w-100"> 
  
  {/* <textarea className={`form-control w-100 float-start mb-3 text-${props.mode ==='light'? 'light'  : 'dark'}`} onChange={handleOnClick}  value={text} id="mytextbox" rows="9"   ></textarea>   */}
  <textarea className="form-control w-100 float-start mb-3 text-dark" onChange={handleOnClick}  value={text} id="mytextbox" rows="9"   ></textarea>  
</div>

<button className="btn btn-primary me-4 mb-2" onClick={handleUpClick}>UPPER CASE</button>
<button className="btn btn-primary me-4 mb-2" onClick={handleUpClickLowerCase}>Lower case</button>
<button className="btn btn-primary me-4 mb-2" onClick={handleUpClear}>Clear Text</button>
<button className="btn btn-primary me-4 mb-2" onClick={handleUpSpaces}>Remove Spaces </button>

<button className="btn btn-primary me-4 mb-2" onClick={handleUpClick}>InVeRsE CaSe </button>
<button className="btn btn-primary me-4 mb-2" onClick={textCopy}>Copy to Clipboard</button>
 
<div className="container my-3" style={{color: props.mode === 'dark'? 'white': '#042743'}}>
  <h2>Text summary</h2>
  <h4>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</h4>
  <h4>Number of words {text.split(" ").length }.</h4>
  <h4>Reading time { 0.008 * text.split(" ").length } </h4>
  <h5>Text Preview</h5>
 <label>{text.length>0? text:"Enter something in the textbox above to preview it here" }</label>
</div>
</div>
  )
}
