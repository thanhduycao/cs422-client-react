import React from 'react'
import { useState} from "react";
import { Grid, TextField, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles';

import axios from '../../../api/axios';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const useStyles = makeStyles(() => ({
    root: {
        padding: '2rem'
    }
}))

export const SignUpForm: React.FC = () => {


    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [email, setEmail] = useState('');
    const [fullname, setFullname] = useState('');

    const handleSubmit = async (e : any) => {
        e.preventDefault();
        // if (!USER_REGEX.test(user)) {
        //     const msg = 'Username must be 4-24 characters long, start with a letter and contain only letters, numbers, dashes and underscores.';
        //     console.log(msg);
        //     return;
        // }
        // if (!PWD_REGEX.test(pwd)) {
        //     const msg = 'Password must be 8-24 characters long, contain at least one lowercase letter, one uppercase letter, one number and one special character.';
        //     console.log(msg);
        //     return;
        // }
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            // console.log(JSON.stringify(response?.data));
            console.log(JSON.stringify(response))
            //clear state and controlled inputs
            setUser('');
            setPwd('');
        } catch (err) {
            console.log(err);
            // errRef.current.innerHTML = err.response.data;
        }
    }

    const classes = useStyles();
    const btnstyle = { margin: '8px 0' }
    return (
        <form onSubmit={handleSubmit}>
        <Grid container className={classes.root}>
            <Grid>
                <h2>Sign Up</h2>
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
            <TextField
                label='Email'
                placeholder='Enter email'
                type='email'
                variant="outlined"
                sx={{ paddingBottom: '1rem' }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                required
            />
            <TextField
                label='Fullname'
                placeholder='Enter fullname'
                variant="outlined"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
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
        </form>
    )
}
