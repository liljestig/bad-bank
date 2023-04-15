function AllData() {
    const ctx = React.useContext(UserContext);
    return (
        <Card
            bgcolor="light"
            txtcolor="dark"
            header="All Data"
            title="All the bank's account data is listed below"
            text="Be careful to use any data with an honest intention."
            body={(<table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {ctx.users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>${user.balance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>)}
        />
    );
}