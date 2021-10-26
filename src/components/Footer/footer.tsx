import React from "react";
import classes from './footer.module.css';

type FooterPropsType = {

}

const Footer: React.FC<FooterPropsType> = props => {
    return (
        <div className={classes['footer']}>
            <h3 className="component-title">Footer</h3>
        </div>
    )
}

export default Footer;