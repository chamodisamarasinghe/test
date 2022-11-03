import React from 'react'
import {Grid} from "@mui/material";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
 import p from "../../../assets/images/p.gif"
import load from "../../../assets/images/load.png"
import LinearProgressWithLabel from "../progress/LinearProgressWithLabel";
// import Driver from "../../../assets/d.jpg"
// import Maintain from "../../../assets/main.jpg"
// import AdminDashNav from "../AdminDashBoard/adminDashNav";

const MediaCard2 = ({}) => {


    return (
        <div>
            <Grid >


            </Grid>



            <Grid item lg={12} xs={12} sm={12} md={12}>

            </Grid>
            <Card sx={{ maxWidth: 250,ml:1,mt:60 }}>
                <CardActionArea>




                    {/*<CardContent>*/}
                    {/*    <Typography gutterBottom variant="h5" component="div">*/}
                    {/*        Todo*/}
                    {/*    </Typography>*/}
                    {/*    <Typography variant="body2" color="text.secondary">*/}
                    {/*        Icons*/}
                    {/*    </Typography>*/}

                    {/*    <Typography variant="body2" color="text.secondary">*/}
                    {/*        Development*/}
                    {/*    </Typography>*/}


                    {/*    <CardMedia*/}
                    {/*        component="img"*/}
                    {/*        height="5"*/}
                    {/*        image={load}*/}
                    {/*        alt="green iguana"*/}
                    {/*    />*/}

                    {/*    <Typography variant="h6" color="text.secondary">*/}
                    {/*        Design and Creative*/}
                    {/*    </Typography>*/}
                    {/*</CardContent>*/}




                </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 250,ml:-1,mt:-55 }}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            In progress
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Icons
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            Development
                        </Typography>
                    </CardContent>

                    {/*<CardMedia*/}
                    {/*    component="img"*/}
                    {/*    height="5"*/}
                    {/*    image={load}*/}
                    {/*    alt="green iguana"*/}
                    {/*/>*/}
                    <LinearProgressWithLabel/>
                    <Typography variant="h6" color="text.secondary">
                        Design and Creative
                    </Typography>
                </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 250,ml:40,mt:-20}}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Done
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                           Wireframe
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Development
                        </Typography>
                    </CardContent>

                    {/*<CardMedia*/}
                    {/*    component="img"*/}
                    {/*    height="5"*/}
                    {/*    image={load}*/}
                    {/*    alt="green iguana"*/}
                    {/*/>*/}
                    <LinearProgressWithLabel/>
                    <Typography variant="h6" color="text.secondary">
                        Design and Creative
                    </Typography>
                </CardActionArea>
            </Card>



            <Card sx={{ maxWidth: 250,ml:80,mt:-22}}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Done
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Wireframe
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Development
                        </Typography>
                    </CardContent>

                    {/*<CardMedia*/}
                    {/*    component="img"*/}
                    {/*    height="5"*/}
                    {/*    image={load}*/}
                    {/*    alt="green iguana"*/}
                    {/*/>*/}
                    <LinearProgressWithLabel/>
                    <Typography variant="h6" color="text.secondary">
                        Design and Creative
                    </Typography>
                </CardActionArea>
            </Card>





            {/*<Card sx={{ maxWidth: 700,ml:120,mt:-70}}>*/}



            {/*    <CardActionArea>*/}

            {/*        <CardMedia*/}
            {/*            component="img"*/}
            {/*            height="240"*/}
            {/*            image={p}*/}
            {/*            alt="green iguana"*/}
            {/*        />*/}


            {/*        <CardContent>*/}
            {/*            <Typography gutterBottom variant="h5" component="div" >*/}
            {/*                Recent Activities*/}
            {/*            </Typography>*/}
            {/*            <Typography variant="body2" color="text.secondary">*/}
            {/*               14 August 2021*/}
            {/*            </Typography>*/}
            {/*            <Typography variant="h6" color="text.secondary">*/}
            {/*                Silvester Annanas*/}
            {/*            </Typography>*/}
            {/*            <Typography variant="h7" color="text.secondary">*/}
            {/*                PR-Director*/}
            {/*            </Typography>*/}


            {/*            <Typography variant="h6" color="text.secondary">*/}
            {/*                Danny Joe*/}
            {/*            </Typography>*/}
            {/*            <Typography variant="h7" color="text.secondary">*/}
            {/*                Developer*/}
            {/*            </Typography>*/}

            {/*            <Typography variant="h6" color="text.secondary">*/}
            {/*                Liza Black*/}
            {/*            </Typography>*/}
            {/*            <Typography variant="h7" color="text.secondary">*/}
            {/*                UX designer*/}
            {/*            </Typography>*/}

            {/*            <Typography variant="h6" color="text.secondary">*/}
            {/*                Liza Black*/}
            {/*            </Typography>*/}
            {/*            <Typography variant="h7" color="text.secondary">*/}
            {/*                UX designer*/}
            {/*            </Typography>*/}
            {/*        </CardContent>*/}
            {/*    </CardActionArea>*/}
            {/*</Card>*/}


            <Grid>
                <Card sx={{ maxWidth: 700,ml:120,mt:-80}}>



                    <CardActionArea>

                        <CardMedia
                            component="img"
                            height="240"
                            image={p}
                            alt="green iguana"
                        />


                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" >
                                Recent Activities
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                               14 August 2021
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                Silvester Annanas
                            </Typography>
                            <Typography variant="h7" color="text.secondary">
                                PR-Director
                            </Typography>


                            <Typography variant="h6" color="text.secondary">
                                Danny Joe
                            </Typography>
                            <Typography variant="h7" color="text.secondary">
                                Developer
                            </Typography>

                            <Typography variant="h6" color="text.secondary">
                                Liza Black
                            </Typography>
                            <Typography variant="h7" color="text.secondary">
                                UX designer
                            </Typography>

                            <Typography variant="h6" color="text.secondary">
                                Liza Black
                            </Typography>
                            <Typography variant="h7" color="text.secondary">
                                UX designer
                            </Typography>


                            <Typography variant="h6" color="text.secondary">
                                Liza Black
                            </Typography>
                            <Typography variant="h7" color="text.secondary">
                                UX designer
                            </Typography>

                            <Typography variant="h6" color="text.secondary">
                                Liza Black
                            </Typography>
                            <Typography variant="h7" color="text.secondary">
                                UX designer
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </div>



    )

}

export default MediaCard2