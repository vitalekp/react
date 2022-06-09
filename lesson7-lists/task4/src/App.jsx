import React from 'react';
import UsersList from './UsersList';

const users = [
  { id: 1, name: 'Tom', age: 20 },
  { id: 12, name: 'Bob', age: 100 },
  { id: 123, name: 'Rob', age: 32 },
  { id: 1234, name: 'Rim', age: 45 },
  { id: 12345, name: 'Skin', age: 27 },
  { id: 123456, name: 'Bobby', age: 26 },
  { id: 1234567, name: 'Jack', age: 19 },
  { id: 12345678, name: 'Bom', age: 21 },
  { id: 123456789, name: 'DOM', age: 22 },
];

const App = () => {
  return <UsersList users={users} />;
};

export default App;
