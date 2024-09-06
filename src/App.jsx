import React, { useState } from 'react';
import './app.css' 
import 'regenerator-runtime/runtime'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import useClipboard from "react-use-clipboard";

function App() {
  const [textCopy,setTextCopy]=useState()
  const [isCopied, setCopied] = useClipboard(textCopy);
 const startListening=()=> SpeechRecognition.startListening({ continuous: true,language:'en-PK'})
 const stopListening=()=> SpeechRecognition.stopListening()
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()

  if (!browserSupportsSpeechRecognition) {
    return null
  }

  return (
    <>
      <div className='container' >
          <h2>Speech to Text Converter</h2>
          <br/>
          <p>
            Convert Speech from the microphone to text
          </p>
           <div className='main-content' onClick={()=>setTextCopy(transcript)} >
             {transcript}
           </div>
           <div className='btn-style' >
           <button onClick={setCopied}>
       {isCopied ?"Copied" : "Copy to Clipboard"}
    </button>
             <button onClick={startListening} >Start Listening</button>
             <button onClick={stopListening} >Stop Listening</button>
           </div>



      </div>
    </>
  )
}

export default App
