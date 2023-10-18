// ThemeContext.js
import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  return useContext(ThemeContext)
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('nordic')

  // const toggleTheme = () => {
  //   setTheme(prevTheme => (prevTheme === 'default' ? 'nordic' : 'default'))
  // }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// export const useTheme = () => {
//   return useContext(ThemeContext)
// }
