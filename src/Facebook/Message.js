import React, { useEffect } from 'react'
import {useState} from 'react'

import { FormControl, InputLabel ,Input,FormHelperText} from '@material-ui/core';
import Mess from './Mess';
import db from './Firebase'
import firebase from 'firebase'
import FlipMove from 'react-flip-move'
import './Mess.css'
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton'
import PrimarySearchAppBar from './Bar'

function App()
{ 
    const [input,setInput]=useState('');
    const [message,setMessage]=useState([{username:'soony',message:'hi'},
{
    username:'qazi',
    message:'hello'
},]);
    const [username,setUsername]=useState('')

    useEffect(() => {
       setUsername( prompt("Enter The UserName"))
        }
    , [])

    useEffect(()=>
    {
        db.collection('message').orderBy('timeStamp','desc').onSnapshot(snapshot=>
            {
                setMessage(snapshot.docs.map(doc=>doc.data()))
            })

    })

    console.log(input);
    console.log(message);

    const sendMessage= (event) =>
    { event.preventDefault();
      db.collection('message').add(
      {
          message:input,
          username:username,
          timeStamp:firebase.firestore.FieldValue.serverTimestamp()

      });
      setMessage([...message,{username:username,message:input}])
      setInput('')
      
    }
    return (
        <div>
            
            
            <PrimarySearchAppBar username={username}/>
          <center><img alt=" "src='https://en.facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100'/>
           <h3>Welcome {username}</h3></center> 
           <FlipMove>
           {
               message.map(message=>
                <Mess username={username} message={message}/>
                )
           }
           </FlipMove>
           <form className="app_form">
          <FormControl className="app_formc" >
  <InputLabel htmlFor="my-input">Enter Message</InputLabel>
  <Input fullWidth value={input} onChange={event=>setInput(event.target.value)} className='hell'/> <IconButton disabled={!input} color='primary' variant='contained' type='submit' onClick={sendMessage}>
      <SendIcon/>
  </IconButton>


  


  <FormHelperText id="my-helper-text">We'll never share your messages.</FormHelperText>
  
           </FormControl>
          </form>
           
           
        </div>
    )


}
export default App;