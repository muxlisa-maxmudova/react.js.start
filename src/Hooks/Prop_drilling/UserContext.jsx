import {createContext, useState} from "react";

const UserContext = createContext()
const UserProvider = (props) => {
    const [user, setUser] = useState({name:'John Doe'})
    const updateUser = (newName) => {
        setUser({name: newName})
    }
    return (
        <div>
            <UserContext.Provider value={{user, updateUser}}>
                {props.children}
            </UserContext.Provider>
        </div>
    )
}
export {UserContext, UserProvider}

