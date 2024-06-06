import MainPage from "./components/MainPage"
import Header from "/src/components/Header"
import Footer from "./components/Footer"
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacts from "./components/Contacts"
import Account from "./components/Account"
import store from "store"


function App() {
  const storedOrders = store.get('orders') || [];
  const [orders, setOrders] = useState(storedOrders)
 
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [deleteItemId, setDeleteItemId] = useState(0)

  useEffect(() => {
    store.set('orders', orders);
  }, [orders]); 

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


  return (
    <Router>
      <div className="wrapper">
        <Header orders = {orders} onDelete = {deleteOrder} plus = {plus} minus = {minus} ></Header>
        <Routes> 
          
          <Route path="/"
          element={
            <MainPage 
            addToOrder = {addToOrder}
            handleCancel = {handleCancel}
            handleDelete = {handleDelete}
            showDeleteModal = {showDeleteModal}
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
