import React from 'react';
import '../styles/components/Profile.scss';

function Profile({ profile }) {
  return (
    <div className='Profile'>
      <h1 className='Profile-title'>Profile</h1>
      <p className='Profile-desc'>{profile}</p>
    </div>
  );
}

export default Profile;
