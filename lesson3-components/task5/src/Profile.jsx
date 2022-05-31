import React from 'react';
import moment from 'moment';

// algo
// 1 створити компоненту, яка приймає властивість userData +++
// 2 відмалювати name и lastName +++
// 3 відмалювати місце і дату народження

const Profile = props => {
  const birthDate = moment(new Date(props.userData.birthDate)).format('DD MMM YY');
  return (
    <>
      <h1 className="profile__name">{`${props.userData.firstName} ${props.userData.lastName}`}</h1>
      <p className="profile__birth">{`Was born ${birthDate} in ${props.userData.birthPlace}`}</p>
    </>
  );
};

export default Profile;
