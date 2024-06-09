import { useState } from "react"
import PropTypes from 'prop-types';
import Order from "./Order";
import { Link, useLocation } from "react-router-dom";

export default function Header({orders, onDelete, plus, minus, inAccount}) {
  const [cartOpen, setCartOpen] = useState(false)
  const location = useLocation()

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
              <li><Link 
              className={ location.pathname === '/' ? 'menu-link active' : 'menu-link'} 
              to = '/'
              >Главная
              </Link></li>

              <li><Link 
              className={ location.pathname === '/contacts' ? 'menu-link active' : 'menu-link'} 
              to = '/contacts'
              >Контакты
              </Link></li>

              <li><Link 
              className={ location.pathname === '/account' ? 'menu-link active' : 'menu-link'} 
              to = '/account'
              >Кабинет
              </Link></li>
            </ul>

            <img 
            src="/src/images/shopping-basket.png" 
            alt="" 
            onClick={() => setCartOpen(!cartOpen)} 
            className={cartOpen ? "shop-cart-button active" : "shop-cart-button"} 
            />

            {cartOpen && (
              <div className="shop-cart">
                {(orders.length > 0 && inAccount) ?
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
  minus: PropTypes.func.isRequired,
  inAccount: PropTypes.bool.isRequired,
}
