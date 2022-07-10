import UserContext from './UserContext';
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const UserState = (props)=>{
    let host = 'http://localhost:5000/api/';
    const initialUser = [];
    const [user, setUser] = useState(initialUser);
    const [token, setToken] = useState(localStorage.getItem('authToken'));
    const navigate = useNavigate();
    const {showAlert}= props;
    
    
    // Login
    const login = async(email,password) =>{
        const url = `${host}auth/login`
        const response = await fetch(url,{
            method:'POST',
            headers:{
                'Content-type':'application/json',
            },
            body: JSON.stringify({email,password})
        })
        const json =  await response.json();
        if(json.success){
            // Logged in
            localStorage.setItem("authToken",json.authToken);
            setToken(json.authToken);
            showAlert(`Logged in successfully.`,'success');
            navigate('/');
            getUser(json.authToken);            
        } else{
            // Unable to login
            showAlert(json.error,'error');
        }
    }

    // Signup
    const signup = async(fname,lname,email,password) =>{
        const url = `${host}auth/createuser`
        const response = await fetch(url,{
            method:'POST',
            headers:{
                'Content-type':'application/json',
            },
            body: JSON.stringify({fname,lname,email,password})
        })
        const json =  await response.json();
        if(json.success){
            // Signed up
            localStorage.setItem("authToken",json.authToken);
            setToken(json.authToken);
            showAlert(`Signed Up successfully.`,'success');
            navigate('/');
            getUser(json.authToken);
        } else{
            // Unable to signup
            showAlert(json.errors[0].msg,'error');
        }
    }
    
    // Get User Data
    const getUser = async(authToken) =>{
        const url = `${host}auth/getuser`
        const response = await fetch(url,{
            method:'POST',
            headers:{
                'auth-token': authToken
            },
        })
        const json =  await response.json();
        setUser(json);
    }


    return(
        <UserContext.Provider value={{user,login,signup,getUser,token}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;
