
import { useState } from 'react'
import './App.css'
import phrases from './utils/phrases.json'
import bgArr from './utils/bgArr.json'
import getRandomFromArr from './services/getRandomFromArr'
import Phrase from './components/Phrase'
import ButtonPhrase from './components/ButtonPhrase'

// const bgArr = [1,2,3,4]
function App() {
  const [phraseRandom, setphraseRandom] = useState( getRandomFromArr(phrases) )
  const [bgApp, setbgApp] = useState(getRandomFromArr(bgArr)) 
  //recordar que los componentes empiezan en mayuscula y retornan jsx
  const objStyle = {
    backgroundImage: `url(../img/fondo${bgApp}.jpg)`
  }
  return (
    <>
      <div style={objStyle} className='div__body'>
        <h1>Galletas de la fortuna</h1>
        
        <div className='div__phrase'>
        <Phrase
          phraseRandom={phraseRandom}
        />
        </div>
        <div className="div-button"></div>
        <ButtonPhrase 
        setphraseRandom={setphraseRandom}
        setbgApp={setbgApp}/>
        <div/>
        </div>
    </>
  )
}

export default App
