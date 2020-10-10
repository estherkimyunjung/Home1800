import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '20px',
  },
  textField: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    width: 230,
    fontSize: '20px'
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 130,
    },

    inline: {
      display: 'inline',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    width: 150,
    marginTop: 0,
    marginLeft: '30px',
    // marginRight: '30px'
  },
  selectEmpty: {
    marginTop: theme.spacing(3),
  },
  textareaAutosize: {
    marginTop: '10px',
    width: '800px',
    paddingLeft: '10px',
    fontSize: '20px'
  },
  button: {
    margin: theme.spacing(1),
    marginTop: 15,
    backgroundColor: '#ac9e88',
  },
}));

export default function Appointments(props) {
console.log("Agent", props)
  const classes = useStyles();

  // const allAgent = props.appointments.map(a => a.agent.user.firstname +' '+ a.agent.user.lastname)
  const allAgents = props.agents.map(a => a.id +' '+ a.user.firstname +' '+ a.user.lastname)
  // console.log("ALL", [...new Set(allAgent)])

  const [agents, setAgents] = React.useState([...new Set(allAgents)]);
  const [agent, setAgent] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [date_time, setDate_time] = React.useState('');
  
  const handleChange = (event, stateChange) => {
    stateChange(event.target.value)
  }


  const appolist = props.appointments.filter(ap => ap.client_id === props.user.id)
  const agentAppo = appolist.map(li => li.agent.user.firstname)
  // console.log("AgAp", agentAppo)
  return (
    <div>
      <h1 style={{marginBottom: '40px', paddingLeft: '20px'}}>Appointment Informations</h1>
      <form 
        className={classes.container} 
        noValidate 
        onSubmit={(e) => {props.addAppointment(message, agent, date_time, e)}}
      >
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue={props.user.firstname + ' ' + props.user.lastname}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Find Agent</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={agent}
            onChange ={(e) =>{handleChange(e, setAgent)}}
            label="Agent"
          >
            <MenuItem value="">
              <em>Select Option</em>
            </MenuItem>
            {agents.map(ag => <MenuItem value={ag}>{ag}</MenuItem>)}
          </Select>
        </FormControl>
        <TextField
          id="datetime-local"
          label="Next appointment"
          type="datetime-local"
          defaultValue="2020-07-27T10:30"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          value={date_time}
          onChange ={(e) =>{handleChange(e, setDate_time)}}
          />
        <TextareaAutosize 
          className={classes.textareaAutosize} 
          aria-label="minimum height" 
          rowsMin={2} 
          placeholder="Message : max character 200"
          value={message}
          onChange ={(e) =>{handleChange(e, setMessage)}}
        />
        <Button
          type="submit" 
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<SendIcon>send</SendIcon>}
        >
          Send
      </Button>
      </form>

      <List className={classes.root} style={{ marginTop: '10px' }}>
        {appolist.map(al =>
          <ListItem alignItems="flex-start" style={{ width: '700px' }}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={al.agent.user.avatar} />
            </ListItemAvatar>
            <ListItemText fontSize='50px'
              primary={'Agent : ' + al.agent.user.firstname + ' ' + al.agent.user.lastname + '(Appointment : ' + moment(al.date_time).format("dddd, MMMM D, YYYY h:mm") + ')'}
              secondary={
                <React.Fragment>
                  <br/>
                  <span>{'  ' + al.message + ' '}</span>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    - {moment(al.created_at).format("dddd, MMMM D, YYYY")}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        )}
        <Divider variant="inset" component="li" style={{ width: '500px' }} />
      </List>
    </div>
  );
}

