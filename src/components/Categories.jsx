import PropTypes from 'prop-types';

export default function Categories({chooseCategory}) {
  const categories = [
    {
        key: 'all',
        name: 'Все категории'
    },
    {
        key: 'chairs',
        name: 'Стулья'
    },
    {
        key: 'armchairs',
        name: 'Кресла'
    },
    {
      key: 'tables',
      name: 'Столы'
    },
    {
      key: 'beds',
      name: 'Кровати'
    },
    {
      key: 'sofas',
      name: 'Диваны'
    },

  ] 
  return (
    <div className="categories">
        {categories.map(el => (
            <div key={el.key} onClick={() => chooseCategory(el.key)}>{el.name}</div>
        ))}
    </div>
  )
}

Categories.propTypes = {
    chooseCategory: PropTypes.func.isRequired
}