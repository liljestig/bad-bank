function Deposit() {
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');    
    const [depositAmount, setDepositAmount] = React.useState('');
    const ctx = React.useContext(UserContext);

    function handleDeposit(){
        console.log(depositAmount);
        ctx.users[0].balance = Number(ctx.users[0].balance) + Number(depositAmount);
        setShow(false);
    }

    function clearForm(){
        setDepositAmount('');
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
                Deposit Amount<br/>
                <input type="depositAmount" className="form-control" id="depositAmount" placeholder="Deposit Amount" value={depositAmount} onChange={e => setDepositAmount(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-secondary" onClick={handleDeposit}>Deposit</button>
                </>
            ):(
                <>
                <h5>Success</h5>
                <p>
                    Deposit ${depositAmount} received.<br/>
                    New balance: ${ctx.users[0].balance}
                </p>
                <button type="submit" className="btn btn-secondary" onClick={clearForm}>Make another deposit</button>
                </>
            )}
        />
    );
}