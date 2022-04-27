import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { FormControlLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import { Avatar } from '@mui/material';
import { Button, styled } from '@mui/material';
import { Grid } from '@mui/material';
import { Link } from '@mui/material';
import LockResetIcon from '@mui/icons-material/LockReset';

// const useStyles = makeStyles(theme => ({
//   "@global": {
//     body: {
//       backgroundColor: theme.palette.common.white
//     }
//   },
//   paper: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center"
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main
//   },
//   form: {
//     width: "100%",
//     marginTop: theme.spacing(3)
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2)
//   }
// }));

export default function Signup() {
  const Submit = styled(Button)({
    margin:"5",
    background:"skyblue"
  })
  
  return (
     <Container component="main" maxWidth="xs">
       <CssBaseline />
       <div>
         <Avatar>
           <LockResetIcon />
         </Avatar>
         <Typography component="h1" variant='h5'>
             Sign Up
         </Typography>
         <form>
           <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField 
                   autoComplete="fname"
                   name="firstName"
                   variant="outlined"
                   required
                   fullWidth
                   id="firstName"
                   label="First Name"
                   autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
           </Grid>
           <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"

          >
            Sign Up
          </Button>
          <Submit>Our button</Submit>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
         </form>
       </div>
     </Container>  
  )
}
