import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="text-xl text-center">
      <Link href="/about">
        <p className='hover:text-gray-800'>このサイトについて</p>
      </Link>
      <Link href="/tutorial">
        <p className='hover:text-gray-800'>チュートリアル</p>
      </Link>
      <p className='mt-2'>©2013 yasuda naoto</p>
    </div>
  );
};

export default Footer;
