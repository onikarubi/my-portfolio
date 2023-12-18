import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white text-black shadow-md fixed top-0 left-0 right-0 z-10">
      <nav className="container mx-auto p-4 flex justify-center items-center">
        <div className="flex gap-10">
          <Link href="/" className="text-lg font-medium hover:text-blue-500 transition duration-300">
            トップ
          </Link>
          <Link href="/myprojects" className="text-lg font-medium hover:text-blue-500 transition duration-300">
            My Projects
          </Link>
          <Link href="/contact" className="text-lg font-medium hover:text-blue-500 transition duration-300">
            お問い合わせ
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
