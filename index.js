function Spa() {    
    return (
        <HashRouter>
            <NavBar/>
            <UserContext.Provider value={{users:[{name:'dan',email:'dan@liljestig.com',password:'T0p$3cret',balance:100}]}}>
                <Route path="/" exact component={Home} />
                <Route path="/CreateAccount/" component={CreateAccount} />
                <Route path="/login/" component={Login} />
                <Route path="/deposit/" component={Deposit} />
                <Route path="/withdraw/" component={Withdraw} />
                <Route path="/balance/" component={Balance} />
                <Route path="/alldata/" component={AllData} />
            </UserContext.Provider>      
        </HashRouter>
    );
}
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Spa/>);