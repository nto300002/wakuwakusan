'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Avatar from './atoms/Avatar';

const Header = () => {
  const [isLoggedIn, setLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const styleHover = 'hover:text-blue-500';
  return (
    <div className="w-full text-white bg-blue-600 p-6 flex justify-between">
      <Link href="/">
        <Image src="/title_logo.png" alt="title" width={100} height={70} />
      </Link>
      <div className="flex justify-end space-x-8">
        <p onClick={() => setLogin(!isLoggedIn)} className="pt-5">
          {isLoggedIn ? 'Logout' : 'Login'}
        </p>
        {isLoggedIn ? <Avatar /> : <></>}

        <nav onClick={() => setIsOpen(!isOpen)} className="relative text-right">
          <div className="pt-6">
            {isOpen ? (
              <Image src="/menu_down.png" alt="menu" width={60} height={40} />
            ) : (
              <Image src="/menu_up.png" alt="menu" width={60} height={40} />
            )}
          </div>
          {isOpen && (
            <div className="origin-top-right absolute text-gray-800 p-6 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 text-left">
              {isLoggedIn ? (
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <Link href="/selection/new">
                    <p className={styleHover}>目標を立てる</p>
                  </Link>
                  <span>--------------</span>
                  <Link href="/selections">
                    <p className={styleHover}>立てた目標一覧</p>
                  </Link>
                  <span>--------------</span>
                  <Link href="/profile">
                    <p className={styleHover}>プロフィール</p>
                  </Link>
                  <span>--------------</span>
                  <Link href="/logout">
                    <p className={styleHover}>ログアウト</p>
                  </Link>
                </div>
              ) : (
                // Logged-in user menu options here
                <div>
                  <Link href="/login">
                    <p className={styleHover}>ログイン</p>
                  </Link>
                  <span>--------------</span>
                  <Link href="/signup">
                    <p className={styleHover}>サインアップ</p>
                  </Link>
                  <span>--------------</span>
                  <Link href="/selections">
                    <p className={styleHover}>目標一覧</p>
                  </Link>
                </div>
                // Guest menu options here
              )}
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};
export default Header;
