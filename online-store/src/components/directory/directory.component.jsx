import CategoryItem from "../category-item/category-item.component";

import './directory.styles.scss';



const Directory = (props) => {
  const categories = props.categories;
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return (
          <CategoryItem key={category.id} category={category} />
        )
      })}
    </div>
  )
}

export default Directory;