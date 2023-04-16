function Deposit() {
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');    
    const [depositAmount, setDepositAmount] = React.useState('');
    const ctx = React.useContext(UserContext);

    function handleDeposit(){
        console.log(depositAmount);
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
                Deposit Amount<br/>
                <input type="depositAmount" className="form-control" id="depositAmount" placeholder="Deposit Amount" value={depositAmount} onChange={e => setDepositAmount(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-secondary" onClick={handleDeposit}>Deposit</button>
                </>
            ):(
                <>
                <h5>Success</h5>
                </>
            )}
        />
    );
}