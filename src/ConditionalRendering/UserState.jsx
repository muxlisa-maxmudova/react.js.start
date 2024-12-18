const UserState = (props) => {
    const checkUser = () => {
        if(props.loggedIn===true && props.isAdmin===true) {
            return <h1>Welcome, Admin</h1>
        } else {
            return <h1>Welcome, User</h1>
        }
    }

    return (
        <div>{checkUser()}</div>
    )
}
export default UserState
