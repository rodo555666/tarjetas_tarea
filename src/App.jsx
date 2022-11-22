import { useState } from 'react'
import './App.css'
import quotes from './jason/quotes.json'
import colors from './jason/colors.json'
import QuoteAut from './QuoteAut';







function App() {

  const text = arr => { 
    const idx = Math.floor( arr.length * Math.random())
   
  return arr[idx]
};

const [col, setcol] = useState(text(colors))

const [frase, setfrase] = useState(text(quotes))

const quoteclick = ()=> { setfrase(text(quotes))
  setcol(text(colors)) }



  const back = {
    backgroundColor: col,
    color: col
  }



    return (
    
    <div className='app'   style={back}>
      
      <QuoteAut fr={frase}
      quoteclick={quoteclick}
      colb={back}/>
      </div>
      
    )
 }


export default App
