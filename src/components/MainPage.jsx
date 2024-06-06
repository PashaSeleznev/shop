import ItemsSection from "./ItemsSection"
import Categories from "./Categories"
import ShowFullItem from "./ShowFullItem"
import AgreeToDelete from "./AgreeToDelete"
import PropTypes from 'prop-types';
import Search from "./Search";

export default function MainPage ({
    chooseCategory,
    findItem, 
    currentItems,
    addToOrder,
    onShowItem,
    fullItem,
    closeItem,
    handleCancel,
    handleDelete,
    showFullItem,
    showDeleteModal,
}) {
  
  return (
    <>
      <Categories chooseCategory = {chooseCategory}/>
      <Search findItem = {findItem}/>
      <ItemsSection items = {currentItems} onAdd = {addToOrder} onShowItem = {onShowItem} ></ItemsSection>
      {showFullItem && <ShowFullItem item = {fullItem} onAdd = {addToOrder} onShowItem = {onShowItem} closeItem = {closeItem} />}
      {showDeleteModal && 
      <AgreeToDelete 
        handleCancel = {handleCancel}
        handleDelete = {handleDelete}
      />}
    </>
  )
}

MainPage.propTypes = {
    chooseCategory: PropTypes.func.isRequired,
    findItem: PropTypes.func.isRequired,
    currentItems: PropTypes.array.isRequired,
    addToOrder: PropTypes.func.isRequired,
    onShowItem: PropTypes.func.isRequired,
    fullItem: PropTypes.object.isRequired,
    closeItem: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    showFullItem: PropTypes.bool.isRequired,
    showDeleteModal: PropTypes.bool.isRequired,
}