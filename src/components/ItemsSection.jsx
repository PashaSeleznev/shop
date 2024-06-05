import PropTypes from 'prop-types';
import Item from './Item';


export default function ItemsSection({items, onAdd, onShowItem}) {
  return (
    <main>
        {items.map(item => ( 
            <Item 
            key={item.id}
            item = {item}
            onAdd = {onAdd} 
            onShowItem = {onShowItem}
            />
        ))}
    </main>
  )
}

ItemsSection.propTypes = {
    items: PropTypes.array.isRequired,
    onAdd: PropTypes.func.isRequired,
    onShowItem: PropTypes.func.isRequired
}