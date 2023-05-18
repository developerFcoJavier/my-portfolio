import {Projects} from "../data/projects";
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const ProjectList = ({projects})=>{ 

    var number = 1;

    const styleByElement = (element,id,name='')=>{
        
        const randomColor = `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase()}`;

        switch(element){
            case 'book':
                return {
                    position: 'absolute',
                    height: `25px`,
                    width: `115px`,
                    backgroundColor: randomColor,
                    bottom: `${195+(id*26.5)}px`,
                    left: '420px',
                    borderRadius: '12%',
                    textAlign: 'end',
                    paddingRight: '15px',
                }
            case 'book-a':
                return {
                    color: '#fff',
                    fontFamily:' Arial, sans-serif, cursive',
                    textShadow: '0 0 4px #000000',
                    // fontFamily: 'Pacifico',
                    fontSize: `${name.length >= 11 ? '9px' : '12px'}`,
                    zIndex: 1,
                }
            case 'book-ring':
                return {
                    position: 'absolute',
                    width: '10px',
                    height: '10px',
                    background: 'grey',
                    borderRadius: '50%',
                    bottom: `${200+(id*27)}px`,
                    left: '423px',
                    zIndex: 1,
                    opacity: 0.6,
                }
            default: return ''
        }

    }

    return (
        <>
            {/* Books on desk */
                projects.map(project =>{ 
                    const id = number ++;
                    return(
                        <div  key={Math.random().toString()}>
                            <HtmlTooltip title={<TooltipContent project={project}/>} placement="right" arrow>
                                <div style={styleByElement('book',id)}>
                                    <a style={styleByElement('book-a',id,project.name)} href={project.path}>{project.name}</a>
                                </div>
                            </HtmlTooltip>
                            <div style={styleByElement('book-ring',id)}></div>
                        </div>
                )})
            }
        </>
    )
}

const TooltipContent = ({project})=>{
    return(
        <>
            <h1>{project.name}</h1>
            <p>{project.tooltip}</p>
        </>
    );
}

const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 280,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
}));


const Project= () => {
    return ( 
        <>
            <ProjectList projects={Projects}/>
            {/* Desktop */}
            <div className="desk"></div>
            <div className="deskcounter"></div>
        </>
    )
}

export default Project;