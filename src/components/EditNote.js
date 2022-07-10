import React,{useState} from 'react';
import TextField from '@mui/material/TextField';

export default function EditModal() {

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
    <div>
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
                <button type="button" className="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editNote">Launch demo modal</button>
    </div>
  );
}
