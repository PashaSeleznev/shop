import { useState } from "react"
import PropTypes from 'prop-types';
import Order from "./Order";

export default function Header({orders, onDelete, plus, minus}) {
  const [cartOpen, setCartOpen] = useState(false)

  function summary (orders) {
    let sum = 0
    orders.forEach((el) => {
      sum += el.price*el.quantity
    })
    return sum
  }

  return (
    <header>
        <div>
            <span className='logo'>House Staff</span>

            <ul className="nav">
              <li>Про нас</li>
              <li>Контакты</li>
              <li>Кабинет</li>
            </ul>

            <img 
            src="/src/images/shopping-basket.png" 
            alt="" 
            onClick={() => setCartOpen(!cartOpen)} 
            className={cartOpen ? "shop-cart-button active" : "shop-cart-button"} 
            />

            {cartOpen && (
              <div className="shop-cart">
                {orders.length > 0 ?
                <ul>
                  {orders.map(item => 
                  <Order 
                  key={item.id} 
                  item = {item} 
                  onDelete = {onDelete} 
                  plus={plus} 
                  minus={minus} 
                  />)}
                  <p className="sum">Сумма: {summary(orders).toFixed(2)} RUB</p>
                </ul> :
                <h2 className="empty">В корзине ничего нет!</h2>}
              </div>
            )}
        </div>
        <div className='presentation'>

        </div>
    </header>
  )
}

Header.propTypes = {
  orders: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  plus: PropTypes.func.isRequired,
  minus: PropTypes.func.isRequired
}
