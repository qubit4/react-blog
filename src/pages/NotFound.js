import { Link } from "react-router-dom"
import classes from "./NotFound.module.css"

const NotFound = () => {
    return (
        <div className={classes.not_found}>
            <br />
            <h1>Page Not Found</h1>
            <br />
            <Link to="/" >Back to Homepage</Link>
        </div>
    )
}

export default NotFound;
