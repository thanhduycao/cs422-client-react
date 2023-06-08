import React from 'react'
import { Grid, TextField, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root: {
        padding: '2rem'
    }
}))

export const LoginForm: React.FC = () => {
    const classes = useStyles();
    const btnstyle = { margin: '8px 0' }
    return (
        <Grid container className={classes.root}>
            <Grid>
                <h2>Sign In</h2>
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
                fullWidth
                required
            />
            <FormControlLabel
                control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                }
                label="Remember me"
            />
            <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
            <Typography >
                <Link to="/signup" >
                    Forgot password ?
                </Link>
            </Typography>
            <Typography > Do you have an account ?
                <Link to="/signup" >
                    Sign Up
                </Link>
            </Typography>
        </Grid>
    )
}
