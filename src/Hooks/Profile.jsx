import {useState} from "react"
const Profile = () => {
    const [profile, setProfile] = useState({
        name:"",
        age:"",
    })
    const handleChange = (e) => {
        const { name, value} = e.target;
        setProfile((prevProfile)=> ({
            ...prevProfile,
            [name]: value


        }))
    }

    return (
        <div>
        <label>
            <input
            type="text"

            placeholder="Enter your name here"
            onChange={handleChange}/>
            <input
            type="text"

            placeholder="Enter your age here"
            onChange={handleChange}/>
        </label>
            <h1>Profile Information</h1>
            <p>Name: {profile.name}</p>
            <p>Age: {profile.age}</p>
            </div>
    )
}
export default Profile

