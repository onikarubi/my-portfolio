import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const HeaderLogo = styled.div`
  width: 182px;
  height: 32px;

  img {
    position: static !important;
    object-fit: cover;
  }
`

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY === 0) {
        setShowHeader(false);
      } else if (window.scrollY > lastScrollY) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader);
      return () => {
        window.removeEventListener('scroll', controlHeader);
      };
    }
  }, [lastScrollY]);

  return (
    <header className={`bg-white text-black shadow-md fixed top-0 left-0 right-0 z-10 py-4 px-8 transition-transform duration-500 ${showHeader ? '' : '-translate-y-full'}`}>
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">
            <HeaderLogo>
              <Image layout='fill' alt='logo' src='/images/cooltext449417354758388.png' />
            </HeaderLogo>
          </Link>
        </div>
        <nav className="ml-auto">
          <div className="flex gap-10">
            <Link href="/" className="text-lg font-medium hover:text-blue-500 transition duration-300">
              トップ
            </Link>
            <Link href="/myprojects" className="text-lg font-medium hover:text-blue-500 transition duration-300">
              My Projects
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
