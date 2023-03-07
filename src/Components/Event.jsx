import React,{Fragment} from 'react';
import classes from './Event.module.css';

const Event = props => {
return (
<Fragment>
 <div className={classes.event}>
    <p>Event Ticket</p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus tellus, feugiat quam libero vitae.
 </div>
</Fragment>
);
}

export default Event;