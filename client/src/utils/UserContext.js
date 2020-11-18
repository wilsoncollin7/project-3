import React from 'react';

const UserContext = React.createContext({
  firstName: "",
  lastName: "",
  email: "",
  password: ""
})

export default UserContext;
