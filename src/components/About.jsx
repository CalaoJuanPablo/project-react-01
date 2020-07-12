/* eslint-disable react/no-array-index-key */
import React from 'react';
import '../styles/components/About.scss';

function About({ profession, phone, email, website, address }) {
  const contactInfo = [
    { name: phone, href: `tel:+57${phone}` },
    { name: email, href: `mailto:${email}` },
    { name: website, href: website },
  ];

  return (
    <div className='About'>
      <h3 className='About-title'>{profession}</h3>
      <ul className='About-contact-info'>
        {
          contactInfo.map(({ name, href }, idx) => <li key={`about-key-${idx}`} className='About-item'><a href={href}>{name}</a></li>)
        }
      </ul>
      <p className='About-adress'>{address}</p>
    </div>
  );
}

export default About;
