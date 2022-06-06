import React, {useState} from 'react'

export default function Home(props) {
    const runQuery = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Your query running!","success");
    }
    
     const handleClearClick = ()=>{
        //clear the text
         let newText = '';
         setText(newText);
         props.showAlert("Text cleared!","success");
     }
     const handleCopyClick = ()=>{
        //copy the text
        //  let newText = document.getElementById('myBox');
        //  newText.select();
        //  navigator.clipboard.writeText(newText.value);
        navigator.clipboard.writeText(text);
         props.showAlert("Text copied!","success");
     }
     
    const handleOnChange = (event)=>{
       // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className="container my-3"  style={{color: props.mode === 'dark'? 'white':'#042743'}} >
            <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control my-3" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? 'grey':'white', color: props.mode ==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-dark" onClick={runQuery} >Run Query</button>
            <button disabled={text.length===0} className="btn btn-dark mx-2 my-1" onClick={handleClearClick} >Clear</button>
            <button disabled={text.length===0} className="btn btn-dark mx-2 my-1" onClick={handleCopyClick} >Copy</button>
        </div>
        <div className="container my-4" style={{color: props.mode === 'dark'? 'white':'#042743'}}>
            <h2>Your Result</h2>
            
            <p>{text.length >0 ? text : "No result yet"}</p>
        </div>
        </>
    )
}
