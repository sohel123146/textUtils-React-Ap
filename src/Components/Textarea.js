import React, {useState} from 'react'

export default function Textarea(props) {

    const [text,setText] = useState("")

    const handleUpClick = () => {

        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to Uppecase","success")
    }

    const handleLoClick = () => {

        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to Lowecase","success")
    }

    const handleClearText = () => { 

        let newtext = ''
        setText(newtext)
        props.showAlert("Textarea Cleared","success")
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!","success")
    }

    const handleExtraSpaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(' '));
        props.showAlert("Extra Spaces removed!", "success");
    }
    
    const handleOnChange = (event) =>
    {
        setText(event.target.value)
    }

  return (
    <div className="container" style={{color: props.mode === 'dark'?'white':'#040436'}}>
    <div>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark'?'#283181':'white',color: props.mode === 'dark'?'white':'#040436'}} id="my box" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className={"btn btn-primary mx-1 my-1"} onClick={handleUpClick}>Change to Upper case</button> 
        <button disabled={text.length===0} className={"btn btn-primary mx-1 my-1"} onClick={handleLoClick}>Change to Lower case</button>
        <button disabled={text.length===0} className={"btn btn-primary mx-1 my-1"} onClick={handleClearText}>Clear Text</button>
        <button disabled={text.length===0} className={"btn btn-primary mx-1 my-1"} onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className={"btn btn-primary mx-1 my-1"} onClick={handleExtraSpaces} >Remove Extra Spaces</button>
    </div>

    <div>
        <h1>Preview</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} letters </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } minutes read</p>
    </div>

    <div>
        <h1>Nothing to Preview!</h1>
        <p>{text}</p>
    </div>
    </div>
  )
}
