import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

// import UPDATE_CATEGORIES and UPDATE_CURRENT_CATEGORY actions from categorySlice
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../redux/features/categorySlice';
// read data from the store with useSelector, and dispatch actions using useDispatch
import { useSelector, useDispatch } from 'react-redux';

function CategoryMenu() {
  // read data from the store with the useSelector hook
  const { categories } = useSelector(state => state.category);
  // get the dispatch function with the useDispatch hook, and dispatch actions as needed
  const dispatch = useDispatch();

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    // if categoryData exists or has changed from the response of useQuery, then run dispatch()
    if (categoryData) {
      // execute our dispatch function with our action object indicating the type of action and the data to set our state for categories to
      dispatch(UPDATE_CATEGORIES({
        categories: categoryData.categories
      }));
      categoryData.categories.forEach(category => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then(categories => {
        dispatch(UPDATE_CATEGORIES({
          categories: categories
        }));
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = id => {
    dispatch(UPDATE_CURRENT_CATEGORY({
      currentCategory: id
    }));
  };

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map(item => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
