import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


function UseEffects() {

  const [State, setState] = useState('users')
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())

      .then((data) => {
        setData(data);
        setLoading(false)
      })

  }, [count])
  return (
    <>
      <button onClick={() => { setState('users'); setCount(count + 1) }}>Users</button>
      <button onClick={() => { setState('comments'); setCount(count + 1) }}>Comments</button>
      <div>
        <h1>{State}</h1>
        {
          loading ? (<p>Data is Loading..</p>) :
            (<ul>
              {
                data.map((user) => (<li key={user.id}>{user.name}</li>))
              }
            </ul>)
        }
      </div>
    </>
  )
}

export default UseEffects