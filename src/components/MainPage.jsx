import ItemsSection from "./ItemsSection"
import Categories from "./Categories"
import ShowFullItem from "./ShowFullItem"
import AgreeToDelete from "./AgreeToDelete"
import { items } from "../data"
import PropTypes from 'prop-types';
import Search from "./Search";
import { useState, useEffect } from "react";
import store from "store"

export default function MainPage ({
    addToOrder,
    handleCancel,
    handleDelete,
    showDeleteModal,
}) {
  
  const [showFullItem, setShowFullItem] = useState(false) 
  const [fullItem, setFullItem] = useState({})
  const newItems = items.map(item => ({ ...item, quantity: 0 }));
  const storedCurrentItems = store.get('currentItems') || newItems
  const [currentItems, setCurrentItems] = useState(storedCurrentItems)
  const [filteredByCategory, setFilteredByCategory] = useState(newItems)

  useEffect(() => {
    store.set('currentItems', currentItems);
  }, [currentItems]);

  function onShowItem (item) {
    setFullItem(item)
    setShowFullItem(true)
  }

  function closeItem () {
    setShowFullItem(!showFullItem)
  }

  function chooseCategory (category) {
    const filteredItems = newItems.filter((el) => (
      el.category.includes(' ' + category + ' ')
    ))
    setCurrentItems(filteredItems)
    setFilteredByCategory(filteredItems)
  }
  
  function findItem (text) {
    const value = text.toLowerCase()
    const filteredItems = filteredByCategory.filter((el) => (
      el.title.toLowerCase().includes(value)
    ))
    setCurrentItems(filteredItems)
  }

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
    addToOrder: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    showDeleteModal: PropTypes.bool.isRequired,
}