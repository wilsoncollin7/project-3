import React from 'react';

const UserContext = React.createContext({
  id: "",
  firstName: "",
  lastName: "",
  email: "",
})

export default UserContext;
