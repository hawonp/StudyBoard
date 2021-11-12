import React, {useEffect, useState} from "react";
import StarIcon from "@mui/icons-material/Star";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

import ButtonComponets from "./ButtonComponets";
import Box from "@mui/material/Box";

const dummy_prop = {
    id: '1',
    user:'pk',
    title:'Dummy Data title',
    images: 'https://woulduin.com/assets/users/_meta/2021/07/18/39bd9107-13df-4172-af6a-3674215d3054_KakaoTalk_20210717_191956085.gif',
    content:'Dummy Data Content',
    tags: '#math',
}
export  default function CardShow(){
    const {id,user, title, images ,content, tags} =  dummy_prop

    //EditPost
    const [postCard, setpostCard] = useState({
        id: 1,
        title: "PK",
        content: "PKPKPK",
        images: "",
        tags: "#MATH #CSE #HARD"
    });

    useEffect(() => {
        // TODO: API CALL (BACKEND)
    }, [])


    return(

        <Card sx={{ maxWidth: 1250,marginTop: '1rem'}}>

            <CardHeader
                style={{ textAlign: 'left' }}
                avatar={
                    // user icon

                    <Avatar sx={{ bgcolor: 'black' }} aria-label="recipe"></Avatar>
                }

                action={
                    <div>
                        <Tooltip title="This is Endorsed User post ">
                            <StarIcon sx={{color:'yellow', mt:'0.1rem'}} />
                        </Tooltip>


                    </div>
                }

                title = {user}
                subheader= {title}
            >
            </CardHeader>
            {/*<Link href={`/postdetai/${post.id}/`}>*/}
            <Link href="/postdetail">
                <Box sx={{width: '90%', marginLeft: '5%', marginRight: '5%',}}>
                    <CardMedia
                        component="img"
                        sx={{ maxHeight: '400px', objectFit: 'contain'}}

                        // <Image  alt="Trulli" width="100%" height="100%" />
                        src={images}
                        alt="No image"
                    />
                </Box>
            </Link>

            {/* card content  */}
            <CardContent
                style={{ textAlign: 'left' }}
            >
                <Link href="/postdetail"><a>
                    <Typography variant="body2" color="text.secondary">
                        {content}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {tags}
                    </Typography>
                </a></Link>
            </CardContent>

            {/* this is icon */}
            <ButtonComponets />

        </Card>

    )



}