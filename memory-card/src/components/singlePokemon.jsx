/* eslint-disable react/prop-types */


export default function Pokemon({name, sprite, onClick}) {
    return (
        <div className="pokemon" onClick={onClick}>
            <h2>{name}</h2>
            <img src={sprite} alt={sprite}/>
        </div>
    )
}