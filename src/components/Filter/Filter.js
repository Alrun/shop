import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Checkbox from '../Checkbox';

const filterItems = [
  {label: 'Canon', checked: true, value: 'canon'},
  {label: 'Olympus', checked: true, value: 'olympus'},
  {label: 'Fujifilm', checked: true, value: 'fujifilm'},
  {label: 'Pentax', checked: true, value: 'pentax'},
  {label: 'Nikon', checked: true, value: 'nikon'},
  {label: 'Sigma', checked: true, value: 'sigma'},
  {label: 'Panasonic', checked: true, value: 'panasonic'},
  {label: 'Geleral Electrics', checked: true, value: 'geleralElectrics'},
  {label: 'Leica', checked: true, value: 'leica'},
  {label: 'Zenit', checked: true, value: 'zenit'}
];

export default function Filter(props) {
  const {handleFilter, handleGetInitGoods} = props;
  const [checked, setChecked] = useState(
    filterItems.reduce((acc, cur) => {
      acc[cur.value] = cur.checked;
      return acc;
    }, {})
  );

  const handleChecked = () => e => {
    setChecked({...checked, [e.target.value]: e.target.checked});
  };

  const handleSubmit = () => e => {
    e.preventDefault();
    let filterList = [];

    for (let title in checked) {
      if (checked.hasOwnProperty(title)) {
        if (checked[title]) {
          filterList.push(title);
        }
      }
    }

    handleFilter(filterList);
  };

  const handleClear = () => {
    let obj = {...checked};

    Object.keys(obj).forEach(item => {
      obj[item] = true;
    });

    setChecked({...obj});
    handleGetInitGoods();
  };

  return (
    <div className="bg-white p_30px pb-4">
      <form onSubmit={ handleSubmit() }>
        <div className="mb-4">
          <Button submit classes="w-100 mb-2" title="Показать результат" />
          <Button variant="light" classes="w-100 mb-2" title="Очистить фильтр" handleOnClick={ handleClear } />
        </div>
        <h4>Производитель</h4>
        <div className="row">
          { filterItems.map(item => (
            <div className="col-6 mb-1" key={ item.value }>
              <Checkbox
                label={ item.label }
                checked={ checked[item.value] }
                value={ item.value }
                handleChecked={ handleChecked }
              />
            </div>
          )) }
        </div>
      </form>
    </div>
  );
}

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  handleGetInitGoods: PropTypes.func.isRequired
};