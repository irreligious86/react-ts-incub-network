import React from "react";
import classes from './header.module.css';

type HeaderPropsType = {

}

const Header: React.FC<HeaderPropsType> = props => {
    return (
        <div className={classes['header']}>
            <h3 className="component-title">Header</h3>
        </div>
    )
}

export default Header;