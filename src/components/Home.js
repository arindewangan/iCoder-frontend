import React from 'react';
import Notes from './Notes';
import AddNote from './AddNote';
import UserContext from '../context/user/UserContext';
import {useContext} from "react";

const Home = () => {
    const context = useContext(UserContext);
    const {user} = context;

    return (
        <div>
            <AddNote user={user}/>
            <Notes/>
        </div>
    );
}

export default Home;
