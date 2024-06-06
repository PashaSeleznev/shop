import { useRef, useState, useEffect } from "react"
import PropTypes from 'prop-types';
import store from "store";

export default function Search({ findItem }) {
  const [filter, setFilter] = useState(store.get("filter") || "");
  const input = useRef();

  useEffect(() => {
    input.current.value = filter
  }, [filter])

  function handleInputChange () {
    const value = input.current.value;
    setFilter(value);
    store.set("filter", value);
    findItem(value);
  }

  return (
    <input
      className="search-form"
      type="text"
      placeholder="Введите название товара"
      ref={input}
      onChange={handleInputChange}
    />
  );
}

Search.propTypes = {
    findItem: PropTypes.func.isRequired,
}
