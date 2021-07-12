import React, { useState, useEffect } from 'react';
import './style.css'
import { Button, TextField, Box } from '@material-ui/core';
import TotalList from './list/list'
import Topbar from './Topbar/Topbar';
import db from './firebase'
import firebase from 'firebase';


function App() {
  const [todos, setTodos] = useState([])
  const [value, setvalue] = useState('')

  //when the app load, we listen the database and fetch todos as they get add/remove
  //doc代表每一個加入db的待辦事項
  useEffect(()=>{
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setTodos(snapshot.docs.map(doc => ({id:doc.id, todo: doc.data().todo})))
    })
  },[])


  const handle_click =(event)=>{
    event.preventDefault()

    db.collection('todos').add({
      todo:value,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodos([...todos,value])
    setvalue('')
  }

  return (
    <div>
      <div className="Big-contain">
        <Topbar />
        <div className='bar'>
          <TextField 
          size='small' label="Task" variant="outlined" 
          value={value} onChange={event => setvalue(event.target.value)}
          />
          <Box m={2}>
            <Button  variant="contained" onClick={handle_click}>Add</Button>
          </Box>   
        </div>
      </div>
      
      <ul>
        {
          todos.map(todo=>(
            <TotalList text={todo} />
          ))
        }
      </ul>
    </div>
  );
}

export default App;
