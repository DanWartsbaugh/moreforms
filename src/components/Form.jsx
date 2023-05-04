import React, {useState} from 'react'

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirm, setConfirm] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirm };
        console.log("Welcome", newUser);
    };
    
    return(
        <div className='body'>
        <form className='form' onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
                
                {firstName.length>0 && firstName.length<2&&<p>First name must be at least 2 characters</p>}
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastName(e.target.value) } />
                {lastName.length >0 && lastName.length<2&&<p>Last name must be at least 2 characters</p>}

            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                {email.length>0 && email.length<5&&<p>Email must be at least 5 characters</p>}

            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
                {password.length>0 && password.length<8 && <p>Password must be at least 8 characters</p>}
                {confirm.length>0 && password!==confirm && <p>Passwords must match</p>}

            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setConfirm(e.target.value) } />
            </div>
        </form>
        <p>Your Form Data</p>
        <div className='form'>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm password: {confirm}</p>
        </div>
        </div>
        
    );
};

export default Form