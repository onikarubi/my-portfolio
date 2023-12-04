import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-800 text-white shadow-md fixed top-0 left-0 right-0 z-10">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="font-bold text-xl">Takeuchi Portfolio</div>
        <div className="flex gap-4">
          <Link href="/" className="hover:text-blue-300">
            トップ
          </Link>
          <Link href="/myprojects" className="hover:text-blue-300">
            My Projects
          </Link>
          <Link href="/contact" className="hover:text-blue-300">
            お問い合わせ
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
