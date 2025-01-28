import {useContext} from "react";
import {UserContext} from "./UserContext.jsx";

const UserProfile = () => {
    const {user} = useContext(UserContext);
    return (
        <div>
            <h1>User Profile</h1>
            name: {user.name}
        </div>
    )
}
export default UserProfile
