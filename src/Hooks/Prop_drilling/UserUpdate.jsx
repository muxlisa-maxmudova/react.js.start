import {UserContext} from "./UserContext.jsx";
import {useContext, useState} from "react";

const UserUpdate = () => {
    const {updateUser} = useContext(UserContext);
    const [newName, setNewName] = useState('')
    const updater = (e) => {
        e.preventDefault();
        if(newName.trim()){
            updateUser(newName);
            setNewName('')
        }
    }
    return (
        <div>
            <form onSubmit={updater}>
                <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Enter new name"
                />
                <button type="submit">Update</button>
            </form>
        </div>
    )
}
export default UserUpdate