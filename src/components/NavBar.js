import React, { useState, useEffect } from 'react';
import { REMOVE } from '../redux/actions/index';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavBar from '@mui/material/NavBar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';


function NavBar(props){

  const [price, setPrice] = useState(0);
  // console.log(price);

    const getData = useSelector((state) => state.productReducer.carts);
    // console.log(getData);

  
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return(
        <>
          <Navbar bg="dark" variant="dark" 
      style={{ height:"60px", background: "linear-gradient(0deg, rgba(27,212,223,1) 0%, rgba(251,254,254,1) 33%)" }}

          // style={{height:"60px"}} 
          >
            <Container>
              <NavLink to="/" size='small' className="text-decoration-none text-danger fs-5 mx-1" ><img src='../Images/sale.jpg' alt='sale' width='40px' /></NavLink>
              <Nav className="me-auto">
                <NavLink as={Link} to="/" className="text-decoration-none text-dark fs-5 m-1">Home</NavLink>
                <NavLink as={Link} to="/login" className=' text-decoration-none text-dark  m-1' >
                  <Button variant="contained" size='small' style={{ borderRadius:'30%', background:'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(246,6,6,1) 100%)' }}
                  >Login</Button>
                </NavLink>
                <NavLink as={Link} to="/register" className=' text-decoration-none text-dark  m-1' >
                  <Button variant='contained' size='small' style={{ borderRadius:'30%', background:'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(246,6,6,1) 100%)' }}
                  >Register</Button>
                </NavLink>
              </Nav>
              <Badge badgeContent={getData.length} color="error" margine='1'
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined }
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined }
                onClick={handleClick}
              >
                <ShoppingCartIcon sx={{color:'blue', fontSize:25, cursor:'pointer'}} />          
              </Badge>
              
            </Container>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >

              {
                getData.length ? 
                <TableContainer component={Paper} style={{width:"24rem", padding:10}} >
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{fontWeight:"bold"}} >Photo</TableCell>
                        <TableCell sx={{fontWeight:"bold"}} >Mobiles Name</TableCell>
                      </TableRow>
                    </TableHead>
                    {/* <Divider /> */}
                    <TableBody>
                      {
                        getData.map((element, id)=>{
                          return(
                            <>
                              <TableRow key={id}>
                                <TableCell>
                                  <NavLink to={`/cart/${element.id}`} onClick={handleClose} >
                                    <img src={element.image} style={{cursor:"pointer", width:"5rem", height:"5rem"}} alt="" />
                                  </NavLink>
                                </TableCell>
                                <TableCell>
                                  <p> Mobile Name :  {element.name} </p>
                                  <p> Price : {element.price} </p>
                                  <p> Quantity : {element.quantity} </p>
                                </TableCell>
                                <TableCell onClick={()=> props.dispatch(REMOVE(element.id))} >
                                  <Grid item xs={8}>
                                      <DeleteIcon sx={{color:"red", cursor:"pointer"}} />
                                    </Grid>
                                </TableCell>
                              </TableRow>
                            </>
                          )
                        })
                      }
                      <p> Total : {price} </p>
                    </TableBody>
                  </Table>
                </TableContainer> :
                
                <div className='cart_details my-1 d-flex justify-content-center align-items-center' style={{width:"24rem", paddind:10, position:'relative'}} >
                    <CloseIcon className="smallclose"
                    style={{position:"absolute", top:2, right:20, fontSize:23, cursor:"pointer" }} 
                    onClick={handleClose}
                />
                    <p style={{fontSize:22}}>Your Cart is Empty</p>
                    <img src="../Images/Cart.png" alt="Cart" className='emptycart_img' style={{width:"5rem", padding:10}} />
                </div>
              }
            </Menu>
          </Navbar>
        </>

    )
} 

function mapDispatchToProps(dispatch){
  return(
    {actions: bindActionCreators(REMOVE, dispatch)}
  )
} 
export default connect(mapDispatchToProps)(NavBar);