import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import { Divider } from '@mui/material';
import Button from '@mui/material/Button';
import { BsFillSendFill } from "react-icons/bs";

const ProjectPage = ({content}) => {

    const goProd = (url)=>{ window.open(url)};

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <Card sx={{ minWidth: 275 }}  variant="outlined">
                <CardContent>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        {content.name}
                    </Typography>
                    <Typography variant="h6" align="center" color="textSecondary" paragraph>
                        {content.description}
                    </Typography>
                    <Divider/>
                    <br/>
                    { content.prod && 
                        <>
                            <Typography align="center" >
                                <Button variant="contained" endIcon={<BsFillSendFill />} onClick={()=>goProd(content.prod)}>
                                    View Demo
                                </Button>
                            </Typography>
                        <br/>
                        </>
                    }
                    
                    <Grid container spacing={5}>
                        { content.points ? content.points.map(point =>{ 
                            return(
                                <Grid item xs={matches ? 12 : 6} key={Math.random()}>
                                    <Card>
                                        {point.img !== '' &&
                                            <CardMedia
                                                sx={{ height: 300 }}
                                                image={point.img}
                                                title={`Image property of ${content.property}`}
                                            /> 
                                        }
                                            <CardContent>
                                                <Typography variant="body2" color="text.secondary">
                                                    {point.description}
                                                </Typography>
                                            </CardContent>
                                    </Card>
                                </Grid>
                            )}) : ''
                        }
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}
export default ProjectPage;