'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

interface NavItemProps {
  text: string;
  path: string;
}

const NavItem:React.FC<NavItemProps> = ({ text, path }) => {

  const pathname = usePathname();
  const isActive = pathname == path;

  return (
    <motion.li
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`cursor-pointer py-2 px-4 border-b-2 border-transparent hover:border-accent transition duration-300 ${isActive ? 'border-accent' : ''}`}
    >
      <Link href={path}>
        {text}
      </Link>
    </motion.li>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-8 bg-primary">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-bold">Nassim Hassain</h1>
        <nav className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="block text-gray-500 hover:text-gray-800 focus:text-gray-800 focus:outline-none">
            <svg className="w-6 h-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </nav>
        <ul className={`${isOpen ? 'fixed inset-0 bg-primary bg-opacity-95 z-50 flex flex-col items-center justify-center' : 'hidden'} md:flex md:items-center md:w-auto`}>
          <NavItem text="Accueil" path="/" />
          <NavItem text="Expérience associative" path="/experience" />
          <NavItem text="Parcours" path="/parcours" />
          <NavItem text="Ambitions" path="/valeurs" />
        </ul>
      </div>
    </header>
  );
};

export default Header;
