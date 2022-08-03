import React,{ useState } from 'react';
export default function Text(props) {
  const uppercase = () =>{
   // console.log('upper case was clicked');
   let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("convert to uppercase!", "success");
  }
  
  const lowercase = () =>{
    // console.log('upper case was clicked');
    let newtext = text.toLowerCase();
     setText(newtext);
     props.showAlert("convert to lower!", "success");
   }
   const clear = () =>{
    // console.log('upper case was clicked');
    let newtext = ("");
     setText(newtext);
     props.showAlert("cleared", "success");
  }
   
  const handleOnchange = (event) =>{
   // console.log('change');
    setText(event.target.value);
  }
  const spacedel = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("remove space", "success");
  }


  const [text, setText] = useState('');
    return (
      <>
        <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" placeholder='enter your story' style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} value={text} onChange={handleOnchange} id="mybox" rows="8"></textarea>
      </div>
      <button className='btn btn-primary mx-1' onClick={uppercase}>convert to uppercase</button>
      <button className='btn btn-primary mx-1' onClick={lowercase}>convert to lowercase</button>
      <button className='btn btn-primary mx-1' onClick={clear}>clear</button>
      <button className='btn btn-primary mx-1' onClick={spacedel}>remove space</button>
      </div>
      <div className='container my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>your story</h1>
        <p>{text.split(" ").length} word and {text.length} character</p>
        <p>{0.008 * text.split(" ").length} minute</p>
       <h2>Preview</h2>
       <p>{text.length>0?text:"enter something"}</p>
      </div>
    </>
    )
}
