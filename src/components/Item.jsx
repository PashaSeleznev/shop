import PropTypes from 'prop-types';

export default function Item({item, onAdd, onShowItem}) {
  return (
    <div className="item">
        <img src={item.img} alt="" onClick={() => onShowItem(item)} />
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <b>{item.price} RUB</b>
        <div className="add-to-cart" onClick={() => onAdd(item)}>+</div>
    </div>
  )
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
    onAdd: PropTypes.func.isRequired,
    onShowItem: PropTypes.func.isRequired,
}