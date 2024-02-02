/* eslint-disable react/prop-types */


function Card(props) {

    return (
        <div className="singleCard">
            <h4>{props.label}</h4>
            <p>{props.price}$</p>
            <p>{props.description}</p>
            <label htmlFor="count">Amount</label>
            <input type="number" id="count" min={1} max={10} onChange={props.onChange} defaultValue="1"></input>
            <button onClick={props.onClick}>Add to Cart</button>
        </div>
    )
}


export default Card;