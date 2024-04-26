import React, {useState} from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
const FoodItem = ({id,name,price,image,description}) => {
    const [itemCount, setitemCount] = useState(0)
  return (
    <div className='food-item'>
        <div className='food-item-img-container'>
            <img className='food-item-img' src={image} alt="" />
            {!itemCount? <img className='add' src={assets.add_icon_white} alt=''/>:
            <div className='food-item-counter'>
                </div>}
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">Rs {price}</p>
        </div>
    </div>
  )
}

export default FoodItem