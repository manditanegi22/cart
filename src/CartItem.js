import React from 'react';

class CartItem extends React.Component{
    render(){
        const {product, onIncreaseQuantity, onDecreaseQuantity, onDeleteQuantity} = this.props;
        const {price,title,qty} = product;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={style.image} /> 
                </div>
                <div className="right-block">
                   <div style={ {fontSize: 25 } }>{title}</div>
                   <div style={ {color: '#777777' } }>Rs {price}</div>
                   <div style={ {color: '#777' } }>Qty: {qty}</div>
                   <div className="cart-item-actions">
                       {/*Buttons*/}
                       <img alt="increase" className="action-icons" src="https://cdn-icons.flaticon.com/png/512/3114/premium/3114793.png?token=exp=1637047895~hmac=a03096f89156bba77eaf2e2df1a13aef" onClick = {() => onIncreaseQuantity(product)} />
                       <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png" onClick = {() => onDecreaseQuantity(product)} />
                       <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/3096/3096687.png" onClick = {() => onDeleteQuantity(product.id)} />
                   </div>
                </div>
            </div>
        );
    }
}

const style = {
    image : {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;