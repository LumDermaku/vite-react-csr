import { Link } from 'react-router-dom';
import './Home.css';

export default function Home(){
    return <div>
        <h3>
            Welcome to Cognyss homepage
        </h3>
        <p>
            Lorem ipsum
        </p>
        <Link to='/about'>
            Go to about page
        </Link>
    </div>
}