import PropTypes from 'prop-types';

export default function Order({item, onDelete, plus, minus}) {
  return (
    <div className="item">
      <img src={item.img} alt="" />
        <h2>{item.title}</h2>
        <p>{item.price} RUB</p>
        <div className="item-buttons">
            <span className='counter'>
              <img className='up-btn' src="/src/images/up.png" alt="" onClick={() => plus(item.id)} />
              {item.quantity}
              <img className='down-btn' src="/src/images/down.png" alt="" onClick={() => minus(item.id)} />
              </span>
            <img src="/src/images/recycle-bin.png" alt="" className="delete-img" onClick={() => onDelete(item.id)} />
        </div>
    </div>
  )
}
Order.propTypes = {
    item: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    plus: PropTypes.func.isRequired,
    minus: PropTypes.func.isRequired
}