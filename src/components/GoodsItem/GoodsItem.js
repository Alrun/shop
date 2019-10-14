import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Rating from '../Rating';
import Img from '../../assets/img/image.jpg';

const CheckIcon = () => {
  return (
    <svg
      width="12px"
      height="8px"
      viewBox="0 0 12 8"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-87.000000, -1086.000000)">
          <g transform="translate(60.000000, 828.000000)">
            <g transform="translate(25.000000, 254.000000)">
              <rect x="0" y="0" width="16" height="16" />
              <path
                d="M6,12 C5.82279801,12.0010245 5.65247922,11.9314577 5.52666667,11.8066667 L2.86,9.14 C2.59858523,8.87858522 2.59858524,8.45474812 2.86000001,8.19333335 C3.12141479,7.93191857 3.54525188,7.93191857 3.80666667,8.19333333 L6,10.3933333 L12.1933333,4.19333333 C12.4547481,3.93191855 12.8785852,3.93191855 13.14,4.19333333 C13.4014148,4.45474811 13.4014148,4.87858522 13.14,5.14 L6.47333333,11.8066667 C6.34752078,11.9314577 6.17720199,12.0010245 6,12 L6,12 Z"
                fill="#32CA00" fillRule="nonzero" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

const CartIcon = () => {
  return (
    <svg
      width="17px"
      height="16px"
      viewBox="0 0 17 16"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-519.000000, -402.000000)">
          <g transform="translate(60.000000, 393.000000)">
            <g transform="translate(444.000000, 0.000000)">
              <g transform="translate(15.000000, 8.000000)">
                <rect x="0" y="0" width="18" height="18" />
                <circle fill="#FFFFFF" fillRule="nonzero" cx="14.25" cy="15" r="1.5" />
                <circle fill="#FFFFFF" fillRule="nonzero" cx="6.75" cy="15" r="1.5" />
                <path
                  d="M15.7875,5.25 L4.5375,4.6275 L3.75,2.01 C3.64275456,1.6909718 3.33611427,1.4824564 3,1.5 L0.75,1.5 C0.335786438,1.5 5.07265313e-17,1.83578644 0,2.25 C-5.07265313e-17,2.66421356 0.335786438,3 0.75,3 L2.46,3 L3.1575,5.085 L5.0325,12.21 C5.15991821,12.5286188 5.48732749,12.7201224 5.8275,12.675 L15.8475,10.59 C16.223244,10.5407491 16.5032141,10.2189445 16.5,9.84 L16.5,6 C16.5005003,5.59999988 16.1870001,5.26999971 15.7875,5.25 Z"
                  fill="#FFFFFF" fillRule="nonzero" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

const CompareIcon = () => {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-322.000000, -1360.000000)" fill="#0284C6" fillRule="nonzero">
          <g transform="translate(60.000000, 828.000000)">
            <g transform="translate(262.000000, 532.000000)">
              <path
                d="M19.9164522,12.1853801 L16.5534503,6.57996101 L19.5715789,5.74159844 C19.882807,5.65516569 20.0649513,5.33282651 19.9785575,5.02163743 C19.8920858,4.71044834 19.5696686,4.52822612 19.2585575,4.61469786 L15.5068616,5.65680312 C15.5065887,5.65688109 15.5063158,5.65695906 15.5060429,5.65703704 L10.6042885,7.01859649 L10.6042885,0.584951267 C10.6042885,0.261988304 10.3424561,0.000155945419 10.0194932,0.000155945419 C9.69653021,0.000155945419 9.43469786,0.261988304 9.43469786,0.584951267 L9.43469786,7.34346979 L4.23224172,8.78853801 C4.23196881,8.78861598 4.23169591,8.78869396 4.231423,8.78873294 L0.467407407,9.83426901 C0.156179337,9.92070175 -0.0259649123,10.2430409 0.0604288499,10.55423 C0.132358674,10.8130604 0.367407407,10.9826511 0.623547758,10.9826511 C0.675360624,10.9826511 0.728070175,10.9757115 0.780389864,10.9611696 L3.12682261,10.3093957 L0.122534113,15.317154 C0.0680311891,15.4080312 0.0391812865,15.5120468 0.0391812865,15.6180117 C0.0391812865,18.0126706 1.98744639,19.9608577 4.38214425,19.9608577 C6.77692008,19.9608577 8.7251462,18.0126706 8.7251462,15.6180117 C8.7251462,15.5120468 8.69633528,15.4080312 8.64179337,15.317154 L5.27875244,9.71169591 L14.4014425,7.17769981 L11.397154,12.1853801 C11.3426511,12.2762573 11.3138012,12.3802729 11.3138012,12.4862378 C11.3138012,14.8809357 13.2620663,16.8291228 15.6567641,16.8291228 C16.8168031,16.8291228 17.9074074,16.3773879 18.7277583,15.557076 C19.5480702,14.7367641 19.9998051,13.6461988 19.9997271,12.4861598 C19.9998051,12.3802339 19.9709942,12.2762183 19.9164522,12.1853801 Z M4.38214425,18.791306 C2.83216374,18.791306 1.53875244,17.6740351 1.26339181,16.202768 L7.50089669,16.202768 C7.22557505,17.6740351 5.93216374,18.791306 4.38214425,18.791306 Z M7.10760234,15.0331774 L1.65676413,15.0331774 L4.38214425,10.4904873 L7.10760234,15.0331774 Z M15.6567641,7.35875244 L18.3822612,11.9014035 L12.931345,11.9014035 L15.6567641,7.35875244 Z M15.6568421,15.6595712 C14.1068616,15.6595712 12.8134113,14.5423002 12.5380117,13.0710331 L18.7756335,13.0710331 C18.5002339,14.5423002 17.2068616,15.6595712 15.6568421,15.6595712 Z" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

const FavouritesIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path fill="#0284C6" fillRule="nonzero"
            d="M14.357.015c-1.702 0-3.296.771-4.357 2.063A5.643 5.643 0 0 0 5.643.015 5.649 5.649 0 0 0 0 5.658c0 2.436 1.453 5.254 4.318 8.375 2.205 2.402 4.603 4.262 5.286 4.775l.396.298.396-.298c.683-.513 3.081-2.372 5.286-4.775C18.547 10.913 20 8.094 20 5.658A5.649 5.649 0 0 0 14.357.015zm.354 13.127c-1.814 1.975-3.765 3.573-4.711 4.309-.946-.736-2.897-2.334-4.71-4.31-2.598-2.83-3.971-5.417-3.971-7.483a4.329 4.329 0 0 1 4.324-4.324c1.569 0 3.017.855 3.78 2.232L10 4.606l.577-1.04a4.327 4.327 0 0 1 3.78-2.232 4.329 4.329 0 0 1 4.324 4.324c0 2.066-1.373 4.654-3.97 7.484z" />
    </svg>
  );
};

const FavouritesIconFilled = () => {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-599.000000, -1360.000000)" fill="#0284C6" fillRule="nonzero">
          <g transform="translate(377.000000, 828.000000)">
            <g transform="translate(222.000000, 532.000000)">
              <path
                d="M14.3574505,0.0152087912 C12.6549011,0.0152087912 11.0611429,0.786065934 10,2.07762637 C8.93885714,0.786021978 7.34514286,0.0152087912 5.64254945,0.0152087912 C2.53125275,0.0152087912 0,2.54641758 0,5.65775824 C0,8.09406593 1.45274725,10.912044 4.3178022,14.0334066 C6.52268132,16.4354725 8.92123077,18.2953407 9.60382418,18.8081758 L9.99986813,19.1057143 L10.3959121,18.8082198 C11.0785055,18.2953846 13.4771429,16.4355604 15.6820659,14.0334945 C18.5472088,10.9121319 20,8.09410989 20,5.65775824 C20,2.54641758 17.4687473,0.0152087912 14.3574505,0.0152087912 Z" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default function GoodsItem(props) {
  const {item: {id, code, title, availability, inFav, params}, handleFavourites} = props;

  const handleSetFavourites = id => e => {
    e.preventDefault();
    handleFavourites(id, inFav);
  };

  return (
    <div className="bg-white pt_20px px_25px pb_30px w-100">
      <div className="d-flex align-items-center">
        <Rating value={ 3 } />
        { code && <div className="ml-auto text_gray-dark fz_xs">Art: { code }</div> }
      </div>
      <div className="p-5">
        <div className="embed-responsive embed-responsive-1by1">
          <div className="embed-responsive-item bg_image" style={ {backgroundImage: `url(${ Img })`} } />
        </div>
      </div>
      { availability
      && <div className="fz_sm text_green">
        <i className="mr-2"><CheckIcon /></i>
        В наличии
      </div> }
      <h3 className="mt-2">{ title }</h3>
      { !!params.length && params.map(item => (
          <div key={ item.name } className="d-flex fz_xs font-weight-light flex-wrap">
            <div className="mr-2 text_gray-dark">{ item.name }</div>
            <div>{ item.value }</div>
          </div>
        )
      ) }
      <div className="h2 mt-2">49 999 руб.</div>
      <div className="fz_xs text_blue-light font-weight-light">+490 бонусов</div>
      <div className="d-flex align-items-center mt_12px">
        <Button icon={ <CartIcon /> } title="Купить" classes="px-3" />
        <div className="ml-auto">
          <a href="/#" className="mr-3" onClick={ handleSetFavourites(id) }>
            { !inFav
              ? <FavouritesIcon />
              : <FavouritesIconFilled /> }
          </a>
          <a href="/#" onClick={ e => e.preventDefault() }>
            <CompareIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

GoodsItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    code: PropTypes.number,
    title: PropTypes.string,
    availability: PropTypes.bool,
    inFav: PropTypes.bool,
    params: PropTypes.array
  }),
  handleFavourites: PropTypes.func.isRequired
};