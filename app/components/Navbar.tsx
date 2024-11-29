// components/Navbar.tsx
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-white hover:text-gray-300">Home</Link>
        </li>
        <li>
          <Link href="/inputdata" className="text-white hover:text-gray-300">input</Link>
        </li>
        <li>
          <Link href="/class-notes" className="text-white hover:text-gray-300">Class Notes</Link>
        </li>
        <li>
          <Link href="/previous-year-papers" className="text-white hover:text-gray-300">Previous Year Papers</Link>
        </li>
        <li>
          <Link href="/about-me" className="text-white hover:text-gray-300">About Me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;