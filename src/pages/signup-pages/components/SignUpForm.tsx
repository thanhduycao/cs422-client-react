import React from 'react'
import { Grid, TextField, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root: {
        padding: '2rem'
    }
}))

export const SignUpForm: React.FC = () => {
    const classes = useStyles();
    const btnstyle = { margin: '8px 0' }
    return (
        <Grid container className={classes.root}>
            <Grid>
                <h2>Sign Up</h2>
            </Grid>
            <TextField
                label='Username'
                placeholder='Enter username'
                variant="outlined"
                sx={{ paddingBottom: '1rem' }}
                fullWidth
                required
            />
            <TextField
                label='Password'
                placeholder='Enter password'
                type='password'
                variant="outlined"
                sx={{ paddingBottom: '1rem' }}
                fullWidth
                required
            />
            <TextField
                label='Email'
                placeholder='Enter email'
                type='email'
                variant="outlined"
                sx={{ paddingBottom: '1rem' }}
                fullWidth
                required
            />
            <TextField
                label='Fullname'
                placeholder='Enter fullname'
                variant="outlined"
                fullWidth
                required
            />

            <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign up</Button>
            <Typography > Already have an account ?
                <Link to="/login" >
                    Sign In
                </Link>
            </Typography>
        </Grid>
    )
}
