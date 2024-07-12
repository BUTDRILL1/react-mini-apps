import React, {useEffect} from 'react'
import 'regenerator-runtime/runtime'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import './App.css'

const App = () => {
  const commands = [
    {
      command: ['reset', 'clear'],
      callback: ({ resetTranscript }) => { resetTranscript(); }
    },
    {
      command: 'open *',
      callback: (site) => { window.open('http://' + site) }
    },
    {
      command: 'increase text size to *',
      callback: (value) => { document.getElementById('content').style.fontSize = (value + 'px') }
    },
    {
      command: 'decrease text size to *',
      callback: (value) => { document.getElementById('content').style.fontSize = (value + 'px') }
    },
    {
      command: 'change text colour to *',
      callback: (color) => { document.getElementById('content').style.color = color }
    }
  ];

  useEffect(() => {
    SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  }, []);
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition({ commands });

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div className='container'>
      <div className='nav'>
        <h2>Speak to Check:</h2>
      </div>
      <div id='content'>
       {transcript}
      </div>
    </div>
  );
};

export default App
