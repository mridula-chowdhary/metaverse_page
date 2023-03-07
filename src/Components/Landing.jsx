import React,{Fragment} from 'react';
import Intro from './Navbar';
import Navbar from './Intro';
import Start from './Start';

import classes from './Landing.module.css';
import New from './New';
import Generation from './Generation';
import Coupon from './Coupon';
import Event from './Event';
import Digital from './Digital';
import True from './True';
import Ttext from './Ttext';
import File from './File';

const Landing = props => {
return (
<Fragment>
    <div className={classes.landing}>
    <Navbar/>
     <Intro/>
     <Start/>
     <Generation/>
     <New/>
    <Coupon/>
   <Event/>
   <Digital/>
   <True/>
   <Ttext/>
    <File/>
     </div>
</Fragment>
);
}

export default Landing;