import React from 'react';
import PropTypes from 'prop-types';

const IconStar = (
  {
    fill = '#dfdfdf'
  }
) => (
  <svg
    width="10px"
    height="10px"
    viewBox="0 0 10 10"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-85.000000, -848.000000)" fill={ fill }>
        <g transform="translate(60.000000, 828.000000)">
          <g transform="translate(25.000000, 20.000000)">
            <polygon
              points="5 8.03843137 8.09 10 7.2724902 6.30053664 10 3.81263158 6.4045098 3.48788442 5 0 3.5955098 3.48788442 0 3.81263158 2.7275098 6.30053664 1.91 10" />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default function Rating(props) {
  const {value} = props;
  const countItems = [...Array(5)];

  return (
    <div className="rating text-nowrap">
      { countItems.map((item, idx) => (
          <span
            key={ idx }
            className="rating__item mr-1"
          >
            <IconStar fill={ idx < value ? '#ffcb31' : '#dfdfdf' } />
          </span>
        )
      ) }
    </div>
  );
}

Rating.propTypes = {
  value: PropTypes.number.isRequired
};