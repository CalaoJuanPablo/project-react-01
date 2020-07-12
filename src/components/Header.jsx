import React from 'react';
import '../styles/components/Header.scss';

function Header({
  name,
  avatar,
  children,
}) {
  return (
    <div className='Header'>
      <figure className='Header-photo'>
        <img
          src={avatar}
          alt='Avatar'
        />
      </figure>
      <div className='Header-info'>
        <h1 className='Header-title'>{name}</h1>
        {children}
      </div>
    </div>
  );
}

export default Header;
