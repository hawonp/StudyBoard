import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import * as React from "react";

export default function SettingUpNickTag () {
    return(
        <>
            <div style={{ display: 'flex' }}>
                <div  >
                    <h3 >
                        Welcome to StudyBoard
                    </h3>
                    <h5 >
                        You need to set the NickName and Tags
                    </h5>
                </div>
            </div>

            <hr style={{margin: '0px', flexShrink: '0', borderWidth: '0px 0px thin',
                borderStyle: 'solid', marginBottom: '10px', opacity: 1, borderColor: 'rgb(227, 242, 253)'
            }}/>

            <div>
                <TextField sx={{marginBottom: '10px', marginTop:'8px'}}
                           fullWidth
                           id="outlined-disabled"
                           label="Type the NickName"
                />
                <TextField sx={{marginBottom: '10px', marginTop:'8px'}}
                           fullWidth
                           id="outlined-disabled"
                           label="HashTag"
                />
            </div>
            <div style={{ display: 'flex', flex: 1, justifyContent:'end' }}>
                <Button sx={{borderRadius: '8px',}} variant="contained" color="success" >
                    Save
                </Button>
            </div>
        </>
    )
}