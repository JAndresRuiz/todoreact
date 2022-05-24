import React from 'react'
import '../Styles/TodoSearch.css';

const TodoSearch = ({searchValue, setSearchValue}) => {
  const onSearchValue = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <>
      <input className='searchInput' type='text' placeholder='Tareas' value={searchValue} onChange={onSearchValue} />
    </>
  )
}

export { TodoSearch }