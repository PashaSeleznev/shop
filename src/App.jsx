import MainPage from "./components/MainPage"
import Header from "./components/header"
import Footer from "./components/Footer"
import { items } from "./data"
import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacts from "./components/Contacts"
import Account from "./components/Account"


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
    <Router>
      <div className="wrapper">
        <Header orders = {orders} onDelete = {deleteOrder} plus = {plus} minus = {minus} ></Header>
        <Routes> 
          
          <Route path="/"
          element={
            <MainPage 
            currentItems = {currentItems}
            addToOrder = {addToOrder}
            onShowItem = {onShowItem}
            closeItem = {closeItem}
            handleCancel = {handleCancel}
            handleDelete = {handleDelete}
            showFullItem = {showFullItem}
            showDeleteModal = {showDeleteModal}
            chooseCategory = {chooseCategory} 
            fullItem = {fullItem}
            />
          } />

          <Route path="/contacts" 
          element = {
            <Contacts 
            handleCancel = {handleCancel}
            handleDelete = {handleDelete}
            showDeleteModal = {showDeleteModal}
            />
          }/>

          <Route path="/account" 
          element = {
            <Account 
            handleCancel = {handleCancel}
            handleDelete = {handleDelete}
            showDeleteModal = {showDeleteModal}
            />
          }/>

        </Routes> 
        
        <Footer></Footer>
      </div>
    </Router>
  )
}

export default App
