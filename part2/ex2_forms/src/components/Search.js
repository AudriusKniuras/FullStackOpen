const Search = (props) => {
  return (
    <div>
      filter by name: <input value={newNameFilter} onChange={handleNameFilterInput} />
    </div>
  )
}

export default Search;