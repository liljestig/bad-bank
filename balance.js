function Balance() {
    const [show, setShow] = React.useState(true);
    const ctx = React.useContext(UserContext);
    return (
        <Card
            bgcolor="light"
            txtcolor="dark"
            header="Balance"
            body={show ? (
                <>
                {user.email}<br/>
                </>
            ):(
                <>
                <h5>Success</h5>
                </>
            )}
        />
    );
}