import React from "react";
import classes from './sidebar.module.css';
import {NavLink} from "react-router-dom";

function Sidebar() {
    return (
        <div className={classes.sidebar}>
            <div className={classes['sidebar-item']}>
                <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes['sidebar-item']}>
                <NavLink to="/messenger" activeClassName={classes.active}>Messenger</NavLink>
            </div>
            <div className={classes['sidebar-item']}>
                <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes['sidebar-item']}>
                <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
            </div>
            <div className={classes['sidebar-item']}>
                <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
            </div>
        </div>
    )
}

export default Sidebar;