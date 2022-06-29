import {Outlet, Link} from "react-router-dom";

const Navbar = () => {
    return (
                <div className="wrapper">
                    <div className="sidebar">
                        <ul className="nav">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                            <li>
                                <Link to="/settings">Settings</Link>
                            </li>
                            <li>
                                <Link to="/admin">Admin</Link>
                            </li>
                        </ul>
                    </div>
                </div>
    )
}
export default Navbar;
