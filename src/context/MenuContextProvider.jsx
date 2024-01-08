import { useState } from "react"
import MenuContext from "./MenuContext"


const MenuContextProvider = ({children})=>{
    const [openMobileMenu, setOpenMobileMenu] = useState(false)

    return(
        <MenuContext.Provider value={{openMobileMenu,setOpenMobileMenu}}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuContextProvider