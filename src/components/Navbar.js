import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white shadow-md">
    <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-600">E-Learn</h1>
      <ul className="flex gap-6 text-sm text-gray-700">
        <li><Link to="/Home" className="hover:text-indigo-600">Home</Link></li>
        <li><Link to="/courses" className="hover:text-indigo-600">Courses</Link></li>
        <li><Link to="/progress" className="hover:text-indigo-600">Progress</Link></li>
        <li><Link to="/contact" className="hover:text-indigo-600">Contact</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
