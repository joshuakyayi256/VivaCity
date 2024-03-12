import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlass, faBagShopping } from '@fortawesome/free-solid-svg-icons';

export default function Header () {
  return (
    <div>
      <header className="bg-teal-400 shadow-md py-4 text-white flex flex-col">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            {/* Insert the logo image */}
            {/* <img src={VivaCity} alt="VivaCity Logo" className="h-20 w-auto" /> */}
            <nav className="hidden text-xl font-bold lg:flex space-x-4">
              <ul className="flex space-x-6 p-2">
                <Link to={'/our-story'} className="hover:underline">Our Story</Link>
                <li className="hover:underline"> Products</li>
                <li className="hover:underline"> Contact</li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center text-white space-x-8">
            <div className="cursor-pointer">
              {/* Link to SignUp component */}
              <Link to={'/login'}>
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </div>

            <div className="cursor-pointer">
              {/* Search icon here */}
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div className="cursor-pointer">
              {/* Add your shopping icon here */}
              <FontAwesomeIcon icon={faBagShopping} />
            </div>
          </div>
        </div>
      </div>
      </header>
    </div>
  );
}
