import { Link } from 'react-router-dom';
import SpotifyLogo from '../Reusablecomponents/SpotifyLogo';
import style from "./NavBar.css"

const NavBar = () => {
    return (

        <nav>
            <SpotifyLogo color="white" />
            <ul>
                <li>
                    <Link to="/" className='nav-link'>Premium</Link>
                </li>

                <li>
                    <Link to="/support" className='nav-link'>Support</Link>
                </li>

                <li>
                    <Link to="/download" className='nav-link'>Download</Link>
                </li>

                <li>
                    |
                </li>

                <li>
                    <Link to="/signup" className='nav-link'>Sign up</Link>
                </li>

                <li>
                    <Link to="/login" className='nav-link'>Log in</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;