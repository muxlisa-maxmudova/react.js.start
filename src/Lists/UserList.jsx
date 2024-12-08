const UserList = () => {
    const users = [
        {
            FullName: 'Sarah Miller',
            Email: 'sarah.miller92@example.com',
            id:122,
            country:'India'
        },
        {
            FullName: 'David Robinson',
            Email: 'david.robinson83@example.com',
            id:222,
            country:'USA'
        },
        {
            FullName: 'Emily Johnson',
            Email: 'emily.johnson45@example.net',
            id:322,
            country:'UK'
        },
        {
            FullName: 'Michael Brown',
            Email: 'michael.brown76@example.org',
            id:422,
            country:'India'
        },
        {
            FullName: 'Jessica Lee',
            Email: 'jessica.lee56@example.com',
            id:522,
            country: 'Australia'
        }
    ]
    return (
        <main style={{background: "darkcyan", margin: '20px'}}>
            {users.map((user) => (
                <ol key={user.id}>
                    <li>Name: {user.FullName}</li>
                    <li>Email: {user.Email}</li>
                    <li>Id: {user.id}</li>
                    <li>Country: {user.country}</li>
                </ol>
            ))}
        </main>
    )


}
export default UserList
