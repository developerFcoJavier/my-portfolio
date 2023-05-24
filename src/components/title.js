const Title = ({name,level}) => {
    return (
        <>
            <div className="title">
                <h1>{name}</h1>
                <h3 style={{marginTop: "-26px"}}> {level}</h3>
            </div>
        </>
    )
}
export default Title;