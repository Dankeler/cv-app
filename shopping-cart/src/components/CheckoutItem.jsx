import "../styles/CheckoutItem.css"
/* eslint-disable react/prop-types */

function CheckoutItem(props) {
    return (
        <div className="item-checkout">
            <div className="item-text">
                <h3>{props.title}</h3>
                <h4>{props.price}</h4>
                <h2>{props.amount}</h2>
            </div>
            <div className="item-button">
                <button onClick={props.onClick} className="btn">Remove</button>
            </div>
        </div>
    )
}

export default CheckoutItem;