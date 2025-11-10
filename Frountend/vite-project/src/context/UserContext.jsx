import React, { createContext, useState } from 'react'

export const UserDataContext = createContext()


const UserContextProvider = ({ children }) => {

    const [ user, setUser ] = useState({
        email: '',
        fullName: {
            firstName: '',
            lastName: ''
        }
    }) 
 
   // const  user1 = "sajanand"

    return (
        <div>
            <UserDataContext.Provider value={{ user, setUser   }}>
                {children}
            </UserDataContext.Provider>
        </div>
    )
}

export default UserContextProvider