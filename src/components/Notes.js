import React from 'react';
import NoteContext from '../context/notes/NoteContext';
import UserContext from '../context/user/UserContext';
import {useContext,useEffect,useRef,useState} from "react";
import NoteItem from './NoteItem';
import TextField from '@mui/material/TextField';
import {useNavigate} from "react-router-dom";

const Notes = () => {
    const context = useContext(NoteContext);
    const context2 = useContext(UserContext);
    const {notes,getNotes,editNote} = context;
    const {getUser} = context2;
    const navigate = useNavigate();
    
    useEffect(() => {
        if(localStorage.getItem('authToken')===null){
            navigate('/login');
        }else{
            getUser(localStorage.getItem('authToken'));
            getNotes();
        }
        // eslint-disable-next-line
    }, []);

    const [id, setId] = useState('');
    const ref = useRef(null)
    const updatenote = (note)=> {
        console.log('updatenote clicked of '+ note._id)
        ref.current.click();
        setId(note._id);
        setTitle(note.title);
        setDescription(note.description);
        setTag(note.tag);
    }

    const [title, setTitle] = useState('');
    const titleChange = (event) => {
        setTitle(event.target.value);
    };
    const [description, setDescription] = useState('');
    const descChange = (event) => {
        setDescription(event.target.value);
    };
    const [tag, setTag] = useState('');
    const tagChange = (event) => {
        setTag(event.target.value);
    };


    return (
        <>
            <div className="container my-3">
                <h1>Your Notes</h1>
                <div className="container">{notes.length===0 && 'No Notes Found'}</div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {notes.map((note)=>{
                        return <NoteItem key={note._id} note={note} updatenote={updatenote}/>
                    })}
                </div>
            </div>
            <div>
                <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#editNote">Launch</button>
                <div className="modal fade" id="editNote" tabIndex="-1" aria-labelledby="editNoteLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="my-2"><TextField fullWidth id="outlined-name" label="Title" value={title} onChange={titleChange}/></div>
                            <div className="my-2"><TextField fullWidth multiline minRows={5} maxRows={5}label="Description" value={description} onChange={descChange}/></div>
                            <div className="my-2"><TextField id="tag" label="Tag" value={tag} onChange={tagChange}/></div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" disabled={title.length<1 || description.length<1} className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>{editNote(id,title,description,tag)}}>Save changes</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default Notes;
