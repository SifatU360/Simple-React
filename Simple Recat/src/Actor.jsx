export default function Actor({actor}) {
    return(
        <div className="actor-card">
            <h2>Actor Name: {actor.name}</h2>
            <h3>Age: {actor.age}</h3>
            <h4>Best Movie: {actor.bestMovie}</h4>
        </div>
    )
}