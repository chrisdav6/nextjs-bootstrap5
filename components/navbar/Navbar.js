import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top'>
      <div className='container'>
        <Link href='/'>
          <a className='navbar-brand'>Frontend Bootcamp</a>
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navmenu'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navmenu'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link href='#learn'>
                <a className='nav-link'>What You'll Learn</a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='#questions'>
                <a className='nav-link'>Questions</a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='#instructors'>
                <a className='nav-link'>Instructors</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
