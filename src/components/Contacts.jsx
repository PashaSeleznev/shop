import AgreeToDelete from "./AgreeToDelete"
import PropTypes from 'prop-types';

export default function Contacts({showDeleteModal, handleCancel, handleDelete}) {
  return (
    <>
      <p>Контакты</p>
      {showDeleteModal && 
      <AgreeToDelete 
        handleCancel = {handleCancel}
        handleDelete = {handleDelete}
      />}
    </>
  )
}

Contacts.propTypes = {
    handleCancel: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    showDeleteModal: PropTypes.bool.isRequired,
}
