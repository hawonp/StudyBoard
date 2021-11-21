import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import Chip from '@mui/material/Chip';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: alpha(theme.palette.common.black, 0.15),
    // '&:hover': {
    //     backgroundColor: alpha(theme.palette.common.black, 0.25),
    // },
    // backgroundColor: 'lightgray',
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
    },
}));

export default function SearchBar() {
    return (
        <Search>
            {/* <SearchIconWrapper>
                <SearchIcon />:{ tag: string; post: string; }:string
            </SearchIconWrapper> */}

            <Autocomplete
                multiple
                id="tags"
                options={popularTag}
                getOptionLabel={(options) => options.tag}
                defaultValue={[popularTag[5]]}
                filterSelectedOptions
                renderInput={(params) => <TextField {...params} label="Search" placeholder="Search for what you want" />}
            />

            {/* <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} /> */}
        </Search>
    );
}
const popularTag = [
    { tag: 'something', post: 1994 },
    { tag: 'tag', post: 1972 },
    { tag: 'something', post: 1974 },
    { tag: 'tag', post: 2008 },
    { tag: 'something', post: 1957 },
    { tag: 'something', post: 1994 },
    { tag: 'tag', post: 1972 },
    { tag: 'something', post: 1974 },
    { tag: 'tag', post: 2008 },
    { tag: 'something', post: 1957 },
    { tag: 'tags', post: 1993 },
    { tag: 'MATH Tag', post: 1994 },
];
