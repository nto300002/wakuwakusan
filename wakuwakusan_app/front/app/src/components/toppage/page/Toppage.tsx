import { BackgroundImage } from '@/components/toppage/BackgroundImage';
import { ToppageLogo } from '@/components/toppage/ToppageLogo';
import { ToppageNavigation } from '@/components/toppage/ToppageNavigation';
import Link from 'next/link';

export const Toppage = () => {
  return (
    <>
      <BackgroundImage />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col">
          <h1 className="text-gray-700 text-3xl mb-20">
            <span className="text-5xl">困</span>ったら、
            <span className="text-5xl">ワクワク</span>する方を選べ
          </h1>
          <p className="fixed top-0 flex w-full justify-center from-zinc-200 pb-6 pt-8 lg:static lg:w-auto lg:rounded-xl">
            <ToppageLogo />
          </p>
        </div>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center from-white via-white lg:static lg:h-auto lg:w-auto lg:bg-none"></div>
        <div className="flex flex-col mt-32">
          <Link href="/login">
            <ToppageNavigation>Login</ToppageNavigation>
          </Link>
          <br />
          <Link href="/signup">
            <ToppageNavigation>Signup</ToppageNavigation>
          </Link>
        </div>
      </div>
    </>
  );
}
