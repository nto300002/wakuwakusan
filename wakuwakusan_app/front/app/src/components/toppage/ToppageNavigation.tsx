import Image from 'next/image';

export const ToppageNavigation = ({ children }: any) => {
  return (
    <div className='group rounded-lg border border-transparent px-6 py-4 transition-colors'>
      <h2
        className={`text-gray-700 mr-48 text-4xl font-semibold hover:text-red-500`}
      >
        {children}{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          &gt;
        </span>
      </h2>
    </div>
  );
};
