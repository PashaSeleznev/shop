import Header from "./components/Header"
import Footer from "./components/Footer"
import ItemsSection from "./components/ItemsSection"
import { items } from "./data"
import { useState } from "react"
import Categories from "./components/Categories"
import ShowFullItem from "./components/ShowFullItem"
import AgreeToDelete from "./components/AgreeToDelete"

function App() {
  const [orders, setOrders] = useState([])
  const newItems = items.map(item => ({ ...item, quantity: 0 }));
  const [currentItems, setCurrentItems] = useState(newItems)
  const [showFullItem, setShowFullItem] = useState(false) 
  const [fullItem, setFullItem] = useState({})
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [deleteItemId, setDeleteItemId] = useState(0)

  function addToOrder (item) {
    let isInArray = false
    const updatedOrders = orders.map (el => {
      if (el.id === item.id) {
        isInArray = true
        return {...el, quantity: el.quantity + 1}
      }
      return el
    })
    if (!isInArray) {
      setOrders([...orders, {...item, quantity: 1}])
    } else {
      setOrders(updatedOrders)
    }
  }

  function deleteOrder (id) {
    setDeleteItemId(id)
    setShowDeleteModal(true)
  }

  function handleDelete () {
    const filteredOrders = orders.filter((el) => (
      el.id !== deleteItemId
    ))
    setShowDeleteModal(false)
    setOrders(filteredOrders)
  }

  function handleCancel () {
    setShowDeleteModal(false)
    setDeleteItemId(0)
  }

  function onShowItem (item) {
    setFullItem(item)
    setShowFullItem(true)
  }

  function closeItem () {
    setShowFullItem(!showFullItem)
  }

  function plus (id) {
    const updatedOrders = orders.map (el => {
      if (el.id === id) {
        return {...el, quantity: el.quantity + 1}
      }
      return el
    })
    setOrders(updatedOrders)
  }

  function minus (id) {
    let remove = false
    const updatedOrders = orders.map (el => {
      if (el.id === id) {
        if (el.quantity == 1) {
          remove = true
        }
        return {...el, quantity: el.quantity - 1}
      }
      return el
    })
    if (remove) {
      deleteOrder(id)
    } else {
      setOrders(updatedOrders)
    }
  }

  function chooseCategory (category) {
    const filteredItems = newItems.filter((el) => (
      el.category.includes(' ' + category + ' ')
    ))
    setCurrentItems(filteredItems)
  }

  return (
    <div className="wrapper">
      <Header orders = {orders} onDelete = {deleteOrder} plus = {plus} minus = {minus}></Header>
      <Categories chooseCategory = {chooseCategory}/>
      <ItemsSection items = {currentItems} onAdd = {addToOrder} onShowItem = {onShowItem}></ItemsSection>
      {showFullItem && <ShowFullItem item = {fullItem} onAdd = {addToOrder} onShowItem = {onShowItem} closeItem = {closeItem} />}
      {showDeleteModal && 
      <AgreeToDelete 
        handleCancel = {handleCancel}
        handleDelete = {handleDelete}
      />}
      <Footer></Footer>
    </div>
  )
}

export default App
