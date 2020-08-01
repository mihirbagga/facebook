import React,{forwardRef} from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import './Mess.css'

const Mess=forwardRef(({message,username},ref)=>
 {   let a="Unknow User"
    const iuser = username===message.username;
    return (
        <div ref={ref} className={`message ${iuser && 'message_user'}`}>
            <Card className={iuser ? 'message_usercard':'message_guest'} >
                <CardContent>
               <Typography
               color="white"
               variant="h5"
               component="h2">
                 { message.username} :{message.message}
               </Typography>
                </CardContent>

            </Card>
        </div>
            
        
    )
})

export default Mess
