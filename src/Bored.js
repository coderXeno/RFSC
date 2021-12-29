import React, { useState } from "react";
import axios from "axios";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function Bored(){
    const api = 'https://www.boredapi.com/api/activity';
    let [res, setRes] = useState(null);
    let [part, setPart] = useState(null);
    let [type, setType] = useState(null);

    React.useEffect(()=>{
        axios.get(api)
            .then((response)=>{
                setRes(response.data.activity)
                setType(response.data.type)
                setPart(response.data.participants)
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [])

    const classes=useStyles();

    return(
        <div className="bored-div">
            <h2 id="bored-items">Are you bored?</h2>
            <p id="bored-items">Here's a suggestion for you! Please be patient until the activity shows up on your screen!</p>
            {res ? <div>    
                {res && <h3 id="bored-items"><b>{res}!</b></h3>}
                {type && <h3 id="bored-items">Type of Activity: {type.substr(0,1).toUpperCase()+type.substr(1)}</h3>}
                {part && <h3 id="bored-items">Number Of Participants Required: {part}</h3>}
                {res && <p id="bored-items">Don't like the activity? Refresh the page!</p>}
            </div>: 
            <Backdrop className={classes.backdrop} open>
                <CircularProgress color="inherit" />
            </Backdrop>
            }
        </div>
    )
}