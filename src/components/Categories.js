import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Category.css';
import { checkStatus } from '../redux/categories/categoriesSlice'; // import the categoriesSlice and its actions

function Categories() {
  const dispatch = useDispatch();

  // get the categories state from the store
  const categories = useSelector((state) => state.categories.categories);

  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <button type="button" className="btn btn-status" style={{ marginTop: '5rem', backgroundColor: '#009FBD', fontSize: '17px' }} onClick={handleClick}>
        Check Status
      </button>
      <ul className="underUl">
        {categories.map((category) => (
          <li className="underLi" key={category.value}>{category.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
