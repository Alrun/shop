import { C } from '../actions';

const initialState = {
  isLoading: false,
  textError: '',
  items: [],
  favouritesError: ''
};

export default function goods(state = initialState, action) {
  switch (action.type) {
    case C.GOODS_LOADING:
      return {
        ...state,
        isLoading: action.bool
      };

    case C.GOODS_ERROR:
      return {
        ...state,
        textError: action.msg
      };

    case C.GOODS_FETCH_SUCCESS:
      return {
        ...state,
        textError: '',
        items: action.response
      };

    case C.FAVOURITES_FETCH_SUCCESS:
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === action.id) {
            return {...item, inFav: action.bool}
          }
          return item
        })
      };

      case C.FAVOURITES_FETCH_FAIL:
      return {
        ...state,
        favouritesError: action.msg
      };

      case C.FAVOURITES_ERROR_CLEAR:
      return {
        ...state,
        favouritesError: ''
      };

    default:
      return state;
  }
}