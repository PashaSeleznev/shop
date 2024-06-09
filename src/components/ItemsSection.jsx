import PropTypes from 'prop-types';
import Item from './Item';
import { useState, useEffect } from 'react';

export default function ItemsSection({items, onAdd, onShowItem, inAccount}) {
  const [empty, setEmpty] = useState(false)

  useEffect(() => {
    if (items.length === 0) {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  }, [items]);

  return (
    <main>
        {items.map(item => ( 
            <Item 
            key={item.id}
            item = {item}
            onAdd = {onAdd} 
            onShowItem = {onShowItem}
            inAccount = {inAccount}
            />
        ))}

        {empty && <p>По вашему запросу ничего не найдено.</p>}
    </main>
  )
}

ItemsSection.propTypes = {
    items: PropTypes.array.isRequired,
    onAdd: PropTypes.func.isRequired,
    onShowItem: PropTypes.func.isRequired,
    inAccount: PropTypes.bool.isRequired
}