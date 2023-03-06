import React,{Fragment} from 'react';
import classes from './Ttext.module.css';

const Ttext = props => {
return (
<Fragment>
<div className={classes.text}>
    <p> You don’t actually own anything on the internet. You can spend money on video games and can’t easily sell your skins, progress, or account when you don’t play the game anymore. You can create content on social media platforms, and Facebook, YouTube, and TikTok can delete it whenever they feel like it. True ownership means that no one can take away what you own except for yourself. We’re creating digital items that you actually own, which means only you can unlock exclusive experiences, trade items with others, and so much more! </p>
{/* <div className={classes.btn}> */}
<button> Start Now</button>
{/* </div> */}
</div>

</Fragment>
);
}

export default Ttext;