import PropTypes from 'prop-types';

export default function AgreeToDelete({handleCancel, handleDelete}) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Вы уверены, что хотите удалить товар из корзины?</h3>
        <button onClick={handleCancel}>Отмена</button>
        <button onClick={handleDelete}>Удалить</button>
      </div>
    </div>
  )
}

AgreeToDelete.propTypes = {
    handleCancel: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
}