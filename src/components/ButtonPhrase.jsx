import getRandomFromArr from "../services/getRandomFromArr.js"
import phrases from '../utils/phrases.json'
import bgArr from '../utils/bgArr.json'
const ButtonPhrase = ({setphraseRandom, setbgApp}) => {
    const handleChangePhrase = () =>{
        setphraseRandom(getRandomFromArr(phrases))
        setbgApp(getRandomFromArr(bgArr))
       
    }
      return (
    <>
    
    
   
    <button className="phrase-change" onClick={handleChangePhrase}>Phrase </button>
    
    </>
  )
}

export default ButtonPhrase