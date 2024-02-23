import ItemList from "./ItemList"

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <>
      {items.length ? (   
        <ItemList 
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <h2>
          There is no item in the list!
        </h2>
      )}
    </>
  )
}

export default Content



