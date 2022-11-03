import React, {Fragment} from 'react';
import Navbar from "../Home/Navbar";
import Appbar from "../Home/app/Appbar";
import MediaCard2 from "../Home/card/MediaCard2";
import ProgressBar from "../Home/progress/ProgressBar";
const p = new URL("../../assets/images/p.gif",import.meta.url)
const user = new URL("../../assets/images/user.png",import.meta.url)

function Home() {
    return (
        <Fragment>

            <Appbar/>
            <Navbar/>


            <MediaCard2/>


            {/*<img src={p} style={{ position:"absolute",top:70, left:1120,height:300,width:300}}/>*/}

            {/*<h1 style={{ position:"absolute",top:400, left:1100}}>Recent Activities</h1>*/}
            {/*<h2 style={{ position:"absolute",top:440, left:1100, fontSize:20}}>14 August 21</h2>*/}
            {/*<img src={user} style={{ position:"absolute",top:500, left:1100,height:40,width:40}}/>*/}
            {/*<img src={user} style={{ position:"absolute",top:550, left:1100,height:40,width:40}}/>*/}
            {/*<img src={user} style={{ position:"absolute",top:600, left:1100,height:40,width:40}}/>*/}


            {/*<h2 style={{ position:"absolute",top:500, left:1150,fontSize:20}}>Recent Activities</h2>*/}
        </Fragment>
    );
}

export default Home;