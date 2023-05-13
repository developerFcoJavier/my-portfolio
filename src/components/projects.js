import {Projects} from "../data/projects";

var number = 0;
function Project() {
    return ( 
        <>
            {
                /* Books on desk */
                Projects.map(data =>{
                    const id = number ++;
                    return (
                        <div  key={Math.random().toString()}>
                            <div key={Math.random().toString()} className={`book${id}`}>
                                <a key={Math.random().toString()} href={data.path}>{data.name}</a>
                            </div>
                            <div key={Math.random().toString()} className={`book${id}-ring`}></div>
                        </div>
                    )
                })
            }
            {/* Desktop */}
            <div className="desk"></div>
            <div className="deskcounter"></div>
        </>
    )
}

export default Project;