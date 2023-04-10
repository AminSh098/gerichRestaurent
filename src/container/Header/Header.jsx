import React from 'react';
import './Header.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info" >
      <SubHeading title="Chase the new flavour" />
      <h1 className='app__header-h1'>The Key To Find Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <input className='custom__button' type="button" value="Explore Menu" />
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt='headerIMG' />
    </div>
  </div>
);

export default Header;
