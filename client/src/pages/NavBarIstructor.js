import {Link} from 'react-router-dom';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {useHistory} from 'react-router-dom'
import {logout} from '../actions/authAction'
import {useSelector,useDispatch} from 'react-redux'
import AccountCircle from '@material-ui/icons/AccountCircle';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  const dispatch = useDispatch()
  const history = useHistory()
const isAuth = useSelector(state => state.authReducer.isAuth)
  const role = useSelector(state => state.authReducer.user.role)
const user = useSelector(state => state.authReducer.user)

  return (
    <div className={classes.root}>
       <AppBar position="static" >
        <Toolbar className="bar">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Button 
            ><Link to='/Home'className="link">Home</Link></Button>
         
            
            {/* <Button color="inherit"><Link to='/Profile'>Profile</Link></Button> */}
            <Button color="inherit"><Link to='/Posts' className="link" >Courses</Link></Button>
            <Button color="inherit"><Link to='/main' className="link" >Create Class</Link></Button>
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              
            </div>
          )}
          { user ? <Button color="inherit" >{user.firstname}</Button> : <></>}
          { isAuth ?
           <Button color="inherit" onClick={()=>dispatch(logout(history))}><Link className="link" to='/Register'>Logout</Link></Button>

            : (<><Button color="inherit"><Link to='/Login'>Login</Link></Button>
            <Button color="inherit"><Link   to='/Register/instructor'>Register as instructor</Link></Button>
            <Button color="inherit"><Link to='/Register/student'>Register as student</Link></Button></>)
            } 
        </Toolbar>
      </AppBar>
    </div>
  );
}
