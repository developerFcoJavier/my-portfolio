import {Projects} from "../data/projects";
import FullScreenDialog from './dialog';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const ProjectList = ({projects,matches})=>{ 

    var number = 1;
    const styleByElement = (element,id,color='')=>{
        
        switch(element){
            case 'book':
                return {
                    position: 'absolute',
                    height: `${matches ? '23.5':'25'}px`,
                    width: `${matches ? '110':'115'}px`,
                    backgroundColor: color,
                    bottom: `${195+(id*24)}px`,
                    left: `${matches ? '225':'420'}px`,
                    borderRadius: '12%',
                    textAlign: 'end',
                    paddingRight: '5px',
                    zIndex:10
                }
            case 'book-ring':
                return {
                    position: 'absolute',
                    width: '10px',
                    height: '10px',
                    background: '#4b4848',
                    borderRadius: '50%',
                    bottom: `${200+(id*25)}px`,
                    left: `${matches ? '227':'423'}px`,
                    opacity: 0.6,
                    zIndex:11
                }
            default: return ''
        }

    }

    return (
        <>
            {/* Books on desk */
                projects.map(project =>{ 
                    const id = number ++;
                    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase()}`;
                    return(
                        <div  key={Math.random().toString()}>
                            <div style={styleByElement('book',id,randomColor)}>
                                <FullScreenDialog project={project} color={randomColor}/>
                            </div>
                            <div style={styleByElement('book-ring',id)}></div>
                        </div>
                )})
            }
        </>
    )
}

const Project= () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return ( 
        <>  
            <ProjectList projects={Projects} matches={matches}/>
            {/* Desktop */}
            <div className={`desk${matches ? '-mobile' : ''}`}></div>
            <div className={`deskcounter${matches ? '-mobile' : ''}`}></div>
        </>
    )
}

export default Project;