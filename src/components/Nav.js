import { Link } from "react-router-dom"

function Nav(props) {
    return (
        <nav className="nav">
            <Link to="/">
                <div>Home</div>
            </Link>
            <Link to="/about">
                <div>About</div>
            </Link>
            <Link to="/contactus">
                <div>Contact Us</div>
            </Link>
        </nav>
    );
}

export default Nav;