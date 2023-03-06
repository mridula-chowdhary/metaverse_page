import React,{Fragment} from 'react';
import Intro from './Navbar';
import Navbar from './Intro';
import Start from './Start';

import classes from './Landing.module.css';

const Landing = props => {
return (
<Fragment>
    <div className={classes.landing}>
<Navbar/>
     <Intro/>
     <Start/>
     </div>
</Fragment>
);
}

export default Landing;