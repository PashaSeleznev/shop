import AgreeToDelete from "./AgreeToDelete"
import PropTypes from 'prop-types';

export default function Account({showDeleteModal, handleCancel, handleDelete}) {
  return (
    <>
      <p>Вход в личный кабинет</p>
      {showDeleteModal && 
      <AgreeToDelete 
        handleCancel = {handleCancel}
        handleDelete = {handleDelete}
      />}
    </>
  )
}

Account.propTypes = {
    handleCancel: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    showDeleteModal: PropTypes.bool.isRequired,
}
