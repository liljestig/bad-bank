function Withdraw() {
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [withdrawAmount, setWithdrawAmount] = React.useState('');
    const ctx = React.useContext(UserContext);

    function handleWithdraw(){
        console.log(withdrawAmount);
        setShow(false);
    }

    return (
        <Card
            bgcolor="light"
            txtcolor="dark"
            header="Deposit"
            body={show ? (
                <>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                Balance
                            </td>
                            <td>
                                $1,000,000.00
                            </td>
                        </tr>
                    </tbody>
                </table>
                Withdraw Amount<br/>
                <input type="withdrawAmount" className="form-control" id="withdrawAmount" placeholder="Withdraw Amount" value={withdrawAmount} onChange={e => setWithdrawAmount(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-secondary" onClick={handleWithdraw}>Withdraw</button>
                </>
            ):(
                <>
                <h5>Success</h5>
                </>
            )}
        />
    );
}