function Withdraw() {
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [withdrawAmount, setWithdrawAmount] = React.useState('');
    const ctx = React.useContext(UserContext);

    function handleWithdraw(){
        console.log(withdrawAmount);
        ctx.users[0].balance = Number(ctx.users[0].balance) - Number(withdrawAmount);
        setShow(false);
    }

    function clearForm(){
        setWithdrawAmount('');
        setShow(true);
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
                                ${ctx.users[0].balance}
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
                <p>
                    Withdraw ${withdrawAmount} processed.<br/>
                    New balance: ${ctx.users[0].balance}
                </p>
                <button type="submit" className="btn btn-secondary" onClick={clearForm}>Make another withdraw</button>
                </>
            )}
        />
    );
}