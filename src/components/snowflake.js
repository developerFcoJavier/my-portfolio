import {SnowFlakes} from "../data/snowflakes";

const SnowFlake = () => {
    return (
        <div className="snowflakes" aria-hidden="true">
            {
                SnowFlakes.map(data => <div key={Math.random().toString()} className="snowflake">{data.element}</div>)
            }
        </div>
    )
}
export default SnowFlake;