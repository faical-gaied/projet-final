import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
function Item(props) {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img src={props.image}/></Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
            {props.new_price}Dt
        </div>
        <div className="item-price-old">
            {props.old_price}Dt

        </div>

      </div>
    </div>
  )
}

export default Item
