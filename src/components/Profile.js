import React, {useContext,useEffect} from "react";
import UserContext from '../context/user/UserContext';
import {useNavigate} from "react-router-dom";


export default function Profile() {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const {user,getUser} = context;

  useEffect(() => {
    if(localStorage.getItem('authToken')===null){
        navigate('/login');
    }else{
        getUser(localStorage.getItem('authToken'));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
        <table className="my-3 table table-dark table-striped">
        <thead>
            <tr>
                <th scope="col">S.No</th>
                <th scope="col">Data Name</th>
                <th scope="col">Data</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <th>Full Name</th>
                <td>{user.fname + " " + user.lname}</td>
            </tr>
            <tr>
                <th scope="row">1</th>
                <th>First Name</th>
                <td>{user.fname}</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <th>Last Name</th>
                <td>{user.lname}</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <th>Email</th>
                <td>{user.email}</td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <th>A/c Opening Data</th>
                <td>{user.date}</td>
            </tr>
            <tr>
                <th scope="row">5</th>
                <th>Id</th>
                <td>{user._id}</td>
            </tr>
        </tbody>
        </table>
    </div>
  );
}
