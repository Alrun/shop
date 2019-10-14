import { C } from './index';
import axios from 'axios';

const API = `https://my-json-server.typicode.com/aero-frontend/test-task`;

export const goodsFetchSuccess = response => ({
  type: C.GOODS_FETCH_SUCCESS,
  response
});

export const goodsLoading = bool => ({
  type: C.GOODS_LOADING,
  bool
});

export const goodsError = msg => ({
  type: C.GOODS_ERROR,
  msg
});

export const favouritesFetchSuccess = (id, bool) => ({
  type: C.FAVOURITES_FETCH_SUCCESS,
  id,
  bool
});

export const favouritesFetchFail = msg => ({
  type: C.FAVOURITES_FETCH_FAIL,
  msg
});

export const favouritesErrorClear = () => ({
  type: C.FAVOURITES_ERROR_CLEAR
});

export const favouritesFetchData = id => {
  return async dispatch => {
    dispatch(favouritesErrorClear());

    try {
      let response = await axios.get(`${ API }/FAVORITE_SUCCESS?productID=${ id }`);

      if (response.data.success) {
        dispatch(favouritesFetchSuccess(id, response.data.data.inFav));
      } else {
        dispatch(favouritesFetchFail('Error'));
        console.error('Error');
      }
    } catch (err) {
      dispatch(favouritesFetchFail(err));
      console.error(err);
    }
  };
};

export const favouritesFail = id => {
  return async dispatch => {
    dispatch(favouritesErrorClear());

    try {
      let response = await axios.get(`${ API }/FAVORITE_FAIL?productID=${ id }`);

      if (response.data.success) {
        dispatch(favouritesFetchFail(response.data.data.message));
        console.error(response.data.data.message);
      } else {
        dispatch(favouritesFetchFail('Error'));
        console.error('Error');
      }
    } catch (err) {
      dispatch(favouritesFetchFail(err));
      console.error(err);
    }
  };
};

export const goodsFilterSuccess = list => {
  return async dispatch => {
    dispatch(goodsLoading(true));

    try {
      let response = await axios.get(`${ API }/FILTER_SUCCESS?filters=${ list.join('-') }`);

      if (response.data.success) {
        dispatch(goodsFetchSuccess(response.data.data.products));
      } else {
        dispatch(goodsError('Error'));
        console.error('Error');
      }
    } catch (err) {
      dispatch(goodsError(err));
      console.error(err);
    }

    dispatch(goodsLoading(false));
  };
};

export const goodsFilterFail = list => {
  return async dispatch => {
    dispatch(goodsLoading(true));

    try {
      let response = await axios.get(`${ API }/FILTER_FAIL?filters=${ list.join('-') }`);

      if (response.data.success) {
        dispatch(goodsError('Для отображения FILTER_SUCCESS необходимо чтобы Canon был в списке фильтра.'));
        console.error(response.data.data.message);
      } else {
        dispatch(goodsError('Error'));
        console.error('Error');
      }
    } catch (err) {
      dispatch(goodsError(err));
      console.error(err);
    }

    dispatch(goodsLoading(false));
  };
};

export const goodsFetchData = () => {
  return async dispatch => {
    dispatch(goodsLoading(true));

    try {
      let response = await axios.get(`${ API }/PRODUCTS_SUCCESS`);

      if (response.data.success) {
        dispatch(goodsFetchSuccess(response.data.data.products));
      } else {
        dispatch(goodsError('Error'));
        console.error('Error');
      }
    } catch (err) {
      dispatch(goodsError(err));
      console.error(err);
    }

    dispatch(goodsLoading(false));
  };
};