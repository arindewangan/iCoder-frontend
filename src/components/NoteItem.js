import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {useContext} from "react";
import NoteContext from '../context/notes/NoteContext';

const NoteItem = (props) => {
    const context = useContext(NoteContext);
    const {deleteNote} = context;
    const {note,updatenote} = props;

    return (
        <>     
            <div className="col">
                <div className="card h-100">
                    <div className="card-body">
                        <span style={{zIndex:'1',display:'flex',left:'94%'}} className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">{note.tag}</span>
                        <h5 className="card-title">{note.title} 
                        <i className="mx-2" style={{cursor:'pointer'}} onClick={()=>{deleteNote(note._id)}}><DeleteIcon color="secondary"/></i>
                        <i className="mx-2" style={{cursor:'pointer'}} onClick={()=>{updatenote(note)}}><EditIcon color="action"/></i>
                        </h5>
                        <p className="card-text">{note.description}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{note.date}</small>
                    </div>
                </div>
            </div>
        </>
    );
}




export default NoteItem;
