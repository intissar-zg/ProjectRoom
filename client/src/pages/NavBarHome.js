import React from 'react'
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {Nav,Container,Navbar} from 'react-bootstrap'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {useHistory} from 'react-router-dom'
import {logout} from '../actions/authAction'
import {useSelector,useDispatch} from 'react-redux'
const NavBarHome = () => {
    return (
        <div>
         
         <AppBar position="static">
        <Toolbar  className="bar">
          <Typography variant="h6" >
          {/* /* logo */  }
          </Typography>
          <Button color="inherit"><Link to='/login'className="link">LOGIN</Link></Button>
            <Button color="inherit"><Link to='/Register/student' className="link" >REGISTER</Link></Button>
            <Button color="inherit"><Link to='/Register/instructor' className="link" >INSTRUCTOR</Link></Button>
        </Toolbar>
      </AppBar>
 {/*  <br />
  <Navbar bg="goldenrod" variant="goldenrod">
    <Container>
    <Nav className="me-auto">
      <Nav.Link href="login">LOGIN</Nav.Link>
      <Nav.Link href="Register/student">REGISTER</Nav.Link>
      <Nav.Link href="Register/instructor">INSTRUCTOR</Nav.Link>
      
    </Nav>
    </Container>
  </Navbar> */}

        </div>
    )
}

export default NavBarHome
