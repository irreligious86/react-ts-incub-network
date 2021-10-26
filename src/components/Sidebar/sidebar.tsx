import React from "react";
import classes from './sidebar.module.css';

type SidebarPropsType = {

}

const Sidebar: React.FC<SidebarPropsType> = props => {
    return (
        <div className={classes['sidebar']}>
            <h3 className="component-title">Sidebar</h3>
        </div>
    )
}

export default Sidebar;