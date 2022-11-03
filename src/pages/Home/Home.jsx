import React, {Fragment} from 'react';
import Navbar from "../Home/Navbar";
import Appbar from "../Home/app/Appbar";
import MediaCard2 from "../Home/card/MediaCard2";
import FolderList from "../Home/list/FolderList";
import LinearProgressWithLabel from "../Home/progress/LinearProgressWithLabel";
import LinearProgress from "@material-ui/core/LinearProgress";
const p = new URL("../../assets/images/p.gif",import.meta.url)
const user = new URL("../../assets/images/user.png",import.meta.url)

function Home() {
    return (



        <Fragment>

            <Appbar/>
            <Navbar/>
            <FolderList/>


            <h2>Task List</h2>
            <MediaCard2/>


            {/*<img src={p} style={{ position:"absolute",top:70, left:1120,height:300,width:300}}/>*/}

            {/*<h1 style={{ position:"absolute",top:400, left:1100}}>Recent Activities</h1>*/}
            {/*<h2 style={{ position:"absolute",top:440, left:1100, fontSize:20}}>14 August 21</h2>*/}
            {/*<img src={user} style={{ position:"relative",top:-200, left:900,height:40,width:40}}/>*/}
            {/*<img src={user} style={{ position:"relative",top:-180, left:870,height:40,width:40}}/>*/}
            <img src={user} style={{ position:"relative",top:-600, left:910,height:40,width:40}}/>
            <img src={user} style={{ position:"relative",top:-540, left:870,height:40,width:40}}/>
            <img src={user} style={{ position:"relative",top:-480, left:830,height:40,width:40}}/>
            <img src={user} style={{ position:"relative",top:-420, left:790,height:40,width:40}}/>
            <img src={user} style={{ position:"relative",top:-360, left:750,height:40,width:40}}/>

            {/*<h2 style={{ position:"absolute",top:500, left:1150,fontSize:20}}>Recent Activities</h2>*/}
            <img src={user} style={{ position:"relative",top:-400, left:5,height:30,width:30}}/>
            <img src={user} style={{ position:"relative",top:-400, left:290,height:30,width:30}}/>
            <img src={user} style={{ position:"relative",top:-400, left:570,height:30,width:30}}/>


        </Fragment>

    );
}

export default Home;