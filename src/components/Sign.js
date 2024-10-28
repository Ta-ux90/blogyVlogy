import React, { useState } from 'react'

export default function Sign(props) {

  const Upcase = () => {
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showalert('Converted to Uppercase', 'success')
  }
  const lowcase = () => {
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showalert('Converted to Lowercase', 'success')
  }
  const clear = () => {
    let newtext = '';
    setText(newtext)
    props.showalert('Your text has been Cleared', 'success')
  }
  const Reverse = () => {
    let reve = text.split("");
    reve = reve.reverse();
    let newText = reve.join("");
    setText(newText);
    props.showalert('Text has been Reversed', 'success')
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const Capitalize = () => {
    let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
    setText(newText);
    props.showalert('Capitalize the text', 'success')
  }
  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showalert('Copied to clipboard!', 'success')
  }
  const extraspaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(' '))
    props.showalert('Extraspaces removed', 'success')
  }

  const Onchange = (event) => {
    setText(event.target.value)
  }

  const [text, setText] = useState('');
  return (
    <>
      <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <div className="mb-3 mt-3">
          <h1 className='mt-2 mb-4'>{props.heading}</h1>
          <textarea className="form-control" placeholder='Enter text here...' value={text} onChange={Onchange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#313238', color: props.mode === 'light' ? 'black' : 'white' }} id="exampleFormControlTextarea1" rows="8">{text}</textarea>
          <button className='btn btn-primary mt-4' onClick={Upcase}>Uppercase</button>
          <button className='btn btn-warning mt-4 ms-2' onClick={lowcase}>Lowercase</button>
          <button className='btn btn-info mt-4 ms-2' onClick={Reverse}>Reverse Text</button>
          <button className='btn btn-secondary mt-4 ms-2' onClick={speak}>Speak</button>
          <button className='btn btn-primary mt-4 ms-2' onClick={Capitalize}>Capitalize</button>
          <button className='btn btn-success mt-4 ms-2' onClick={copyText}>Copy Text</button>
          <button className='btn btn-warning mt-4 ms-2' onClick={extraspaces}>Remove extraspaces</button>
          <button className='btn btn-danger mt-4 ms-2' onClick={clear}>Clear Text</button>
        </div>
      </div>

      <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read...</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : 'Enter something on the textbox above to preview it here'}</p>
      </div>
    </>
  )
}
//I Am Here To Tell You Something That Now I Know How To Copy Paste The Code Lol... 
