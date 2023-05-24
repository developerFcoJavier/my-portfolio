import {Projects} from "../data/projects";
import FullScreenDialog from './dialog';

const ProjectList = ({projects})=>{ 

    var number = 1;

    const styleByElement = (element,id,color='')=>{
        
        switch(element){
            case 'book':
                return {
                    position: 'absolute',
                    height: `25px`,
                    width: `115px`,
                    backgroundColor: color,
                    bottom: `${195+(id*26.5)}px`,
                    left: '420px',
                    borderRadius: '12%',
                    textAlign: 'end',
                    paddingRight: '15px',
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