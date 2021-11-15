import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import * as React from "react";
import List from "@mui/material/List";
import {useState} from "react";

const dummy_rank={
    user_id: 1,
    user_nickname: 'Nick PK',
    tags: '#math #cse'
};


export default function RankUserList (){
    const {user_nickname, tags} = dummy_rank

    // const [user, setUser] = useState("");
    // const [tag, setTag] = useState("");



    return(
        <List sx={{ width: '100%', maxWidth: 800, bgcolor: 'background.paper', boxShadow: '#d5d5d5 0 0 15px', borderRadius: '1rem' }}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <Typography
                            sx={{ display: 'inline', }}
                        >
                            Rank : Top 1
                        </Typography>
                    }
                    secondary={
                        <React.Fragment>
                            {/*maping 돌려서 12개가 나오겠금*/}
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {user_nickname}
                            </Typography>

                            {/* hastage */}
                            {` — ${tags}` }
                        </React.Fragment>
                    }
                >

                </ListItemText>
            </ListItem>
            <hr/>
        </List>
    )
}