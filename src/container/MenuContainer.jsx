import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: '0 auto',
    },
});

export default function Menu() {
    const classes = useStyles();

    return (
        <div>
            <BottomNavigation
                className={classes.root}
            >
                <Link to='/'><BottomNavigationAction label="На главную" icon={<HomeIcon />} /></Link>
                <Link to='/news'><BottomNavigationAction label="Новости" icon={<FiberNewIcon />} /></Link>
                <Link to='/profile'><BottomNavigationAction label="Профиль" icon={<AccountBoxIcon />} /></Link>
            </BottomNavigation>
        </div>
    )
}
