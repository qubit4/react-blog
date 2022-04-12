import {  Link } from "react-router-dom";
import classes from "./Navigation.module.css";  

const Navigation = () => {
    return (
    <nav className="navbar navbar-default navbar-fixed-top">
        <header className={classes.header}>
        <div className={classes.logo}><Link to="/">BlogWiz</Link></div>
            <ul> 
                <li>
                    <Link to="/">All Blogs</Link>
                </li>
                <li>
                    <Link to="/new-blog">New Blog</Link>
                </li>
            </ul>
        </header>
    </nav>)
}

export default Navigation;