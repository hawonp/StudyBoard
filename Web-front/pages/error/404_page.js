import {Container} from "@mui/material";
import Link from "next/link";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Button from "@mui/material/Button";
export default function Error_404_page() {
    return (
        <Container>
            <div style={{margin: 'auto', height: '600px',
                width: '600px', position: 'relative'}}>
                <div style={{color: 'black',
                    fontSize: '11rem',
                    position:'absolute',
                    left: '27%',
                    top: '8%'}}>4</div>
                <HelpOutlineIcon sx={{ fontSize:'10rem',position:'absolute',
                    left: '42%', top: '15%' ,color: 'black'}}/>
                <div style={{color: 'black',
                    fontSize: '11rem',
                    position:'absolute',
                    left: '68%',
                    top: '8%'}}>4</div>
                <div style={{textAlign: 'center',
                    fontSize: '1.6rem',
                    position:'absolute',
                    left:' 16%',
                    top:' 45%',
                    width:' 75%',}}>Ooops...
                    page not found<p>Let's go&nbsp;
                        <Button
                            sx={{ borderRadius: "20px" }}
                            variant="contained"
                            color="success">
                            <Link href="/"  ><a style={{textDecoration: 'none',  color: 'white'}}>
                                Home
                            </a></Link>
                        </Button> and try from there.</p></div>
            </div>
        </Container>
    );
}
