import React from "react";
import {useContext,useState} from "react";
import NoteContext from '../context/notes/NoteContext';

const AddNote = (props) => {
    const context = useContext(NoteContext);
    const {addNote} = context;
    const [note, setnote] = useState({title:"",description:"",tag:"General"});
    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setnote({title:"",description:"",tag:"General"});
    }
    const onChange = (e)=>{
        setnote({...note,[e.target.name]: e.target.value});
    }
    return (
        <div className="container my-3">
            <h3 style={{marginLeft: '14rem',marginBottom:'2rem'}}>{props.user !== (undefined || null) && `Hello! ${props.user.fname}, Welcome to iNotes`}</h3>
            <h1 style={{marginLeft: '21rem',marginBottom:'2rem'}}><i><b>Add Note</b></i></h1>
            <form>
                <div className="row mb-3">
                    <label htmlFor="title" className="col-sm-1 col-form-label">Title</label>
                    <div className="col-sm-7">
                    <input type="text col-sm-6" className="form-control" value={note.title}  id="title" name="title" onChange={onChange} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="description" className="col-sm-1 col-form-label">Description</label>
                    <div className="col-sm-7">
                    <textarea className="form-control" rows="5" value={note.description}  id="description" name="description" onChange={onChange}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="tag" className="col-sm-1 col-form-label">Tag</label>
                    <div className="col-sm-2">
                    <input type="text col-sm-6" className="form-control" value={note.tag}  id="tag" name="tag" onChange={onChange} />
                    </div>
                </div>
                <button type="submit" disabled={note.title.length<1 || note.description.length<1} className="btn btn-primary" onClick={handleClick}>Submit</button>
            </form>
        </div>
    );
};

export default AddNote;
