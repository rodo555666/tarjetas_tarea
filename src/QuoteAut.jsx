import React from 'react'
import Btn from '../Btn'
import quotes from './jason/quotes.json'
import './quotbox.css'

const QuoteAut = ({fr,quoteclick,colb}) => {

const btn = { 
  backgroundColor:colb
}


  return (
    <div className='card'>
      <i className="fa-solid fa-quote-left"></i>
     <p>{fr.quote}</p>
     <h1>{fr.author}</h1>
     <Btn oncl={quoteclick}
     styleback={colb}/>
    </div>
  )
}

export default QuoteAut
