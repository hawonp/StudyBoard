import Container from "@mui/material/Container";
import * as React from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import {Box, Typography} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Button from "@mui/material/Button";
import {useRouter} from "next/router";
import {useState} from "react";



export default function Postedit({ postCard }) {
    const { title, contents, images, tag } = postCard;
    const router = useRouter()

    const [inputTitle, setInputTitle] = useState(title);
    const [inputContents, setInputContents] = useState(contents);
    const [inputImages, setInputImages] = useState(images);
    const [inputTag, setInputTag] = useState(tag);

    const savePost = async () => {
        // TODO: API CALL BACKEND NEED
        // 보낼 데이터는 title, contents, images, tags

        // const result = await fetch('URL', {method: "POST", body: {name: name, email: email, nick: inputNick, tag: inputTag}})
        // // { data: "failed" }
        // if ((await result.json()).data === "failed") { alert("SAVE 실패") }
        // else { router.replace("/user/profile") }

    }

    return (
        <Container>

            <Box style={{border:'0.1rem solid lightgray',
                borderRadius: '4px',marginBottom: '16px', marginTop: '20px', padding: '10px 12px', backgroundColor:'white' }}
            >
                <div style={{marginTop: '8px', marginBottom: '16px', padding: '0.5rem'}}>
                    <Typography variant={"button"}>Post Your Question</Typography>
                </div>


                <TextField style={{ marginTop: '10px', marginBottom: '10px'}} fullWidth id="title" label="Title" variant="outlined"
                           value={inputTitle}
                           onChange={(event) => setInputTitle(event.target.value)} />

                <TextField rows={12} multiline style={{ marginTop: '10px', marginBottom: '10px'}} className="post-text" fullWidth id="title" label="Question?" variant="outlined"
                           //이미지도 들어가야함 그런데 value 두개를 못넣음
                           value={inputContents}
                           onChange={(event) => setInputContents(event.target.value)}/>

                <TextField style={{ marginTop: '10px', marginBottom: '10px'}} fullWidth id="tag" label="#tag" variant="outlined"
                           value={inputTag}
                           onChange={(event) => setInputTag(event.target.value)}/>

                <div style={{ display: 'flex' }} >
                    <label htmlFor="icon-button-file">
                        <input style={{display: 'none'}} accept="image/*" id="icon-button-file" type="file"
                               onChange={(event) => setInputImages(event.target.files[0])}/>
                        <IconButton color="primary" aria-label="upload picture" component="span" >
                            <PhotoCamera />
                        </IconButton>
                    </label>
                    <div style={{ display: 'flex', flex: 1, justifyContent:'end' }}>
                        <Button sx={{borderRadius: '8px',}} variant="contained" color="success"
                                onClick={savePost} >
                            SAVE
                        </Button>
                    </div>

                </div>
            </Box>
        </Container>
    )
}


