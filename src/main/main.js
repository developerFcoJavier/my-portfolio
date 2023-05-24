import { DiGithubBadge } from "react-icons/di";
import { BsLinkedin,BsWhatsapp,BsFillEnvelopeAtFill } from "react-icons/bs";
//Import components
import Developer from "../components/developer";
import SnowFlake from "../components/snowflake";
import Title from "../components/title";
import Project from "../components/projects";
import './main.css';
import data from '../data/personalInfo.json';

const Contact = () =>{
    return(
        <>
            <div className="contact">
                <h4>Get in touch</h4>
                <li><BsFillEnvelopeAtFill size="20"/> <a href={`mailto: ${data.email}`} target="_blank" rel="noreferrer">{data.email}</a></li>
                <li><BsWhatsapp size="20" /> <a href = {`https://wa.me/${data.phone}`} target="_blank" rel="noreferrer">{data.phone}</a></li>
            </div>
            <div className="social">
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
            <Title/>
            <div className="container">
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