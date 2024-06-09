import PropTypes from 'prop-types';
import ToLoginModal from './ToLoginModal';
import { useState } from 'react';

export default function Item({item, onAdd, onShowItem, inAccount}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleAddClick = () => {
    if (!inAccount) {
      setIsModalOpen(true);
    } else {
      onAdd(item);
    }
  };

  function closeModal () {
    setIsModalOpen(false)
  }

  return (
    <div className="item">
        {isModalOpen && <ToLoginModal closeModal={closeModal} />}
        <img src={item.img} alt="" onClick={() => onShowItem(item)} />
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <b>{item.price} RUB</b>
        <div className="add-to-cart" onClick={handleAddClick}>+</div>
    </div>
  )
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
    onAdd: PropTypes.func.isRequired,
    onShowItem: PropTypes.func.isRequired,
    inAccount: PropTypes.bool.isRequired
}