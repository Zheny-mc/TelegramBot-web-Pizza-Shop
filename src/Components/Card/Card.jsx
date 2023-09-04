import React, {useState} from 'react'
import "./Card.css"
import Button from '../Button/Button';

function Card({food, onAdd, onRemove}) {
    const [count, setCount] = useState(0);

    const {id, title, price, Image} = food

    const handlerIncrement = () => {
        setCount(count + 1)
        onAdd(food)
    } 

    const handlerDecrement = () => {
        setCount(count - 1)
        onRemove(food)
    } 

    return (
        <div className='card'>
            <span className={`${count > 0 ? "card__badge" : "card__badge--hidden"}`}>
                {count}
            </span>
            <div className="image__container">
                <img src={Image} alt={title} />
            </div>
            <h4 className='card__title'>
                {title} . <span className='card__price'>{price} $</span>
            </h4>

            <div className="btn-container">
                <Button title={'+'} type={'add'} onClick={handlerIncrement}/>
                {count > 0 ? (
                    <Button title={'-'} type={'remove'} onClick={handlerDecrement}/>
                ) : ""}
            </div>


        </div>
    )
}

export default Card