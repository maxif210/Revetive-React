import { createContext, useEffect, useState } from 'react';

const LayoutContent = createContext()

const LayoutProvider = ({children}) => {

    return(
        <LayoutContent.Provider
        value={{

        }}
        >
        {children}
        </LayoutContent.Provider>
    )
}

export {
    LayoutProvider
}

export default LayoutContent