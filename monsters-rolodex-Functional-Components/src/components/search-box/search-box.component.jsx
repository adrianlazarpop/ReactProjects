import './search-box.styles.scss';

const SearchBox = (props) => {
  return (
    <input
      className={`search-box ${props.className}`}
      type='search'
      placeholder={props.placeholder}
      onChange={props.onChangeHandler}
    />
  )

}


export default SearchBox;