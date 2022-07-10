import {Link, useLocation,useNavigate} from "react-router-dom";
import MUISwitch from './MUISwitch';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = (props) => {
    let location = useLocation();
    const {showAlert}= props;
    const navigate = useNavigate();
    const handleLogout = ()=>{
        localStorage.removeItem('authToken');
        navigate('/login');
    }
    const handleProfile = ()=>{
        navigate('/profile');
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">iNotes</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/'?'active':''}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/about'?'active':''}`} to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/contact'?'active':''}`} to="/contact">Contact</Link>
                        </li>
                    </ul>
                    {!localStorage.getItem('authToken') ?
                    <div>{location.pathname === '/login'?<Link style={{textDecoration: 'none'}} to="/signup"><Button className="mx-1" variant="contained">SignUp</Button></Link>
                    :<Link style={{textDecoration: 'none'}} to="/login"><Button className="mx-1" color="success" variant="contained">Login</Button></Link>}</div>
                    :<div className="d-flex"><p style={{marginBottom: '0rem',marginRight: '1rem',cursor:'pointer'}} onClick={handleProfile}><AccountCircleIcon color="primary" fontSize="large"/></p>
                    <Button className="mx-1" color="error" onClick={handleLogout} variant="contained">Log Out</Button></div>}
                    
                    <div>
                    <p style={{height: '1rem',marginTop: '-1rem'}}>{<MUISwitch showAlert={showAlert}/>}</p>
                    </div>
                    </div>
                </div>
                </nav>
        </div>
    );
}

export default Navbar;
