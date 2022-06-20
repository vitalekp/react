import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// 0. create project +
// 1. male static layout (верстка) +
// 2. divide into components +
// 3. static react version (верстка) +
// 4. declare state (what, where) and props ++
//5. write logic +++

const User = () => {
  const { usersId } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${usersId}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error();
      })
      .then(userData => {
        setUserData(userData);
      });
  }, [usersId]);

  if (!userData) {
    return null;
  }
  console.log(userData);

  const { name, location, avatar_url } = userData;

  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

export default User;
