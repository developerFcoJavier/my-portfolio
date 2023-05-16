import {Projects} from "../data/projects";

const ProjectList = ({projects})=>{ 

    const styleByElement = (element,id,name='')=>{
        
        switch(element){
            case 'book':
                return {
                    position: 'absolute',
                    height: `25px`,
                    width: `115px`,
                    backgroundColor: `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase()}`,
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

    var number = 1;
    return (
        <>
            {/* Books on desk */
                projects.map(project =>{ 
                    const id = number ++;
                    return(
                        <div  key={Math.random().toString()}>
                            <div style={styleByElement('book',id)}>
                                <a style={styleByElement('book-a',id,project.name)} href={project.path}>{project.name}</a>
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