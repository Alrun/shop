import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  goodsFetchData,
  favouritesFetchData,
  favouritesFail,
  goodsFilterSuccess,
  goodsFilterFail
} from '../../actions/goods';
import Goods from '../../components/Goods';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Call it once in your app. At the root of your app is the best place
toast.configure();

export default function GoodsContainer() {
  const state = useSelector(state => state.goods);
  const dispatch = useDispatch();
  const {items, isLoading, textError, favouritesError} = state;

  const getInitGoods = useCallback(() => {
    dispatch(goodsFetchData());
  }, [dispatch]);

  const notify = msg => toast.error(msg);

  useEffect(() => {
    getInitGoods();
  }, [getInitGoods]);

  useEffect(() => {
    if (favouritesError) {
      notify(favouritesError);
    }
  }, [favouritesError]);

  const handleFavourites = (id, fakeBool) => {
    /**
     * Fake favourites dispatch
     * Dispatch fail, if already in favorites
     */
    if (fakeBool) {
      dispatch(favouritesFail(id));
    } else {
      dispatch(favouritesFetchData(id));
    }
  };

  const handleFilter = list => {
    /**
     * Fake filter dispatch
     * Dispatch fail if 'Canon" isn't checked
     */
    if (list.includes('canon')) {
      dispatch(goodsFilterSuccess(list));
    } else {
      dispatch(goodsFilterFail(list));
    }
  };

  return (
    <div>
      <Goods
        isLoading={ isLoading }
        textError={ textError }
        items={ items }
        handleFilter={ handleFilter }
        handleFavourites={ handleFavourites }
        handleGetInitGoods={ getInitGoods }
      />
    </div>
  );
}