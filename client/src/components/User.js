import React, { useState, useContext } from 'react'

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  function onLogin(userObj) {
    setUser(userObj)
    // history.push("/profile") 
  }
  return (
    <UserContext.Provider value={{ user, setUser, onLogin }} >
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }