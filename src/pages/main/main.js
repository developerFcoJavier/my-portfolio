import { DiGithubBadge } from "react-icons/di";
import { BsLinkedin,BsWhatsapp,BsFillEnvelopeAtFill } from "react-icons/bs";
//Import components
import Developer from "../../components/developer";
import SnowFlake from "../../components/snowflake";
import Title from "../../components/title";
import Project from "../../components/projects";
import './main.css';

function Main() {
    return (
        <>
            <Title/>
            <div className="container">
                <div className="developer">
                    <Project/>
                    <div className="contact">
                        <h4>Get in touch</h4>
                        <li><BsFillEnvelopeAtFill size="20"/> <a href="mailto: developer.fjoh@gmail.com" target="_blank" rel="noreferrer">developer.fjoh@gmail.com</a></li>
                        <li><BsWhatsapp size="20" /> <a href = "https://wa.me/525588359277" target="_blank" rel="noreferrer">+52 5588359277</a></li>
                    </div>
                    <div className="social">
                        <h4>Social Media</h4>
                        <li>
                            <a href="https://developerfcojavier.github.io/my-portfolio/" target="_blank" rel="noreferrer">
                                <DiGithubBadge size="30" color="white" />
                            </a>&nbsp;
                            <a href="https://www.linkedin.com/in/developerfcojavier/" target="_blank" rel="noreferrer"><BsLinkedin size="20" color="white"/></a>
                        </li>
                    </div>
                    <Developer/>
                </div>
            </div>
            <SnowFlake/>
        </>
    );
}

export default Main;