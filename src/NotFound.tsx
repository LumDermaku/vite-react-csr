import { Link } from 'react-router-dom';
import './About.css';

export default function NotFound(){
    return <div>
        <h3>
            Page not found
        </h3>
        <Link to='/'>
            Go to home page
        </Link>
    </div>
}