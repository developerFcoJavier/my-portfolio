import { DiGithubBadge } from "react-icons/di";
import { BsLinkedin,BsWhatsapp,BsFillEnvelopeAtFill,BsFilePdf } from "react-icons/bs";
//Import components
import Developer from "../components/developer";
import SnowFlake from "../components/snowflake";
import Title from "../components/title";
import Project from "../components/projects";
import './main.css';
import data from '../data/personalInfo.json';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Contact = () =>{
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return(
        <>
            <div className={`contact${matches ? '-mobile' : ''}`}>
                <h4>Get in touch</h4>
                <li><BsFillEnvelopeAtFill size="20"/> <a href={`mailto: ${data.email}`} target="_blank" rel="noreferrer">{matches ? 'email' : data.email}</a></li>
                <li><BsWhatsapp size="20" /> <a href = {`https://wa.me/${data.phone}`} target="_blank" rel="noreferrer">{matches ? 'phone' : data.phone}</a></li>
                <li><BsFilePdf size="20" /> <a href = {`${data.cvname}`} download>{ matches ? 'CV' :data.cvname}</a></li>
            </div>
            <div className={`social${matches ? '-mobile' : ''}`}>
                <h4>Social Media</h4>
                <li>
                    <a href={`https://${data.github}`} target="_blank" rel="noreferrer">
                        <DiGithubBadge size="30" color="white" />
                    </a>&nbsp;
                    <a href={`https://www.linkedin.com/in/${data.linkedin}`} target="_blank" rel="noreferrer">
                        <BsLinkedin size="20" color="white"/>
                    </a>
                </li>
            </div>
        </>
    );
}

const Main = () => {
    
    return (
        <>
            <div className="container">
                <Title name={data.name} level={data.level}/>
                <div className="developer">
                    <Project/>
                    <Contact/>
                    <Developer/>
                </div>
            </div>
            <SnowFlake/>
        </>
    );
}

export default Main;