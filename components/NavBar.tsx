import React from 'react';

const NavBar = () => {
  return (
    <div className='hidden lg:block'>
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <a href="#" className='navbar__link relative'>
            HOME
          </a>
          <a href="#" className='navbar__link relative'>
            CATEGORIES
          </a>
          <a href="#" className='navbar__link relative'>
            MAKE UP
          </a>
          <a href="#" className='navbar__link relative'>
            SKINCARE
          </a>
          <a href="#" className='navbar__link relative'>
            PARFUME
          </a>
          <a href="#" className='navbar__link relative'>
            BLOG
          </a>
          <a href="#" className='navbar__link relative'>
            HOT OFFERS
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
