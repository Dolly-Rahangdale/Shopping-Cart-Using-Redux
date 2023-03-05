import React from 'react'
// import './Register.css'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Typography from "@mui/material/Typography";
import { Card, CardContent, Grid, TextField, Button } from "@mui/material";


export default function Register() {
  return (
    <>
      <div><NavBar /></div>
      <div>
        <Card className='mt-5 mb-5' style={{ maxWidth: 750, margin: "0 auto", padding: "3px 6px" }} >
          <CardContent>
            <Typography gutterBottom variant="h6" align="left" >Register Form </Typography>
            <Typography gutterBottom variant="body2" color="textSecondary" component="p" align="left" > Fill up the Register Form and Welcome in our Shop</Typography>

            <form
            // onSubmit={handleAdd}
            >
              <Grid container spacing={1} >
                <Grid xs={12} sm={6} item>
                  <TextField label="First Name" name="productName" type="text" placeholder="Enter Product Name" variant="outlined" fullWidth required
                    // style={{p:-5}}
                    id="firstName"
                  // value={firstName}
                  // onChange={e => setFirstName(e.target.value)}
                  /></Grid>

                <Grid xs={12} sm={6} item>
                  <TextField label="lastName" type="text" name="price" placeholder="Enter Product Price" variant="outlined" fullWidth required
                    id="lastName"
                  // value={lastName}
                  // onChange={e => setLastName(e.target.value)}
                  /></Grid>

                <Grid xs={12} sm={12} item>
                  <TextField label="Email" type="email" name="email" placeholder="Enter Email Address" variant="outlined" fullWidth required
                    id="email"
                  // value={email}
                  // onChange={e => setEmail(e.target.value)}
                  /></Grid>

                <Grid xs={12} sm={6} item>
                  <TextField label="Password" type="password" name="password" placeholder="Enter password" variant="outlined" fullWidth required
                    id="password"
                  // value={password}
                  // onChange={e => setLastName(e.target.value)}
                  /></Grid>

                <Grid xs={12} sm={6} item>
                  <TextField label="Confirm Password" type="password" name="con_password" placeholder="Enter confirm password" variant="outlined" fullWidth required
                    id="con_password"
                  // value={con_password}
                  // onChange={e => setLastName(e.target.value)}
                  /></Grid>

                <Grid margin="8px" >
                  <Button type="submit" variant="contained" color="primary"
                  >Register</Button>
                </Grid>
                <Grid margin="8px">
                  <Button type="button" variant="contained" color="error"
                  // onClick={() => setIsAdding(false)}
                  >Cancel</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </div>
      <div><Footer /></div>

    </>
  )
}
