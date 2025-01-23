import React from 'react'
import './Quizapp.css';
import { useState } from 'react';

function Quizapp() {
  const Question=[
    "What is the capital of India?",
      "Who is the PM of India?",
      "Who is president of India?",
      "What is the capital of Andhra Pradesh ?"
  ];

  const option=[
    {
        option1:[
            "New Delhi",
            "Mumbai",
            "Chennai",
            "Bangalore"

        ]
    },
    {
        option2:[
            
                "Narendra Modi",
                "Rahul Gandhi",
                "Amit Shah",
                "Priyanka Gandhi"
            
        ]
    },
    {
        option3:[
            
                "Ram Nath Kovind",
                "Kovind Ram",
                "Narendra Modi",
                "Amit Shah"

            
        ]
    },
    {
        option4:[
            
                "Hyderabad",
                "Vishakhapatnam",
                "Chennai",
                "Bangalore"

            

        ]
    }
  ]

    const [count, setcount] = useState(0);
const [counter, setcounter] = useState(0);


function Changequestion()
{
 
    setcounter(counter+1)
}
  return (
    <>
    <div className='container'>
 <div className='card'>
    <h2> &nbsp;My Quiz Application</h2>

    <h3>&nbsp;Question no:{counter+1}  /4</h3>

  <h2>{Question[counter]}</h2>
  <button onClick={Changequestion}>change question</button>

    <h3></h3>
 </div>
    </div>
    
    
    
    </>
  )
}

export default Quizapp