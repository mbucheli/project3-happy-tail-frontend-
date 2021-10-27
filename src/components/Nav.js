import { Link } from "react-router-dom"

function Nav(props) {
    return (
        <nav className="navBar">
            <Link to="/about">
                <h3 id="navAbout">About</h3>
            </Link>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <h3 id="navHome">Home</h3>
            </Link>
            <Link to="/contactus">
                <h3 id="navContactUs">Contact Us</h3>
            </Link>
        </nav>
    );
}

export default Nav;