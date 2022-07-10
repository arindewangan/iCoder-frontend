import React from 'react';
import NoteContext from './NoteContext';
import {useState} from 'react';

const NoteState = (props)=>{
    const {showAlert}= props;
    let host = 'http://localhost:5000/api/';
    const initialNotes = [];
    const [notes, setnotes] = useState(initialNotes);
    let authToken = localStorage.getItem('authToken');
    
    // Get Notes
    const getNotes = async ()=>{
            const url = `${host}notes/fetchnotes`
            const response = await fetch(url,{
                method:'GET',
                headers:{
                    'Content-type':'application/json',
                    'auth-token': authToken
                }
            })
            const json =  await response.json();
            setnotes(json);
    }

    // Add Note
    const addNote = async (title,description,tag)=>{
        const url = `${host}notes/addnote/`
        await fetch(url,{
            method:'POST',
            headers:{
                'Content-type':'application/json',
                'auth-token': authToken,
            },
            body: JSON.stringify({title,description,tag})
        });
        await getNotes();
        await showAlert('Note Added successfully.','success')
    }
    // Edit Note
    const editNote = async (id,title,description,tag)=>{
        const url = `${host}notes/updatenote/${id}`
        await fetch(url,{
            method:'PUT',
            headers:{
                'Content-type':'application/json',
                'auth-token': authToken,
            },
            body: JSON.stringify({title,description,tag})
        });
        await getNotes();
        await showAlert('Note updated successfully.','success')
    }
    // Delete Note
    const deleteNote = async (id)=>{
        const url = `${host}notes/deletenote/${id}`
        await fetch(url,{
            method:'DELETE',
            headers:{
                'Content-type':'application/json',
                'auth-token': authToken,
            },
        });
        await getNotes();
        await showAlert('Note Deleted successfully.','success')
    }

    return(
        <NoteContext.Provider value={{notes,setnotes,addNote,editNote,deleteNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
