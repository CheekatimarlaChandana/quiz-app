import React, { useMemo, useState } from 'react'

const MemoHook = () => {
    const usersinfo =[ 
        {id:"1",name:"ram"},
        {id:"2",name:"ramesh"},
        {id:"3",name:"ramu"},
        {id:"4",name:"raju"},
    ]
    const [users,setUsers] = useState(usersinfo);
    const [counter,setCounter] = useState(0)

    const MemorisedValue = useMemo(()=>users.map((user) => {
        console.log("users..")
        return <li key={user.id}>{user.name}</li>
    }),[users])

    const handleIncrement = () => {
        setCounter(counter+1)
    }
    const handleUserName = (value) => {
        setUsers([...users,{
            id:users.length+1,
            name:value
        }])

    }

  return (
    <div>
        <ul>
            {MemorisedValue}
        </ul>
        <h1>{counter}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <br/>
        Enter Name : <input type='text' onBlur={(e) => handleUserName(e.target.value)}/> 
    </div>
  )
}

export default MemoHook