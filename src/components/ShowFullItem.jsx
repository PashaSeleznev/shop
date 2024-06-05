import PropTypes from 'prop-types';

export default function ShowFullItem({item, onShowItem, onAdd, closeItem}) {
  return (
    <div className='full-item'>
        <div>
            <div className="close" onClick={() => closeItem()}>Закрыть</div>
            <img src={item.img} alt="" onClick={() => onShowItem(item)} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <b>{item.price} RUB</b>
            <div className="add-to-cart" onClick={() => onAdd(item)}>+</div>
        </div>
    </div>
  )
}

ShowFullItem.propTypes = {
    item: PropTypes.object.isRequired,
    onAdd: PropTypes.func.isRequired,
    onShowItem: PropTypes.func.isRequired,
    closeItem: PropTypes.func.isRequired,
}
