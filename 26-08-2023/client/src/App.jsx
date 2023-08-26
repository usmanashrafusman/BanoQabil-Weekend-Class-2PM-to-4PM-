import React, { useState, useEffect } from 'react'
import AuthRoutes from './routes/AuthRoutes'
import AuthContext from './context/AuthContext'
import AppRoutes from './routes/AppRoutes'
import httpService from './servies/httpService'
const App = () => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true);
  const getUser = async () => {
    const user = await httpService({
      url: "auth/getUser"
    });
    if (user) {
      setUser(user)
    }
    setIsLoading(false)
  }
  useEffect(() => {
    getUser();
  }, [])

  return isLoading ? <p>Loading</p> :
    <AuthContext.Provider value={{ user, setUser }}>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </AuthContext.Provider>
}

export default App