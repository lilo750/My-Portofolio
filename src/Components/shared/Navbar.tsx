import { Link } from '@mongez/react-router';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link className='nav-link' to='/'>
            home
          </Link>
        </li>
        <li>
          <Link className='nav-link' to='/skills'>
            skills
          </Link>
        </li>
        <li>
          <Link className='nav-link' to='/work'>
            work
          </Link>
        </li>
        {/* <li>
          <a to='#'>contact</a>
        </li> */}
        <li>
          <Link to='/dark'>light version</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
