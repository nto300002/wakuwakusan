import Image from 'next/image';

export function BackgroundImage() {
  return (
    <Image
      src="/background.jpg"
      alt="background"
      className="bg-fixed"
      fill
      style={{ objectFit: 'cover', backgroundAttachment: 'fixed' }}
    />
  );
}
