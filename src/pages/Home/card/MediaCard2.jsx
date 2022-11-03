import React from 'react'
import {Grid} from "@mui/material";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
 import p from "../../../assets/images/p.gif"
// import Book from "../../../assets/book.jpg"
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
            <Card sx={{ maxWidth: 200,ml:1,mt:50 }}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Todo
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            UX UI Design
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Design and Creative
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 200,ml:28,mt:-14 }}>
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
                </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 200,ml:55,mt:-14}}>
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
                </CardActionArea>
            </Card>





            <Card sx={{ maxWidth: 700,ml:120,mt:-70}}>



                <CardActionArea>

                    <CardMedia
                        component="img"
                        height="240"
                        image={p}
                        alt="green iguana"
                    />


                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
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
                            Silvester Annanas
                        </Typography>
                        <Typography variant="h7" color="text.secondary">
                            PR-Director
                        </Typography>

                        <Typography variant="h7" color="text.secondary">
                            Silvester Annanas
                        </Typography>
                        <Typography variant="h7" color="text.secondary">
                            Silvester Annanas
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )

}

export default MediaCard2