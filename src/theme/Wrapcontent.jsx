import {createContext, useState } from 'react'

export let Emmy = createContext();
function Wrapcontent({children}) {
  let [theme,setTheme] = useState(false)

  function toggler() {
    setTheme(!theme)
  }
  return (
   <Emmy.Provider value={{theme, toggler}}>
    {children}
   </Emmy.Provider>
  )
}

export default Wrapcontent