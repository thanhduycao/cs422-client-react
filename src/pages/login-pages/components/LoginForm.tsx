import React from 'react'
import { useRef, useState, useEffect, useContext } from 'react'
import { Grid, TextField, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '@mui/material';
import { makeStyles } from '@mui/styles';

import AuthContext from "../../../context/AuthProvider";
import axios from '../../../api/axios';
const LOGIN_URL = '/auth';

const useStyles = makeStyles(() => ({
    root: {
        padding: '2rem'
    }
}))


export const LoginForm: React.FC = () => {

    const setAuth  = useContext(AuthContext);
    const userRef = useRef<HTMLInputElement>(null);
    const pwdRef = useRef<HTMLInputElement>(null);

    const [user, setUser] = React.useState<string>('');
    const [pwd, setPwd] = React.useState<string>('');
    const [rememberMe, setRememberMe] = React.useState<boolean>(false);

    const [errMsg, setErrMsg] = React.useState('');
    const [success, setSuccess] = React.useState(false);

    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, pwd, rememberMe}),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );

            // console data in json with tsx
            console.log(JSON.stringify(response));

            setUser('');
            setPwd('');
            setSuccess(true);

        } catch (err) {
    
            // if (!err?.response) {
            //     setErrMsg('No Server Response');
            // } else if (err.response?.status === 400) {
            //     setErrMsg('Missing Username or Password');
            // } else if (err.response?.status === 401) {
            //     setErrMsg('Unauthorized');
            // } else {
            //     setErrMsg('Login Failed');
            // }
            // errRef.current.focus();

            console.log(err);
        }
    }

    const classes = useStyles();
    const btnstyle = { margin: '8px 0' }

    return (
        <form onSubmit={handleSubmit}>
        <Grid container className={classes.root}>
            <Grid>
                <h2>Sign In</h2>
            </Grid>
            <TextField
                label='Username'
                placeholder='Enter username'
                variant="outlined"
                sx={{ paddingBottom: '1rem' }}
                value={user}
                onChange={(e) => setUser(e.target.value)}
                fullWidth
                required
            />
            <TextField
                label='Password'
                placeholder='Enter password'
                type='password'
                variant="outlined"
                sx={{ paddingBottom: '1rem' }}
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
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
                // value={rememberMe}
                // onChange={(e) => setRememberMe(e.target.checked)}
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
        </form>
    )
}
