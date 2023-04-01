import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

// const Login = (props) => {
//     const [ email, setEmail ] = useState('');
//     const [ password, setPassword ] = useState('');
//     const [ user, setUser ] = useState();

//     //check if there's a user logged in each time the app loads
//     useEffect(() => {
//         const loggedInUser = localStorage.getItem("user");
//         if (loggedInUser) {
//           const foundUser = JSON.parse(loggedInUser);
//           setUser(foundUser);
//         }
//     }, []);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log(email);
//         const user = { email, password};
//         //send the email and password to the server
//         const response = await axios.post(
//             'http://localhost:8081/api/users/login',
//             user
//         );
//         //set the state of the user
//         setUser(response.data)
//         //store the user in localStorage
//         localStorage.setItem('user', response.data)
//         console.log(response.data)
//         //redirect the user to the homepage
//         props.history.push('/');
//     };

//     const handleLogout = () => {
//         setUser({});
//         localStorage.clear();
//     };

// //if there's a user, show this message:
//     if (user) {
//         return (
//             <div>
//                 {user.name} is logged in
//                 <Button onClick={handleLogout}>Log Out</Button>
//             </div>
//         );
//     }

// //if there's no user, show the login form

//     return (
//         <div className="auth-form-container">
//             <h3>Existing User? Sign In</h3>
//             <form className="login-form" onSubmit={handleSubmit}>
//                 <label htmlFor="email"></label>
//                 <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
//                 <label htmlFor="password"></label>
//                 <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*******" id="password" name="password" />
//                 <Button type="submit">Log In</Button>
//             </form>
//             <Button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't yet have an account? Register here</Button>
//         </div>
//     );
// }

// export default Login;

/////// ORIGINAL CODE BELOW

const Login = (props) => {
    const { email, setEmail } = useState('');
    const { password, setPassword } = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Sign In</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*******" id="password" name="password" />
                <Button type="submit">Log In</Button>
            </form>
            <Button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't yet have an account? Register here</Button>
        </div>
    )
}

export default Login;