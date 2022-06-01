import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import '../../styles/CategoryMenu.scss';

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  // hamburger menu --- might return

  // return (
  //   <section class="top-nav">
  //   <div>
  //     <h2>Categories:</h2>
  //   </div>
  //   <input id="menu-toggle" type="checkbox" />
  //   <label class='menu-button-container' for="menu-toggle">
  //   <div class='menu-button'></div>
  //   </label>
  //   <ul class="menu">
  //     <li>
  //       <div>
  //         {categories.map((item) => (
  //           <button key={item._id} onClick={() => {handleClick(item._id);}}> {item.name}</button>
  //         ))}
  //       </div>
  //   </li>
  //   </ul>
  //   </section>
  // );

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map((item) => (
        <button key={item._id} onClick={() => {handleClick(item._id);}}> {item.name}</button>
      ))}
    </div>
  );

  
}

export default CategoryMenu;
