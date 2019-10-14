import React from 'react';
import PropTypes from 'prop-types';
import Filter from '../Filter';
import GoodsItem from '../GoodsItem';
import Spinner from '../Spinner/Spinner';

export default function Goods(props) {
  const {
    isLoading,
    textError,
    items,
    handleFilter,
    handleFavourites,
    handleGetInitGoods
  } = props;

  return (
    <div className="row">
      <div className="col-9">
        { isLoading
          ? <div className="d-flex h-100 align-items-center justify-content-center">
            <Spinner />
          </div>
          : textError
            ? <div>{ textError }</div>
            : items.length
              ? <div className="row">
                { items.map((item, idx) => (
                  <div className="col-4 d-flex" key={ item.id }>
                    <GoodsItem item={ items[idx] } handleFavourites={ handleFavourites } />
                  </div>
                )) }
              </div>
              : <div>По вашему запросу ничего не найдено.</div>
        }
      </div>
      <div className="col-3">
        <Filter handleFilter={ handleFilter } handleGetInitGoods={ handleGetInitGoods } />
      </div>
    </div>
  );
}

Goods.propTypes = {
  isLoading: PropTypes.bool,
  textError: PropTypes.string,
  items: PropTypes.array,
  handleFilter: PropTypes.func.isRequired,
  handleFavourites: PropTypes.func.isRequired,
  handleGetInitGoods: PropTypes.func.isRequired
};