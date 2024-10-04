import { Link } from 'react-router-dom';
import './About.css';

export default function About(){
    return <div>
        <h3>
            About
        </h3>
        <Link to='/'>
            Go to home page
        </Link>
    </div>
}