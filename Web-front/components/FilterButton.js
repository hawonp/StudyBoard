import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {InputLabel, Select} from "@mui/material";

export default function FilterButton () {
    //자기가 원하는 태그
    const [preferred, setPreferred] = React.useState('');


    const handleChange = (event) => {
        setPreferred(event.target.value);
    };
    return(

        <Stack direction="row" spacing={1}>
            <Chip
                label="Recently"
                component="a"
                href="#basic-chip"
                variant="outlined"
                clickable
            />
            <Chip
                label="Most popular"
                component="a"
                href="#basic-chip"
                variant="outlined"
                clickable
            />

            {/*<InputLabel id="preferred tags">Age</InputLabel>*/}
            <Select
                sx ={{borderRadius:'16px',maxWidth:'auto', maxHeight:"32px"}}
                labelId="preferred tags"
                id="preferred tags"
                variant="outlined"
                value={preferred}
                onChange={handleChange}
            >
                <MenuItem value={10}>Something</MenuItem>
                <MenuItem value={20}>Something</MenuItem>
                <MenuItem value={30}>Something</MenuItem>
            </Select>
        </Stack>
    )

}