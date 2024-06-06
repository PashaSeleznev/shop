import { useRef } from "react"
import PropTypes from 'prop-types';

export default function Search({findItem}) {
  const filter = useRef()  
  return (
    <input 
    className="search-form" 
    type="text" 
    placeholder="Введите название товара"
    ref = {filter}
    onInput={() => findItem(filter.current.value)}
    />

  )
}

Search.propTypes = {
    findItem: PropTypes.func.isRequired,
}
