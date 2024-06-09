import PropTypes from 'prop-types';
import { useState } from 'react';
import ToLoginModal from './ToLoginModal';

export default function ShowFullItem({item, onShowItem, onAdd, closeItem, inAccount}) {

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
    <div className='full-item'>
        <div>
            {isModalOpen && <ToLoginModal closeModal={closeModal} />}
            <div className="close" onClick={() => closeItem()}>Закрыть</div>
            <img src={item.img} alt="" onClick={() => onShowItem(item)} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <b>{item.price} RUB</b>
            <div className="add-to-cart" onClick={handleAddClick}>+</div>
        </div>
    </div>
  )
}

ShowFullItem.propTypes = {
    item: PropTypes.object.isRequired,
    onAdd: PropTypes.func.isRequired,
    onShowItem: PropTypes.func.isRequired,
    closeItem: PropTypes.func.isRequired,
    inAccount: PropTypes.bool.isRequired
}
